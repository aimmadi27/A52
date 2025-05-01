import os
from pymongo import MongoClient
from dotenv import load_dotenv

load_dotenv()

MONGO_URL = os.getenv("MONGO_URL")

client = MongoClient(MONGO_URL)
db = client["uncc_news"]

summary_collection = db["summary_chart"]
reports_collection = db["reports_chart"]