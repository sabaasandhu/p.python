
from django.urls import path
from . import views

urlpatterns = [
   
    path('', views.getRouting, name="routing"),
    path('products/', views.fetchAllproducts, name="products"),
    path('product/<str:id>', views.fetchproductDetails, name="product"),
]
