from rest_framework.decorators import api_view, permission_classes
from rest_framework.request import Request
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated

# Create your views here.


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def index(request: Request):
    return Response({"message": "Hello, world!"}, status=status.HTTP_200_OK)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_todos(request: Request):
    return Response({"message": "GET"}, status=status.HTTP_200_OK)


@ api_view(['GET', 'POST', 'DELETE', 'PUT'])
@permission_classes([IsAuthenticated])
def todo_action(request: Request, pk=None):
    if request.method == 'GET':
        return Response({"message": "GET"}, status=status.HTTP_200_OK)
    elif request.method == 'POST':
        return Response({"message": "POST"}, status=status.HTTP_200_OK)
    elif request.method == 'DELETE':
        return Response({"message": "DELETE"}, status=status.HTTP_200_OK)
    elif request.method == 'PUT':
        return Response({"message": "PUT"}, status=status.HTTP_200_OK)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_expenses(request: Request):
    return Response({"message": "GET"}, status=status.HTTP_200_OK)


@api_view(['GET', 'POST', 'DELETE', 'PUT'])
@permission_classes([IsAuthenticated])
def expense_action(request: Request, pk=None):
    if request.method == 'GET':
        return Response({"message": "GET"}, status=status.HTTP_200_OK)
    elif request.method == 'POST':
        return Response({"message": "POST"}, status=status.HTTP_200_OK)
    elif request.method == 'DELETE':
        return Response({"message": "DELETE"}, status=status.HTTP_200_OK)
    elif request.method == 'PUT':
        return Response({"message": "PUT"}, status=status.HTTP_200_OK)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_notes(request: Request):
    return Response({"message": "GET"}, status=status.HTTP_200_OK)


@api_view(['GET', 'POST', 'DELETE', 'PUT'])
@permission_classes([IsAuthenticated])
def note_action(request: Request, pk=None):
    if request.method == 'GET':
        return Response({"message": "GET"}, status=status.HTTP_200_OK)
    elif request.method == 'POST':
        return Response({"message": "POST"}, status=status.HTTP_200_OK)
    elif request.method == 'DELETE':
        return Response({"message": "DELETE"}, status=status.HTTP_200_OK)
    elif request.method == 'PUT':
        return Response({"message": "PUT"}, status=status.HTTP_200_OK)
