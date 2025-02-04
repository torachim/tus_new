from django.shortcuts import render

def startingPage(request):
    return render(request, "startingPage.html")