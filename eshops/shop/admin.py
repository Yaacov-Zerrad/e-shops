from django.contrib import admin
from .models import Category, Product

class AdminCategory(admin.ModelAdmin):
    """for look in admin"""
    list_display = ('name', 'date_added')

class AdminProduct(admin.ModelAdmin):
    list_display = ('title', 'price', 'Category', 'date_added')

admin.site.register(Category, AdminCategory)
admin.site.register(Product, AdminProduct)
