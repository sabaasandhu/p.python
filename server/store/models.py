from django.db import models
from django.contrib.auth.admin import User


class ProductImage(models.Model):
      product = models.ForeignKey("Products", on_delete=models.CASCADE, related_name="images")
      image = models.ImageField(null=True, blank=True)
      def __str__(self):
        return f"image for {self.product.name}"


class Products(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    name = models.CharField(max_length=255, null=True, blank=True)
    brand = models.CharField(max_length=255, null=True, blank=True)
    category = models.CharField(max_length=255,null=True, blank=True)
    subTitle = models.CharField(max_length=255, null=True, blank=True)
    description = models.TextField(null=True, blank=True)
    price = models.DecimalField(max_digits=10, default=0, decimal_places=2)
    numOfReviews = models.IntegerField(default=0)
    rating = models.IntegerField(default=1)
    stock = models.IntegerField(default=0)
    discount = models.IntegerField(default=0)
    onSale = models.BooleanField(default=False)
    createdAt = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.brand + " " + self.name  # ✅ this will work if 'title' is defined


class Order(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    taxPrice = models.DecimalField(max_digits=10, default=0, decimal_places=2)  
    shippingPrice = models.DecimalField(max_digits=10, default=0, decimal_places=2)  
    totalCost = models.DecimalField(max_digits=10, default=0, decimal_places=2)  
    shippingMethod =  models.CharField(max_length=255, null=True, blank=True)
    orderStatus = models.CharField(max_length=255, null=True, blank=True)
    isDelivered = models.BooleanField(default=False)
    isPaid = models.BooleanField(default=False)
    deliveredAt = models.DateTimeField(auto_now_add=True)
    paidAt = models.DateTimeField(auto_now_add=True)
    createdAt = models.DateTimeField(auto_now_add=True)


class OrderItems(models.Model):
    products = models.ForeignKey(Products, on_delete=models.SET_NULL, null=True)
    title = models.CharField(max_length=255, null=True, blank=True)
    brand = models.CharField(max_length=255, null=True, blank=True)
    category = models.CharField(max_length=255,null=True, blank=True)
    price = models.DecimalField(max_digits=10, default=0, decimal_places=2)
    image = models.ImageField(max_length=255, null=True, blank=True)
    qty = models.IntegerField(default=0)
    createdAt = models.DateTimeField(auto_now_add=True)

    def __str__(self):
          return self.title
   
class Reviews(models.Model):
    products = models.ForeignKey(Products, on_delete=models.SET_NULL, null=True)
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    title = models.CharField(max_length=255, null=True, blank=True)
    rating = models.DecimalField(max_digits=7, decimal_places=2)
    createdAt = models.DateTimeField(auto_now_add=True)
    comment = models.TextField(null=True, blank=True)

    def __str__(self):
          return self.title
   
class ShippingDetails(models.Model):
    order = models.OneToOneField(Order,on_delete=models.CASCADE, null=True, blank=True)
    shippingPrice = models.DecimalField(max_digits=10, default=0, decimal_places=2)
    address = models.CharField(max_length=255, null=True, blank=True)
    phone = models.CharField(max_length=255, null=True, blank=True)
    city = models.CharField(max_length=255, null=True, blank=True)
    state = models.CharField(max_length=255, null=True, blank=True)
    country = models.CharField(max_length=255, null=True, blank=True)
    postalCode = models.CharField(max_length=255, null=True, blank=True)

    def __str__(self):
          return self.phone
    









