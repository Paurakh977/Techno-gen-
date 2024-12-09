# Generated by Django 5.1.4 on 2024-12-09 14:18

import django_ckeditor_5.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Tag',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50, unique=True)),
            ],
        ),
        migrations.CreateModel(
            name='BlogPost',
            fields=[
                ('id', models.CharField(max_length=100, primary_key=True, serialize=False)),
                ('title', models.CharField(max_length=200)),
                ('excerpt', models.TextField()),
                ('content', django_ckeditor_5.fields.CKEditor5Field(verbose_name='Content')),
                ('cover_image', models.URLField()),
                ('date', models.DateField()),
                ('reading_time', models.CharField(max_length=20)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('tags', models.ManyToManyField(to='blog.tag')),
            ],
        ),
    ]
