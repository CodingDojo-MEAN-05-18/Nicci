from __future__ import unicode_literals
from django.shortcuts import render, redirect
from django.contrib import messages
from .models import *

# Create your views here.
#user_dashboard

def index(request):
    return render(request, 'users/index.html')
