from django.conf import settings
from django.urls import path
from .views import detail, index, templates, temdetail
from django.conf.urls.static import static


urlpatterns = [
    path('', index, name='index'),
    path('<int:pk>', detail , name='detail'),
    
    path('tem', templates, name='templates'),
    path('temdetail', temdetail, name='temdetail'),
    ]


if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL,
    document_root = settings.MEDIA_ROOT)