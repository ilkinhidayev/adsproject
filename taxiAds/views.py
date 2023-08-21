from django.shortcuts import render
from .models import Advertisement

def show_ads(request):
    ads = Advertisement.objects.all()  # Tüm reklamları al
    return render(request, 'index.html', {'ads': ads})
