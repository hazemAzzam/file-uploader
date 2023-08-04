from rest_framework.viewsets import ModelViewSet
from .serializer import *

class File_View(ModelViewSet):
    queryset=File.objects.all()
    serializer_class=File_Serializer