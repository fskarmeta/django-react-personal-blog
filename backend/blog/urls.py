from django.urls import path, include
from .views import BlogPostListView, BlogPostDetailView, BlogPostFeaturedView, BlogPostCategoryView,SuscriberView

urlpatterns = [
    path('', BlogPostListView.as_view()),
    path('featured', BlogPostFeaturedView.as_view()),
    path('suscribe', SuscriberView.as_view()),
    path('category', BlogPostCategoryView.as_view()),
    path('<slug>', BlogPostDetailView.as_view()),
    
]