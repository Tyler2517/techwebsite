from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ProductViewSet, ServiceViewSet, AppointmentViewSet

router = DefaultRouter()
router.register('products', ProductViewSet)
router.register('services', ServiceViewSet)
router.register('appointments', AppointmentViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
