from django.contrib import admin
from django.contrib.admin import AdminSite
from purchases.models import Purchase, Project, Client


class PurchaseAdmin(admin.ModelAdmin):
    pass


class ClientAdmin(admin.ModelAdmin):
    pass


class ProjectAdmin(admin.ModelAdmin):
    pass


admin.site.register(Purchase, PurchaseAdmin)
admin.site.register(Client, ClientAdmin)
admin.site.register(Project, ProjectAdmin)
