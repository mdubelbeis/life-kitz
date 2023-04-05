from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from .serializers import NoteSerializer
from .models import Note


# Create your views here.
class NoteViewSet(viewsets.ModelViewSet):
    serializer_class = NoteSerializer
    queryset = Note.objects.all()
    permission_classes = [IsAuthenticated]
