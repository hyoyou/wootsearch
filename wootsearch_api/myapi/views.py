import os
import requests
from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from dotenv import load_dotenv

load_dotenv()

MY_ENV_VAR = os.getenv('WOOT_API_KEY')


@api_view(['GET'])
def display_items(request):
    url = "https://developer.woot.com/feed/computers"
    headers = {"Accept": "application/json",
    'X-Api-Key': MY_ENV_VAR}

    req = requests.get(url, headers=headers)
    data = req.json()
    items = data['Items']

    response = []
    # [{title, Url, price, photo}]

    for item in items:
        item_for_sale = {}
        item_for_sale['Title'] = item['Title']
        # item_for_sale['URL'] = item['URL']
        # item_for_sale['SalePrice'] = item['SalePrice']
        # item_for_sale['Photo'] = item['Photo']
        response.append(item_for_sale)

    # return Response({'message': response})
    return Response(response)
