from rest_framework.decorators import api_view, permission_classes
from rest_framework.decorators import authentication_classes
from rest_framework.request import Request
from rest_framework.authentication import TokenAuthentication
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from rest_framework import viewsets
from .serializers import ExpenseSerializer
from .models import Expense

# Create your views here.


class ExpenseViewSet(viewsets.ModelViewSet):
    serializer_class = ExpenseSerializer
    queryset = Expense.objects.all()
