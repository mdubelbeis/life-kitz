from rest_framework.permissions import BasePermission, SAFE_METHODS


class ReadOnly(BasePermission):
    def has_permission(self, request, view):
        # if false -> no access/permission
        return request.method in SAFE_METHODS


class AuthorOrReadOnly(BasePermission):
    def has_object_permission(self, request, view, obj):
        # if false -> no access/permission
        if request.method in SAFE_METHODS:
            return True
        return obj.author == request.user
