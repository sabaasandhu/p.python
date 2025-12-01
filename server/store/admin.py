from django.contrib import admin

# Register your models here.
from .models import *

class ProductImagesInline(admin.TabularInline):
    model = ProductImage
    extra = 1

class ProductAdmin(admin.ModelAdmin):
    inlines = [ProductImagesInline]

admin.site.register(Products, ProductAdmin)
admin.site.register(ProductImage)
admin.site.register(Order)
admin.site.register(OrderItems)
admin.site.register(ShippingDetails)
admin.site.register(Reviews)
