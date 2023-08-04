from django.shortcuts import render, redirect
from database.models import File
# Create your views here.

def home(request):
    return render(request, 'home.html')

def upload(request):
    files = request.FILES.getlist('myfile')


    for file in files:
        newFile = File(file=file)
        newFile.save()

    return redirect('home')
