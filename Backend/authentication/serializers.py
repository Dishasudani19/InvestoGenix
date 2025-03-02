from rest_framework import serializers
from bson import ObjectId
from .models import UserProfile
from .models import User

class UserSerializer(serializers.ModelSerializer):
    id = serializers.CharField(read_only=True)  

    class Meta:
        model = User
        fields = ['id', 'email', 'name', 'password']
        extra_kwargs = {'password': {'write_only': True}}  

    def create(self, validated_data):
        """ Hash password before saving user """
        user = User(
            email=validated_data['email'],
            name=validated_data['name']
        )
        user.set_password(validated_data['password'])  # Hash the password
        user.save()
        return user

    def to_representation(self, instance):
        """ Convert ObjectId to string for JSON response """
        representation = super().to_representation(instance)
        representation['id'] = str(instance.id) if isinstance(instance.id, ObjectId) else instance.id
        return representation
    



class UserProfileSerializer(serializers.ModelSerializer):
    interestedTopics = serializers.ListField(child=serializers.CharField(), required=False)
    
    class Meta:
        model = UserProfile
        fields = [
            'id', 'fullName', 'age', 'occupation', 
            'annualIncome', 'monthlyExpenses', 'savingsAmount',
            'investmentExperience', 'riskTolerance', 'financialGoals',
            'hasEmergencyFund', 'hasDebts', 'interestedTopics',
            'created_at', 'updated_at'
        ]
        read_only_fields = ['id', 'created_at', 'updated_at']
    
    def to_internal_value(self, data):
        # Convert string numbers to decimal/integer
        for field in ['annualIncome', 'monthlyExpenses', 'savingsAmount']:
            if field in data and isinstance(data[field], str):
                try:
                    data[field] = float(data[field])
                except (ValueError, TypeError):
                    pass
        
        if 'age' in data and isinstance(data['age'], str):
            try:
                data['age'] = int(data['age'])
            except (ValueError, TypeError):
                pass
                
        return super().to_internal_value(data)

