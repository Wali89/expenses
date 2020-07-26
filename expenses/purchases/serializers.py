from rest_framework import serializers
from purchases.models import Purchase, Client, Project


class ClientSerializer(serializers.ModelSerializer):
    projects = serializers.StringRelatedField(many=True)

    class Meta:
        model = Client
        fields = ['id', 'name', 'projects']


class PurchaseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Purchase
        fields = '__all__'


class ProjectSerializer(serializers.ModelSerializer):
    purchases = serializers.StringRelatedField(many=True)

    class Meta:
        model = Project
        fields = ['name', 'client', 'budget', 'charge',
                  'start_date', 'due_date', 'description', 'purchases']
