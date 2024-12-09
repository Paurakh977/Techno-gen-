from rest_framework import serializers
from .models import BlogPost, Tag
from django.conf import settings
from urllib.parse import urljoin

class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = ['name']

class BlogPostSerializer(serializers.ModelSerializer):
    tags = serializers.StringRelatedField(many=True)
    content = serializers.SerializerMethodField()

    class Meta:
        model = BlogPost
        fields = ['id', 'title', 'excerpt', 'content', 
                 'cover_image', 'date', 'reading_time', 'tags']

    def get_content(self, obj):
        content = obj.content
        if content and settings.MEDIA_URL in content:
            base_url = getattr(settings, 'SITE_URL', 'http://localhost:8000')
            content = content.replace(
                settings.MEDIA_URL,
                urljoin(base_url, settings.MEDIA_URL.lstrip('/'))
            )
        return content