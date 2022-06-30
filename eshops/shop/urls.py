from django.conf import settings
from django.urls import path
from .views import index, templates
from django.conf.urls.static import static


urlpatterns = [
    path('', index, name='index'),
    path('tem', templates, name='templates'),
    ]


if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL,
    document_root = settings.MEDIA_ROOT)