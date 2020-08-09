from django.urls import path
from rest_framework import routers

from .views import *

routers = routers.SimpleRouter()

urlpatterns = [
    path('localidades/', ListRegion.as_view(), name='localidades'),
    path('localidades/<str:pk>/', DetailComuna.as_view()),
    path('farmaciasturno/', ListFarmaciasTurno.as_view(), name='farmaciasturno'),
    path('farmaciasturno/<int:pk>/', DetailFarmaciasTurno.as_view()),
]