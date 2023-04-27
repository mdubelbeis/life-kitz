from rest_framework import viewsets
from .serializers import ExpenseSerializer
from .models import Expense
from rest_framework.permissions import IsAuthenticated
from django.http import JsonResponse


class ExpenseViewSet(viewsets.ModelViewSet):
    queryset = Expense.objects.all()
    serializer_class = ExpenseSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return Expense.objects.all().filter(author_id_id=self.request.user.id)

    def perform_create(self, serializer):
        author_id_id = self.request.user

        title = self.request.data["title"]
        amount = self.request.data["amount"]

        user = Expense(author_id=author_id_id, title=title, amount=amount)
        user.save()

        return JsonResponse({"message": "Expense Created Successfully"})
