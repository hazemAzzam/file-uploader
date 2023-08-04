from rest_framework.serializers import ModelSerializer
from .models import *

class File_Serializer(ModelSerializer):
    class Meta:
        model=File
        fields="__all__"
