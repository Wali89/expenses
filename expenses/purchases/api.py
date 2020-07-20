from purchases.models import Purchase, Project, Client
from rest_framework import viewsets, permissions
from .serializers import PurchaseSerializer, ClientSerializer, ProjectSerializer


class PurchaseViewSet(viewsets.ModelViewSet):

    permission_classes = [
        permissions.IsAuthenticated
    ]

    serializer_class = PurchaseSerializer

    def get_queryset(self):
        return self.request.project.purchases.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class ClientViewSet(viewsets.ModelViewSet):

    permission_classes = [
        permissions.IsAuthenticated
    ]

    serializer_class = ClientSerializer

    def get_queryset(self):
        return Client.objects.all()

    def perform_create(self, serializer):
        serializer.save()


class ProjectViewSet(viewsets.ModelViewSet):

    permission_classes = [
        permissions.IsAuthenticated
    ]

    serializer_class = ProjectSerializer

    def get_queryset(self):
        return self.request.client.projects.all()

    def perform_create(self, serializer):
        serializer.save()
