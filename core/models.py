from django.db import models

class Projeto(models.Model):
    title = models.CharField(max_length=100)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    views = models.PositiveIntegerField(default=0)
    author = models.ForeignKey('users.Usuario', on_delete=models.CASCADE)
    image = models.ImageField(upload_to='projetos/%Y/%m', null=True, blank=True)

    def __str__(self):
        return self.title

    class Meta:
        ordering = ['-created_at']

    def increment_views(self):
        self.views += 1
        self.save()