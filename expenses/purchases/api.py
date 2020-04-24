from purchases.models import Purchase
from rest_framework import viewsets, permissions
from .serializers import PurchaseSerializer


class PurchaseViewSet(viewsets.ModelViewSet):

    permission_classes = [
        permissions.IsAuthenticated
    ]

    serializer_class = PurchaseSerializer

    def get_queryset(self):
        return self.request.user.purchases.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
