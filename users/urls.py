from django.urls import path
from . import views


urlpatterns = [
    path('login', views.login, name='login'),
    path('cadastro', views.cadastro, name='cadastro'),
    path('dashboard', views.dashboard, name='dashboard'),
    path('create_post', views.create_post, name='create_post'),
]
