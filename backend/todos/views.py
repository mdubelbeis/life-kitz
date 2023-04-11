from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated, AllowAny
from .serializers import TodoSerializer
from .models import Todo
from .permissions import ReadOnly, AuthorOrReadOnly


class TodoViewSet(viewsets.ModelViewSet):
    serializer_class = TodoSerializer
    queryset = Todo.objects.all()
    # Change to IsAuthenticated to require authentication
    permission_classes = [AuthorOrReadOnly]
