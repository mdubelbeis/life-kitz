

from django.contrib import admin
from django.urls import path, include

from rest_framework import routers
import notes.views
import todos.views
import expenses.views


router = routers.DefaultRouter()
router.register(r'todos', todos.views.TodoViewSet, 'todos')
router.register(r'notes', notes.views.NoteViewSet, 'notes')
router.register(r'expenses', expenses.views.ExpenseViewSet, 'expenses')

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/", include(router.urls)),
    path("auth/", include("accounts.urls"))
]
