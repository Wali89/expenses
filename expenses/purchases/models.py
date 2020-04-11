from django.db import models


class Purchase(models.Model):
    name = models.CharField(max_length=100)
    amount = models.IntegerField()
    purchase_date = models.DateField()
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
