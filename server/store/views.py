from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .Serializer import ProductSerializer
from .models import Products


# show all my routes
@api_view(['GET'])
def getRouting(request):
    routes = [
        
            '/api/products',
            '/api/product/<stc:pid>',
            '/api/product/category',
            '/api/product/searchbyName',
            '/api/product/latestproducts',
     ]
    return Response(request, routes)


# fetch all products from database
@api_view(['GET'])
def fetchAllproducts(request):
    products = Products.objects.all()
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)

# fetch singleproduct
@api_view(['GET'])
def fetchproductDetails(request, id):
    product = Products.objects.get(id=id)
    serializer = ProductSerializer(product, many=False)
    return Response(serializer.data)



