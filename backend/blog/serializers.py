
from rest_framework import serializers
from .models import BlogPost, Suscriptor


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


class SubscriptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Suscriptor
        fields = ('name', 'email', 'date_joined')
        lookup_field = "email"