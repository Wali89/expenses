from django.test import TestCase
from purchases.models import Purchase, Client, Project


class ClientTestCase(TestCase):

    def setUp(self):
        client = Client.objects.create(name="Burger King",
                                       email="king@bk.com",
                                       address="123 Burger Ave, NYC, NY 11105",
                                       phone="(212) 718 - 6666")

        project = Project.objects.create(name="Time square takeover",
                                         budget=200, charge=5000,
                                         description="A take over of time square billboards.",
                                         start_date="2020-07-08",
                                         due_date="2020-09-08",
                                         client=client)

    def test_fields(self):
        """Client information is saved properly to database"""
        client = Client.objects.get(id=1)
        project = Project.objects.get(id=1)
        self.assertEqual(client.email, 'king@bk.com')
        self.assertEqual(client.phone, '(212) 718 - 6666')
        self.assertEqual(project.client.name, "Burger King")
