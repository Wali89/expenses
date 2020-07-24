from django.db import models
from django.contrib.auth.models import User


class Client(models.Model):
    name = models.CharField(max_length=100, unique=True)
    email = models.EmailField(max_length=100)
    address = models.TextField()
    phone = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name


class Project(models.Model):
    name = models.CharField(max_length=100)
    budget = models.IntegerField()
    charge = models.IntegerField()
    description = models.TextField()
    start_date = models.DateField()
    due_date = models.DateField()
    created_at = models.DateTimeField(auto_now_add=True)
    client = models.ForeignKey(
        Client, related_name='projects', on_delete=models.CASCADE
    )

    def __str__(self):
        return self.name


class Purchase(models.Model):
    name = models.CharField(max_length=100)
    amount = models.IntegerField()
    purchase_date = models.DateField()
    notes = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    owner = models.ForeignKey(
        User, related_name="purchases", on_delete=models.CASCADE, null=True)
    project = models.ForeignKey(
        Project, related_name="purchases", on_delete=models.CASCADE
    )
    client = models.ForeignKey(
        Client, related_name="purchases", on_delete=models.CASCADE
    )

    def __str__(self):
        return self.name
