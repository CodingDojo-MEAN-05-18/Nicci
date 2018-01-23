from __future__ import unicode_literals

from django.shortcuts import render, HttpResponse

# Create your views here.
def index(req):
    # return HttpResponse('hello')
    context = {
        "name:Minh"
        "students":["Elissa", "AJ", "Chris",'William', "Nicci"]
    }
    return render(req, "ninjagold/index.html", context)

def hello(req):
    return HttpResponse('in the the 2nd method, hello')    

