from rest_framework import routers
from .api import PurchaseViewSet

router = routers.DefaultRouter()
router.register('api/purchases', PurchaseViewSet, 'purchases')

urlpatterns = router.urls