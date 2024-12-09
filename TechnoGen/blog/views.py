from django.db import DatabaseError
from django.db import connection
from django.db.utils import OperationalError
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import BlogPost
from .serializers import BlogPostSerializer

@api_view(['GET'])
def post_list(request):
    try:
        posts = BlogPost.objects.all().order_by('-date')
        for post in posts:
            post.author = {
                'name': 'John Doe',  # Default author
                'avatar': 'https://api.dicebear.com/7.x/avataaars/svg?seed=John'  # Default avatar
            }
        serializer = BlogPostSerializer(posts, many=True)
        return Response(serializer.data)
    except DatabaseError:
        return Response(
            {"error": "Database connection error"},
            status=status.HTTP_503_SERVICE_UNAVAILABLE
        )

@api_view(['GET'])
def post_detail(request, id):
    try:
        post = BlogPost.objects.get(id=id)
        post.author = {
            'name': post.author_name,
            'avatar': post.author_avatar
        }
        serializer = BlogPostSerializer(post)
        return Response(serializer.data)
    except BlogPost.DoesNotExist:
        return Response({"error": "Post not found"}, status=404)

@api_view(['GET'])
def health_check(request):
    try:
        with connection.cursor() as cursor:
            cursor.execute("SELECT 1")
            return Response({"status": "healthy"})
    except OperationalError:
        return Response(
            {"status": "unhealthy", "message": "Database connection failed"},
            status=status.HTTP_503_SERVICE_UNAVAILABLE
        )
