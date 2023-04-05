from django.db import models
from django.utils import timezone

# Create your models here.


class Todo(models.Model):
    title = models.CharField(max_length=120)
    description = models.TextField()
    created_at = models.DateTimeField(default=timezone.now)
    completed = models.BooleanField(default=False)

    def __str__(self):
        return 'Todo added'

    class Meta:
        ordering = ["-created_at"]
