from rest_framework.decorators import api_view, permission_classes

from rest_framework import viewsets
from .serializers import TodoSerializer
from .models import Todo
# Create your views here.

# ! CLB - Class Based Views


class TodoViewSet(viewsets.ModelViewSet):
    serializer_class = TodoSerializer
    queryset = Todo.objects.all()


# ! FBV - Function Based Views

# @api_view(['GET'])
# @permission_classes([IsAuthenticated])
# def index(request: Request):
#     return Response({"message": "Hello, world!"}, status=status.HTTP_200_OK)


# @api_view(['GET'])
# @authentication_classes((TokenAuthentication,))
# @permission_classes([IsAuthenticated])
# def get_todos(request: Request):
#     return Response({"message": "GET"}, status=status.HTTP_200_OK)


# @ api_view(['GET', 'POST', 'DELETE', 'PUT'])
# @authentication_classes((TokenAuthentication,))
# @permission_classes([IsAuthenticated])
# def todo_action(request: Request, pk=None):
#     if request.method == 'GET':
#         return Response({"message": "GET"}, status=status.HTTP_200_OK)
#     elif request.method == 'POST':
#         return Response({"message": "POST"}, status=status.HTTP_200_OK)
#     elif request.method == 'DELETE':
#         return Response({"message": "DELETE"}, status=status.HTTP_200_OK)
#     elif request.method == 'PUT':
#         return Response({"message": "PUT"}, status=status.HTTP_200_OK)


# @api_view(['GET'])
# @authentication_classes((TokenAuthentication,))
# @permission_classes([IsAuthenticated])
# def get_expenses(request: Request):
#     return Response({"message": "GET"}, status=status.HTTP_200_OK)


# @api_view(['GET', 'POST', 'DELETE', 'PUT'])
# @authentication_classes((TokenAuthentication,))
# @permission_classes([IsAuthenticated])
# def expense_action(request: Request, pk=None):
#     if request.method == 'GET':
#         return Response({"message": "GET"}, status=status.HTTP_200_OK)
#     elif request.method == 'POST':
#         return Response({"message": "POST"}, status=status.HTTP_200_OK)
#     elif request.method == 'DELETE':
#         return Response({"message": "DELETE"}, status=status.HTTP_200_OK)
#     elif request.method == 'PUT':
#         return Response({"message": "PUT"}, status=status.HTTP_200_OK)


# @api_view(['GET'])
# @authentication_classes((TokenAuthentication,))
# @permission_classes([IsAuthenticated])
# def get_notes(request: Request):
#     return Response({"message": "GET"}, status=status.HTTP_200_OK)


# @api_view(['GET', 'POST', 'DELETE', 'PUT'])
# @authentication_classes((TokenAuthentication,))
# @permission_classes([IsAuthenticated])
# def note_action(request: Request, pk=None):
#     if request.method == 'GET':
#         return Response({"message": "GET"}, status=status.HTTP_200_OK)
#     elif request.method == 'POST':
#         return Response({"message": "POST"}, status=status.HTTP_200_OK)
#     elif request.method == 'DELETE':
#         return Response({"message": "DELETE"}, status=status.HTTP_200_OK)
#     elif request.method == 'PUT':
#         return Response({"message": "PUT"}, status=status.HTTP_200_OK)
