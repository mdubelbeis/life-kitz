from rest_framework import serializers
from .models import Expense


class ExpenseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Expense
        fields = [
            "id",
            "title",
            "amount",
            "date",
            "description",
            "created_at",
            "author_id",
        ]
        read_only_fields = ["id"]
