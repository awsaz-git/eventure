from fastapi import FastAPI

app = FastAPI()


@app.get('/')
def index():
    return { 'date': {'id': 1}}

@app.get('/events')
def events():
    return { 'date': {'events'}}

@app.get('/e/{event_id}')
def events(event_id: int):
    return { 'date': {event_id}}