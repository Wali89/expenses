from rest_framework import routers
from .api import PurchaseViewSet, ClientViewSet, ProjectViewSet

router = routers.DefaultRouter()
router.register('api/purchases', PurchaseViewSet, 'purchases')
router.register('api/clients', ClientViewSet, 'clients')
router.register('api/projects', ProjectViewSet, 'projects')

urlpatterns = router.urls
