from .serializers import SignUpSerializer
from rest_framework import generics, status
from django.contrib.auth import authenticate
from rest_framework.response import Response
from rest_framework.request import Request
from rest_framework.views import APIView
from rest_framework.decorators import api_view, permission_classes, authentication_classes
from django.views.decorators.csrf import csrf_exempt
from .tokens import create_jwt_pair_for_user
from rest_framework.permissions import IsAuthenticated, AllowAny

# Create your views here.


# @authentication_classes([])
@api_view(["GET", "POST"])
@csrf_exempt
@permission_classes([AllowAny])
def Auth_Homepage(request: Request):
    return Response("Hello World!")


class SignUpView(generics.GenericAPIView):
    serializer_class = SignUpSerializer
    permission_classes = []

    def post(self, request: Request):
        data = request.data

        serializer = self.serializer_class(data=data)

        if serializer.is_valid():
            serializer.save()

            response = {
                "message": "User Created Successfully",
                "data": serializer.data
            }

            return Response(data=response, status=status.HTTP_201_CREATED)

        return Response(data=serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class LoginView(APIView):
    permission_classes = []

    def post(self, request: Request):
        # Get credentials in body of POST request:
        email = request.data.get('email')
        password = request.data.get('password')

        user = authenticate(email=email, password=password)

        if user is not None:
            tokens = create_jwt_pair_for_user(user)
            response = {"message": "Login successful!", "tokens": tokens}
            return Response(data=response, status=status.HTTP_200_OK)
        else:
            response = {"message": "Invalid Credentials"}
            return Response(data=response, status=status.HTTP_400_BAD_REQUEST)

    def get(self, request: Request):
        content = {
            "user": str(request.user),
            "auth": str(request.auth)
        }

        return Response(data=content, status=status.HTTP_200_OK)
