from django.contrib import admin
from .models import Projeto

admin.site.register(Projeto)
class ProjetoAdmin(admin.ModelAdmin):
    list_display = ('nome', 'resumo', 'link')
    search_fields = ('nome', 'resumo')
    list_filter = ('resumo',)


