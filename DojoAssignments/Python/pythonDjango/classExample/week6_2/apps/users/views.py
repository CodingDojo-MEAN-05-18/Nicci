from django.shortcuts import render, HttpResponse, redirect
from django.contrib import messages

# Create your views here.
def index(request):
    context = {
        "name":"Ashton",
        "age":"8"
    }
    return render(request, "users/index.html", context)

def land(request):
    return render(request, "users/land.html")   

def provide_route(request): 
    messages.info(request, "This is unknown route.")   
    return render(request, "users/provide_route.html")    
