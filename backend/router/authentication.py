import sys
import time 
sys.path.append('..')
from fastapi import FastAPI, Depends, Security, APIRouter
from fastapi_auth0 import Auth0, Auth0User

auth = Auth0(domain='dev-l0wm-4ug.us.auth0.com', api_audience='RestaurantAPI')

router = APIRouter(
    prefix="/api/test",
    tags=['Authentication']
)


@router.get('/')
async def get_public():
    return {'message':'Anonymous user'}

@router.get('/private', dependencies=[Depends(auth.implicit_scheme)])
async def get_private(user: Auth0User = Security(auth.get_user)):
    return {'message':f'{user}'}