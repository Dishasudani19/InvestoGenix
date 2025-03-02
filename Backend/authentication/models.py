from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin, User
from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator
import json

class UserManager(BaseUserManager):
    def create_user(self, email, name, password=None):
        if not email:
            raise ValueError('Users must have an email address')
        if not name:
            raise ValueError('Users must have a name')

        email = self.normalize_email(email)
        user = self.model(email=email, name=name)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, name, password):
        user = self.create_user(email, name, password)
        user.is_admin = True
        user.is_staff = True
        user.is_superuser = True
        user.save(using=self._db)
        return user

class User(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(unique=True)
    name = models.CharField(max_length=255)
    is_active = models.BooleanField(default=True)
    is_admin = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)

    groups = models.ManyToManyField(
        "auth.Group",
        related_name="custom_user_groups",
        blank=True
    )
    user_permissions = models.ManyToManyField(
        "auth.Permission",
        related_name="custom_user_permissions",
        blank=True
    )

    objects = UserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['name']

    def __str__(self):
        return self.email

    def has_perm(self, perm, obj=None):
        return True

    def has_module_perms(self, app_label):
        return True
    




class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, null=True, blank=True)
    # If you want to associate profiles with users later
    
    # Personal Information
    fullName = models.CharField(max_length=255)
    age = models.PositiveIntegerField()
    occupation = models.CharField(max_length=255)
    
    # Financial Status
    annualIncome = models.DecimalField(max_digits=15, decimal_places=2)
    monthlyExpenses = models.DecimalField(max_digits=15, decimal_places=2)
    savingsAmount = models.DecimalField(max_digits=15, decimal_places=2)
    
    # Investment Profile
    EXPERIENCE_CHOICES = [
        ('beginner', 'Beginner'),
        ('intermediate', 'Intermediate'),
        ('advanced', 'Advanced'),
    ]
    investmentExperience = models.CharField(max_length=20, choices=EXPERIENCE_CHOICES, default='beginner')
    riskTolerance = models.IntegerField(validators=[MinValueValidator(0), MaxValueValidator(100)], default=50)
    financialGoals = models.TextField(blank=True)
    
    # Financial Situation
    hasEmergencyFund = models.BooleanField(default=False)
    hasDebts = models.BooleanField(default=False)
    
    # Learning Interests
    _interestedTopics = models.TextField(blank=True, db_column='interestedTopics')
    
    # Created/Updated timestamps
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    @property
    def interestedTopics(self):
        if not self._interestedTopics:
            return []
        return json.loads(self._interestedTopics)
    
    @interestedTopics.setter
    def interestedTopics(self, value):
        self._interestedTopics = json.dumps(value)
    
    def __str__(self):
        return f"Profile for {self.fullName}"
