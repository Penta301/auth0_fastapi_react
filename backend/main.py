from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from router import authentication 

app = FastAPI()

origins = ['https://localhost:3000',]

app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(authentication.router)