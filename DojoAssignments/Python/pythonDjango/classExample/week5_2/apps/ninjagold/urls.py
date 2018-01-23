from django.conf.urls import url
from . import views
urlpatterns = [
    url(r'^$', views.index), #/ninjagold
    url(r'^hello$', views.hello) #/ninjagold/hello
]
