from django.db import models
from django.utils import timezone
from django.contrib.auth import get_user_model

# Create your models here.
User = get_user_model()


class Note(models.Model):
    title = models.CharField(max_length=120)
    content = models.TextField()
    created_at = models.DateTimeField(default=timezone.now)
    author_id = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name='notes', default=1)

    def __str__(self):
        return 'Note added'

    class Meta:
        ordering = ["-id"]
