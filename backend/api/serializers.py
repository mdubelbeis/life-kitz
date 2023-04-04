from rest_framework import serializers

from .models import Todo, Expense, Note


class TodoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Todo
        fields = '[id, title, description, completed]'
        read_only_fields = ['id']


class ExpenseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Expense
        fields = '[id, title, amount, date, description]'
        read_only_fields = ['id']


class NoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Note
        fields = '[id, title, content]'
        read_only_fields = ['id']
