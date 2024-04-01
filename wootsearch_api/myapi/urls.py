from django.urls import path
from . import views

urlpatterns = [
    path('display-items/', views.display_items, name='display_items'),
]