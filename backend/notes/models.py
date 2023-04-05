from django.db import models
from django.utils import timezone
from django.contrib.auth import get_user_model

User = get_user_model()
# Create your models here.


class Note(models.Model):
    title = models.CharField(max_length=120)
    content = models.TextField()
    created_at = models.DateTimeField(default=timezone.now)
    user = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name='notes')

    def __str__(self):
        return 'Note added'

    class Meta:
        ordering = ["-created_at"]
