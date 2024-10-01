from django.contrib import admin
from .models import Usuario

@admin.register(Usuario)
class UsuarioAdmin(admin.ModelAdmin):
    list_display = ['username', 'email', 'is_active', 'is_staff']
    search_fields = ['username', 'email']
    list_filter = ['is_active', 'is_staff']
    actions = ['activate_users', 'deactivate_users']

    def activate_users(self, request, queryset):
        queryset.update(is_active=True)

    activate_users.short_description = 'Ativar usuários'

    def deactivate_users(self, request, queryset):
        queryset.update(is_active=False)

    deactivate_users.short_description = 'Desativar usuários'
