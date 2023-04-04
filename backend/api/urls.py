from django.urls import path

from . import views

urlpatterns = [
    path("", views.index, name="index"),

    # > TODOS
    path('todos/', views.get_todos),
    path('todos/<int:pk>/', views.todo_action),

    # > EXPENSES
    path('expenses/', views.get_expenses),
    path('expenses/<int:pk>/', views.expense_action),

    # > NOTES
    path('notes/', views.get_notes),
    path('notes/<int:pk>/', views.note_action),
]