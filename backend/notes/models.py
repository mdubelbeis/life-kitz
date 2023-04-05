from django.db import models
from django.utils import timezone

# Create your models here.


class Note(models.Model):
    title = models.CharField(max_length=120)
    content = models.TextField()
    created_at = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return 'Note added'

    class Meta:
        ordering = ["-created_at"]
