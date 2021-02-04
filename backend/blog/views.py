from rest_framework.response import Response
from rest_framework import permissions, status
from rest_framework.views import APIView
from rest_framework.generics import ListAPIView, RetrieveAPIView, CreateAPIView
from blog.models import BlogPost, Suscriptor
from blog.serializers import BlogPostSerializer, AllBlogPostsSerializer, BlogPostByCategorySerializer, SubscriptionSerializer

class BlogPostListView(ListAPIView):
    queryset = BlogPost.objects.order_by('-date_published')
    serializer_class = AllBlogPostsSerializer
    lookup_field = 'slug'
    permission_classes = (permissions.AllowAny, )


class BlogPostDetailView(RetrieveAPIView):
    queryset = BlogPost.objects.order_by('-date_created')
    serializer_class = BlogPostSerializer
    lookup_field = 'slug'
    permission_classes = (permissions.AllowAny, )

class BlogPostFeaturedView(ListAPIView):
    queryset = BlogPost.objects.all().filter(featured=True)
    serializer_class = BlogPostSerializer
    lookup_field = 'slug'
    permission_classes = (permissions.AllowAny, )

class BlogPostCategoryView(APIView):
    serializer_class = BlogPostByCategorySerializer
    # serializer_class = BlogPostSerializer
    permission_classes = (permissions.AllowAny, )
    lookup_field = 'slug'

    def post(self, request, format=None):
        data = self.request.data
        print(data)
        category = data['category']
        print(category)
        queryset = BlogPost.objects.order_by('-date_created').filter(category__iexact=category)
        
        serializer = BlogPostSerializer(queryset, many=True)

        return Response(serializer.data)

class SuscriberView(CreateAPIView):
    serializer_class = SubscriptionSerializer
    permission_classes = (permissions.AllowAny, )

    def create(self, request, format=None):
        data = self.request.data
        queryset = Suscriptor.objects.filter(email=data['email']).count()
        if queryset:
            return Response({"msg": "E-mail ya existe"}, status=status.HTTP_409_CONFLICT)
        suscriber = Suscriptor(**data)
        suscriber.save()
        serializer = SubscriptionSerializer(suscriber)
        return Response(serializer.data)
