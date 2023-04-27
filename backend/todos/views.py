from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from .serializers import TodoSerializer
from django.http import JsonResponse
from .models import Todo
from rest_framework.permissions import IsAuthenticated
from .permissions import AuthorOrReadOnly


from django.contrib.auth import get_user_model

User = get_user_model()


# Create your models here.


class TodoViewSet(viewsets.ModelViewSet):
    serializer_class = TodoSerializer
    permission_classes = [IsAuthenticated]
    # queryset = Todo.objects.all()

    def get_queryset(self):
        return Todo.objects.all().filter(author_id_id=self.request.user.id)

    def perform_create(self, serializer):
        author_id_id = self.request.user

        title = self.request.data["title"]
        description = self.request.data["description"]

        user = Todo(author_id=author_id_id, title=title, description=description)
        user.save()

        return JsonResponse({"message": "Todo Created Successfully"})
