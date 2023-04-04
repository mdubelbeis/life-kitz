from django.urls import path

from . import views

urlpatterns = [
    path("", views.index, name="index"),
    # > TODOS
    path('todos/', views.get_todos),
    # Add guards for request.Method in todo_action
    path('todos/<int:pk>/', views.todo_action),

    # > EXPENSES
    path('expenses/', views.get_expenses),
    # Add guards for request.Method in expense_action
    path('expenses/<int:pk>/', views.expense_action),

    # > NOTES
    # give me same paths as expenses
    path('notes/', views.get_notes),
    # Add guards for request.Method in note_action
    path('notes/<int:pk>/', views.note_action),
]
