from django.db import models

class Projeto(models.Model):
    nome = models.CharField(max_length=100)
    descricao = models.TextField()
    resumo = models.CharField(max_length=20)
    link = models.URLField()
    img = models.ImageField(upload_to='projetos/%Y/%m', null=True, blank=True)
