from django.urls import path
from .views import home, upload

urlpatterns = [
    path('', home, name='home'),
    path('upload', upload, name='upload')
]