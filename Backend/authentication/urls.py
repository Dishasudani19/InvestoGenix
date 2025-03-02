from django.urls import path,include
from .views import SignupView, LoginView,  UserProfileViewSet
from rest_framework.routers import DefaultRouter

# router = DefaultRouter()
# router.register(r'profile', UserProfileViewSet, basename='profile')


urlpatterns = [
    path('signup/', SignupView.as_view(), name='signup'),
    path('login/', LoginView.as_view(), name='login'),
    path('profile/', UserProfileViewSet.as_view(({'get': 'list', 'post': 'create'})), name='profile'),
    #  path('api/', include(router.urls)),
]






