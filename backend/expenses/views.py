from rest_framework import viewsets
from .serializers import ExpenseSerializer
from .models import Expense
from rest_framework.permissions import IsAuthenticated
from .permissions import ReadOnly, AuthorOrReadOnly


class ExpenseViewSet(viewsets.ModelViewSet):
    queryset = Expense.objects.all()
    serializer_class = ExpenseSerializer
    permission_classes = [IsAuthenticated]
