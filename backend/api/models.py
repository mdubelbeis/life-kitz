from django.db import models

# Create your models here.


class Todo(models.Model):
    title = models.CharField(max_length=120)
    description = models.TextField()
    completed = models.BooleanField(default=False)

    def __str__(self):
        return 'Todo added'


class Expense(models.Model):
    title = models.CharField(max_length=120)
    amount = models.FloatField()
    date = models.DateField()
    description = models.TextField()

    def __str__(self):
        return 'Expense added'


class Note(models.Model):
    title: models.CharField(max_length=120)
    content: models.TextField()

    def __str__(self):
        return 'Note added'
