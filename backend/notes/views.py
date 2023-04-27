from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from django.http import JsonResponse
from .serializers import NoteSerializer
from .models import Note

from django.contrib.auth import get_user_model

User = get_user_model()


# Create your views here.
class NoteViewSet(viewsets.ModelViewSet):
    serializer_class = NoteSerializer
    permission_classes = [IsAuthenticated]
    # queryset = Note.objects.all()

    def get_queryset(self):
        return Note.objects.all().filter(author_id_id=self.request.user.id)

    def perform_create(self, serializer):
        author_id_id = self.request.user

        title = self.request.data["title"]
        content = self.request.data["content"]

        user = Note(author_id=author_id_id, title=title, content=content)
        user.save()

        return JsonResponse({"message": "Note Created Successfully"})
