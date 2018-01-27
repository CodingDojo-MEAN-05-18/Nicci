from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.land),
    url(r'^users$', views.index),
    url(r'^', views.provide_route)
]
