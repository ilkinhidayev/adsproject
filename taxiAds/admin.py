from django.contrib import admin
from .models import Advertisement

@admin.register(Advertisement)
class AdvertisementAdmin(admin.ModelAdmin):
    list_display = ['headline', 'date', 'content', 'photo']  # Hangi alanların görüntüleneceğini belirtin