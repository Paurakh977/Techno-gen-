from django.core.management.base import BaseCommand
from blog.models import BlogPost, Tag
from blog.data import BLOG_POSTS  # This line needs a data.py file

class Command(BaseCommand):
    help = 'Load initial blog data'

    def handle(self, *args, **kwargs):
        self.stdout.write('Loading initial data...')

        for post_data in BLOG_POSTS:
            # Create or get tags
            tags = []
            for tag_name in post_data['tags']:
                tag, _ = Tag.objects.get_or_create(name=tag_name)
                tags.append(tag)

            # Create blog post
            post, created = BlogPost.objects.get_or_create(
                id=post_data['id'],
                defaults={
                    'title': post_data['title'],
                    'excerpt': post_data['excerpt'],
                    'content': post_data['content'],
                    'cover_image': post_data['cover_image'],
                    'date': post_data['date'],
                    'reading_time': post_data['reading_time']
                }
            )

            # Add tags to post
            post.tags.set(tags)

        self.stdout.write(self.style.SUCCESS('Successfully loaded initial data'))