from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['GET'])
def display_items(request):
    # load env file with API key
    # https://stackoverflow.com/questions/40216311/reading-in-environment-variables-from-an-environment-file
    # make the api call
    # manipulate data and return to client
    return Response({'message': 'This is a list of items'})
