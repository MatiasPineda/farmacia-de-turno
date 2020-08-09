from django.urls import path
from rest_framework import routers

from .views import *

routers = routers.SimpleRouter()

urlpatterns = [
    path('', ListRegion.as_view()),
    path('farmaciasturnos/', ListFarmaciasTurno.as_view()),
    path('<str:pk>/', DetailComuna.as_view()),
    path('farmaciasturnos/<int:pk>/', DetailFarmaciasTurno.as_view()),
]