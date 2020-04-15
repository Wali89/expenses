from django.db import models
from django.contrib.auth.models import User


class Purchase(models.Model):
    name = models.CharField(max_length=100)
    amount = models.IntegerField()
    purchase_date = models.DateField()
    notes = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    owner = models.ForeignKey(
        User, related_name="purchases", on_delete=models.CASCADE, null=True)
