import os
from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from dotenv import load_dotenv

load_dotenv()

MY_ENV_VAR = os.getenv('WOOT_API_KEY')

@api_view(['GET'])
def display_items(request):
    # load env file with API key
    # https://stackoverflow.com/questions/40216311/reading-in-environment-variables-from-an-environment-file
    # make the api call
    # manipulate data and return to client
    return Response({'message': 'This is a list of items'})
