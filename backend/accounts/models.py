from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
from django.contrib.auth.base_user import BaseUserManager


class CustomUserManager(BaseUserManager):
    # create user
    def create_user(self, email, password, **extra_fields):
        '''
        Create and save a User with the given email and password.
        '''
        email = self.normalize_email(email)

        user = self.model(
            email=email, **extra_fields
        )

        user.set_password(password)
        user.save()

        return user

    # create superuser
    def create_superuser(self, email, password, **extra_fields):
        '''
        Create and save a SuperUser with the given email and password.
        '''
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        if extra_fields.get("is_staff") is not True:
            raise ValueError("Superuser must have is_staff=True.")

        if extra_fields.get("is_superuser") is not True:
            raise ValueError("Superuser must have is_superuser=True.")

        return self.create_superuser(email=email, password=password, **extra_fields)


class User(AbstractUser):
    email = models.EmailField(max_length=255, unique=True)
    username = models.CharField(max_length=45, unique=True)
    date_of_birth = models.DateField()

    objects = CustomUserManager()
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    def __str__(self):
        return self.username
