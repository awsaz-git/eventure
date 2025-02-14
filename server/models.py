from sqlalchemy import Column, Integer, String, Text, Float, ForeignKey
from sqlalchemy.sql.sqltypes import Date, Time
from .database import Base

class Event(Base):
    __tablename__ = 'events'

    id = Column(Integer, primary_key=True, autoincrement=True, unique=True, nullable=False)
    title = Column(String(255), nullable=False)
    date = Column(Date, nullable=False)
    start_time = Column(Time, nullable=False)
    end_time = Column(Time, nullable=False)
    google_maps_location = Column(Text, nullable=False)
    address = Column(String(255), nullable=False)
    description = Column(Text, nullable=False)
    max_participants = Column(Integer, nullable=False)

class Ticket(Base):
    __tablename__ = 'tickets'

    id = Column(Integer, primary_key=True, autoincrement=True, unique=True, nullable=False)
    event_id = Column(Integer, ForeignKey('events.id'), nullable=False)
    type = Column(String(255), nullable=False)
    price = Column(Float, nullable=False)