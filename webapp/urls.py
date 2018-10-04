from django.views.generic import TemplateView
from django.urls import path

app_name = 'webapp'
urlpatterns = [
    path('', TemplateView.as_view(template_name='webapp/home.html'), name='home'),
    # ...
]
