from django.db import models
from datetime import datetime
from random import randint
from django.template.defaultfilters import slugify
from django.db.models import DateField

class Categories(models.TextChoices):
    PROGRAMACION = 'programacion'
    MUSICA = 'musica'
    CRONICAS = 'cronicas'
    ARTICULOS = 'articulos'
    LITERATURA = 'literatura'
    OPINION = 'opinion'
    OTROS = 'otros'

class BlogPost(models.Model):
    title = models.CharField(max_length=50)
    slug = models.SlugField()
    category = models.CharField(max_length=200, choices=Categories.choices, default=Categories.OTROS)
    excerpt = models.CharField(max_length=200)
    date_published = models.DateField(default=datetime.now, blank=True)
    content = models.TextField()
    featured = models.BooleanField(default=False)
    date_created = models.DateTimeField(default=datetime.now, blank=True)

   

    def save(self, *args, **kwargs):
        if BlogPost.objects.filter(title=self.title).exists():
            extra = str(randint(1, 10000))
            self.slug = slugify(self.title) + "-" + extra
        else:
            self.slug = slugify(self.title)

        if self.featured:
            try:
                temp = BlogPost.objects.get(featured=True)
                if self != temp:
                    temp.featured = False
                    temp.save()
            except BlogPost.DoesNotExist:
                pass
        
        super(BlogPost,self).save(*args,**kwargs)

    def __str__(self):
        return self.title