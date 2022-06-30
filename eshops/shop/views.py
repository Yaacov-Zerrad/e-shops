from django.shortcuts import render
from .models import Product
from django.core.paginator import Paginator





def index(request):
    
    product_list = Product.objects.all()
    # search bar
    item_name = request.GET.get('item-name')
    if item_name != '' and item_name is not None:
        product_list = Product.objects.filter(title__icontains=item_name)
    
    # paginate number product in page
    paginator = Paginator(product_list, 6) 
    page = request.GET.get('page')
    product_list = paginator.get_page(page)
    
    return render(request, 'index.html', {'product_list': product_list})



def templates(request):
    return render(request, 'templates.html')