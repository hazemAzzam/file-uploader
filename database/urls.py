from rest_framework.routers import DefaultRouter
from .views import *
from django.urls import path, include

router = DefaultRouter()

router.register("upload", File_View)

urlpatterns = [
    path("", include(router.urls))
]