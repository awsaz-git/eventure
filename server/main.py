from fastapi import FastAPI
from typing import Optional
from . import schemas, models, crud
from .database import SessionLocal, engine
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

models.Base.metadata.create_all(engine)

db = SessionLocal()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get('/')
def home():
    events = crud.get_events(db)

    if not events:
        return {"data": "No events found."}
    return events

@app.get('/events')
def events(search: Optional[str] = None):
    events = crud.get_events(db)

    if not events:
        return {"data": "No events found."}
    return events

@app.get('/e/{event_id}')
def events(event_id: int):
    event = crud.get_event_by_id(db, event_id)

    if not event:
        return {"data": "No events found."}
    return event