from django.test import TestCase
from purchases.models import Purchase, Client, Project
from django.contrib.auth.models import User


class ClientTestCase(TestCase):

    def setUp(self):
        user = User.objects.create(email="wali@gmail.com",
                                   password="password",
                                   username='wali')

        client = Client.objects.create(name="Burger King",
                                       email="king@bk.com",
                                       address="123 Burger Ave, NYC, NY 11105",
                                       phone="(212) 718 - 6666")

        project = Project.objects.create(name="Time square takeover",
                                         budget=2000,
                                         charge=5000,
                                         description="A take over of time square billboards.",
                                         start_date="2020-07-08",
                                         due_date="2020-09-08",
                                         client=client)

        purchase = Purchase.objects.create(name="Tshirts",
                                           amount=1000,
                                           purchase_date="2020-07-09",
                                           notes="Tshirts for ambassadors",
                                           project=project,
                                           owner=user,
                                           client=client)

    def test_fields(self):
        """Model information is saved properly to relational database"""
        client = Client.objects.get(id=1)
        project = Project.objects.get(id=1)
        user = User.objects.get(id=1)
        purchase = Purchase.objects.get(id=1)
        self.assertEqual(client.email, 'king@bk.com')
        self.assertEqual(client.phone, '(212) 718 - 6666')
        self.assertEqual(project.client.name, "Burger King")
        self.assertEqual(purchase.project.name, "Time square takeover")
        self.assertEqual(purchase.name, "Tshirts")
        self.assertEqual(purchase.project.client.name, "Burger King")
