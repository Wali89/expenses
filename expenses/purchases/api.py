from purchases.models import Purchase 
from rest_framework import viewsets, permissions
from .serializers import PurchaseSerializer

class PurchaseViewSet(viewsets.ModelViewSet):
    queryset = Purchase.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = PurchaseSerializer