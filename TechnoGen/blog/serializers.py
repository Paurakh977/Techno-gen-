from rest_framework import serializers
from .models import BlogPost, Tag

class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = ['name']

class BlogPostSerializer(serializers.ModelSerializer):
    tags = serializers.StringRelatedField(many=True)
    author = serializers.SerializerMethodField()

    class Meta:
        model = BlogPost
        fields = ['id', 'title', 'excerpt', 'content', 
                 'cover_image', 'date', 'reading_time', 'tags', 'author']

    def get_author(self, obj):
        return {
            'name': obj.author_name,
            'avatar': obj.author_avatar
        } 