from django.contrib import admin
from .models import BlogPost, Tag
from django.utils.text import slugify

@admin.register(Tag)
class TagAdmin(admin.ModelAdmin):
    list_display = ('name',)
    search_fields = ('name',)

@admin.register(BlogPost)
class BlogPostAdmin(admin.ModelAdmin):
    list_display = ('title', 'date', 'reading_time')
    list_filter = ('date', 'tags')
    search_fields = ('title', 'content', 'excerpt')
    filter_horizontal = ('tags',)
    readonly_fields = ('created_at', 'updated_at')
    
    fieldsets = (
        ('Basic Information', {
            'fields': ('title', 'excerpt', 'date', 'reading_time')
        }),
        ('Content', {
            'fields': ('content',)
        }),
        ('Image', {
            'fields': ('cover_image',),
            'description': 'Enter the URL of the cover image (e.g., from Unsplash)'
        }),
        ('Tags', {
            'fields': ('tags',)
        }),
        ('Metadata', {
            'fields': ('created_at', 'updated_at'),
            'classes': ('collapse',)
        })
    )

    def formfield_for_manytomany(self, db_field, request, **kwargs):
        if db_field.name == "tags":
            kwargs["widget"] = admin.widgets.FilteredSelectMultiple(
                "Tags",
                is_stacked=False,
                attrs={'class': 'tag-select'}
            )
        return super().formfield_for_manytomany(db_field, request, **kwargs)

    def save_model(self, request, obj, form, change):
        if not obj.id:
            obj.id = slugify(obj.title)
        super().save_model(request, obj, form, change)

    class Media:
        css = {
            'all': (
                'admin/css/widgets.css',
                'css/ckeditor-custom.css',
            )
        }
        js = ('admin/js/jquery.init.js', 'admin/js/SelectBox.js')
