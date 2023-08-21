from django.db import models

class Advertisement(models.Model):
    headline = models.CharField(max_length=200)
    content = models.TextField()
    photo = models.ImageField(upload_to='advertisements/')
    date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.headline