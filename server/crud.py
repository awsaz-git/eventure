from sqlalchemy.orm import Session
from . import models

def get_event_by_id(db: Session, event_id: int):
    return db.query(models.Event).filter(models.Event.id == event_id).first()

def get_events(db: Session):
    return db.query(models.Event).all()
