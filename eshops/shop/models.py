from django.db import models

class Category(models.Model):
    name = models.CharField(max_length=200)
    date_added = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return self.name
    
    class Meta:
        """for premiere ligne selon date"""
        ordering = ['-date_added']
        
        
class Product(models.Model):
    title = models.CharField(max_length=200)
    price = models.FloatField()
    description = models.TextField()
    #  etranger key
    Category =models.ForeignKey("Category",  on_delete=models.CASCADE, related_name='category')
    
    #category = models.ForeignKey("Category", one_delete=models.CASCADE, related_name='categorie')
    # for image upload 
    # img = models.ImageField
    img = models.CharField(max_length=5000)
    date_added = models.DateTimeField(auto_now=True)
    
    
    class Meta:
        ordering = ['-date_added']
        
    def __str__(self):
        return self.title
    
    