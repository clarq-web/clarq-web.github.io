from django.shortcuts import render, redirect
from django.contrib import auth, messages
from django.contrib.auth import authenticate, login as auth_login
from .models import Usuario
from django.utils.translation import gettext as _
from django.contrib.auth.decorators import login_required
from core.models import Projeto


def login(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')

        if Usuario.objects.filter(username=username).exists():
            user = authenticate(request, username=username, password=password)
            if user is not None:
                auth_login(request, user)
                messages.success(request, _('Login realizado com sucesso!'))
                return redirect('users/dashboard')
            else:
                messages.error(request, _('Senha incorreta. Tente novamente.'))
        else:
            messages.error(request, _(
                'Usuário não encontrado. Verifique o nome de usuário.'))

    context = {
        'title': _('Login'),
        'warning_message': _('Atenção: Caso tenha chegado aqui por engano, saia imediatamente.'),
        'threat_message': _('Caso tente fazer login, seu endereço IP será registrado. Atividades suspeitas serão investigadas.'),
        'consequence_message': _('Tentativas persistentes resultarão em ações legais imediatas.')
    }
    return render(request, 'users/login.html', context)


@login_required(login_url='http://127.0.0.1:8000/users/login')
def cadastro(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        email = request.POST.get('email')
        password = request.POST.get('password')

        if Usuario.objects.filter(username=username).exists():
            messages.error(request, _('Nome de usuário já existe.'))
        elif Usuario.objects.filter(email=email).exists():
            messages.error(request, _('E-mail já cadastrado.'))
        else:
            user = Usuario.objects.create_user(
                username=username, email=email, password=password)
            user.save()
            messages.success(request, _('Cadastro realizado com sucesso!'))
            return redirect('users/dashboard')
    return render(request, 'users/cadastro.html')


@login_required(login_url='http://127.0.0.1:8000/users/login')
def dashboard(request):
    # Obter todas as postagens do usuário atual
    posts = Projeto.objects.all()
    
    # Calcular métricas
    total_posts = posts.count()
    total_views = sum(post.views for post in posts)
    
    context = {
        'posts': posts,
        'total_posts': total_posts,
        'total_views': total_views,
    }
    
    return render(request, 'users/dashboard.html', context)

def create_post(request):
    if request.method == 'POST':
        title = request.POST.get('title')
        content = request.POST.get('content')
        image = request.FILES.get('image')
        
        post = Projeto.objects.create(
            title=title,
            content=content,
            image=image,
            author=request.user
        )
        
        post.save()
        messages.success(request, _('Postagem criada com sucesso!'))
        return redirect('users/dashboard')
    
    return render(request, 'users/create_post.html')