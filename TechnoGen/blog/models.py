from django.db import models
from django.utils.text import slugify
from django_ckeditor_5.fields import CKEditor5Field

class Tag(models.Model):
    name = models.CharField(max_length=50, unique=True)
    
    def __str__(self):
        return self.name

class BlogPost(models.Model):
    id = models.CharField(max_length=100, primary_key=True)
    title = models.CharField(max_length=200)
    excerpt = models.TextField()
    content = CKEditor5Field('Content', config_name='default')
    cover_image = models.URLField()
    date = models.DateField()
    reading_time = models.CharField(max_length=20)
    tags = models.ManyToManyField(Tag)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def save(self, *args, **kwargs):
        if not self.id:
            self.id = slugify(self.title)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.title
