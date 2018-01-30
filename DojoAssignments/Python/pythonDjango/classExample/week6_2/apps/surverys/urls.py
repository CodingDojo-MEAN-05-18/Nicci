from django.conf.urls import url
from . import views

urlspatterns = [
    url(r'^surveys$', views.index),
    url(r'^surveys/new$', views.new),
]