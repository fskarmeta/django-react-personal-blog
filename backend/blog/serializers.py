
from rest_framework import serializers
from .models import BlogPost


class BlogPostSerializer(serializers.ModelSerializer):
    class Meta:
        model = BlogPost
        fields = '__all__'
        lookup_field = 'slug'

class AllBlogPostsSerializer(serializers.ModelSerializer):
    class Meta:
        model = BlogPost
        fields = ('title', 'slug', 'category', 'excerpt', 'date_published', 'featured')
        lookup_field = 'slug'

class BlogPostByCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = BlogPost
        fields = ('category', )
        lookup_field = 'slug'