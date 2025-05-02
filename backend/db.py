import os
from pymongo import MongoClient
from dotenv import load_dotenv

load_dotenv()

MONGO_URL = os.getenv("MONGO_URL")

client = MongoClient(MONGO_URL)
db = client["unccnews"]

summary_collection = db["summary_chart"]
print(summary_collection.find_one())
reports_collection = db["reports_chart"]
print(reports_collection.find_one())