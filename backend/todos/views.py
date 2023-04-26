from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from .serializers import TodoSerializer
from .models import Todo
from rest_framework.permissions import IsAuthenticated
from .permissions import AuthorOrReadOnly


# Create your models here.


class TodoViewSet(viewsets.ModelViewSet):
    serializer_class = TodoSerializer
    queryset = Todo.objects.all()
    # Change to IsAuthenticated to require authentication
    permission_classes = [IsAuthenticated]
