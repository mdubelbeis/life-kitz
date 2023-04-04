from django.contrib import admin

from .models import Todo, Expense, Note

# Register your models here.
admin.site.register([Todo, Expense, Note])
