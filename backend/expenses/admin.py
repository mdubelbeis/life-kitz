from django.contrib import admin

# Register your models here.
from .models import Expense

# Register your models here.


@admin.register(Expense)
class ExpenseAdmin(admin.ModelAdmin):
    list_display = ['id', 'title', 'amount', 'date',
                    'description', 'created_at', 'user']
    list_filter = ['date']
