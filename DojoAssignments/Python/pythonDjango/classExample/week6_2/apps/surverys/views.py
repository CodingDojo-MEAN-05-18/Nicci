from django.shortcuts import render, HttpResponse, redirect
from django.contrib import messages
from .models import *

# Create your views here.
def index(request):
    if request.method == "POST":
        result = Survey.objects.validateData(request.POST)
        if result[0] == False:
            Survey.objects.create(survey=request.POST["survey"])
        else:
            for error in result[1]:
                messages.error(req, error)
        return redirect("surverys/new.html")    
    elif request.method =="GET":
        context ={
        "all_surveys":Survey.objects.all(),
    }
    return render(request, "surverys/index.html", context)

def new(request):
    return render(request, "surverys/new.html")