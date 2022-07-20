from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import numpy as np
import pickle
import json

origins = [
    "http://localhost:3000",
]

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Features(BaseModel):
    location: str
    sqft: float
    bath: int
    balcony: int
    bhk: int

__model = None
__data_columns = None
__locations = None

def load_model():
    global __model
    if __data_columns is None:
        load_columns()
    if __model is None:
        with open('./artifacts/bangalore_housing_price_model.pickle', 'rb') as f:
            __model = pickle.load(f)
            print('Loaded model successfully...')
    return True

def load_columns():
    global __data_columns
    global __locations
    if __data_columns is None:
        f = open('./artifacts/columns.json')
        data = json.load(f)
        __data_columns = data['data_columns']
        __locations = __data_columns[4:]
        print('Loaded columns successfully...')
    return True

def get_locations():
    global __locations
    if __locations is None:
        load_columns()
    return __locations

def get_estimated_price(location, sqft, bath, balcony, bhk):
    try:
        location_index = __data_columns.index(location.lower())
    except:
        location_index = -1
    x = np.zeros(len(__data_columns))
    print(x.shape)
    x[0] = sqft
    x[1] = bath
    x[2] = balcony
    x[3] = bhk
    if location_index >= 0:
        x[location_index] = 1
    return round(__model.predict([x])[0], 2)

@app.get('/locations')
def get():
    locations = get_locations()
    return { 'details': locations }

@app.post('/predict')
def post(request: Features):
    load_model()
    features = {
        'location': request.location,
        'sqft': request.sqft,
        'bath': request.bath,
        'balcony': request.balcony,
        'bhk': request.bhk
    }
    prediction = get_estimated_price(**features)
    return { 'details': { 'price': prediction } }