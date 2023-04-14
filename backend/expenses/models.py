from django.db import models
from django.utils import timezone
from django.contrib.auth import get_user_model


# Create your models here.

User = get_user_model()


class Expense(models.Model):
    title = models.CharField(max_length=120)
    amount = models.FloatField()
    date = models.DateField()
    description = models.TextField()
    created_at = models.DateTimeField(default=timezone.now)
    author_id = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name='expenses', default=1)

    def __str__(self):
        return 'Expense added'

    class Meta:
        ordering = ["-id"]
