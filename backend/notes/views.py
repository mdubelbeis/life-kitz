from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from .serializers import NoteSerializer
from .models import Note
from .permissions import ReadOnly, AuthorOrReadOnly

# Create your views here.


class NoteViewSet(viewsets.ModelViewSet):
    serializer_class = NoteSerializer
    queryset = Note.objects.all()
    permission_classes = [IsAuthenticated]
