from django.db import models
from django.utils import timezone


from django.contrib.auth import get_user_model

# Create your models here.
User = get_user_model()


class Todo(models.Model):
    title = models.CharField(max_length=120)
    description = models.TextField()
    created_at = models.DateTimeField(default=timezone.now)
    completed = models.BooleanField(default=False)
    author_id = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        related_name="todos",
        null=True,
    )

    def __str__(self):
        return self.author_id

    class Meta:
        ordering = ["-id"]
