from django.contrib import admin
from .models import BlogPost, Tag

@admin.register(Tag)
class TagAdmin(admin.ModelAdmin):
    list_display = ('name',)
    search_fields = ('name',)

@admin.register(BlogPost)
class BlogPostAdmin(admin.ModelAdmin):
    list_display = ('title', 'date', 'reading_time')
    search_fields = ('title', 'content')
    filter_horizontal = ('tags',)
    readonly_fields = ('created_at', 'updated_at')
