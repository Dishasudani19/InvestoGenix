from django.shortcuts import render

# Create your views here.

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework_simplejwt.tokens import RefreshToken
from .models import User
from .serializers import UserSerializer
from rest_framework.permissions import IsAuthenticated
from rest_framework import viewsets
from .models import UserProfile
from .serializers import UserProfileSerializer
from django.http import Http404

class SignupView(APIView):
    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class LoginView(APIView):
    def post(self, request):
        email = request.data.get('email')
        password = request.data.get('password')

        try:
            user = User.objects.get(email=email)
            if user.check_password(password):
                refresh = RefreshToken.for_user(user)
                serializer = UserSerializer(user) #add 1
                return Response({
                    'refresh': str(refresh),
                    'access': str(refresh.access_token),
                    'user': serializer.data #add 1
                })
            return Response({'error': 'Invalid credentials'}, status=status.HTTP_400_BAD_REQUEST)
        except User.DoesNotExist:
            return Response({'error': 'User not found'}, status=status.HTTP_404_NOT_FOUND)

# class UserProfileView(APIView):
#     permission_classes = [IsAuthenticated]  # Ensure the user is logged in

#     def get(self, request):
#         user = request.user  # Get the logged-in user
#         serializer = UserSerializer(user)
#         return Response(serializer.data, status=status.HTTP_200_OK)

#     def patch(self, request):
#         user = request.user  # Get the logged-in user
#         serializer = UserSerializer(user, data=request.data, partial=True)  # Allow partial updates

#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data, status=status.HTTP_200_OK)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class UserProfileViewSet(viewsets.ViewSet):
    def list(self, request):
        """Get the current user's profile or return 404 if none exists"""
        try:
            # For now, just get the first profile
            # In a real app, you'd filter by request.user
            profile = UserProfile.objects.first()
            if not profile:
                return Response(status=status.HTTP_404_NOT_FOUND)
            
            serializer = UserProfileSerializer(profile)
            return Response(serializer.data)
        except UserProfile.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
    
    def create(self, request):
        """Create or update a user profile"""
        try:
            # Try to get the existing profile (first one for now)
            # In a real app with user authentication, you'd get the current user's profile
            profile = UserProfile.objects.first()
            serializer = UserProfileSerializer(profile, data=request.data)
        except UserProfile.DoesNotExist:
            # Create new profile if none exists
            serializer = UserProfileSerializer(data=request.data)
        
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)