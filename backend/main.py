from fastapi import FastAPI, HTTPException, Depends
from fastapi.middleware.cors import CORSMiddleware
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from jose import JWTError, jwt
from pydantic import BaseModel
import uvicorn
import time
from db import summary_collection, reports_collection

# JWT Secret
SECRET_KEY = "your_jwt_secret_here"
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30

# User hardcoded for testing
fake_user = {
    "username": "akhil",
    "password": "akhil"
}

# OAuth2 setup
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/login")

app = FastAPI()

# Allow CORS for frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Token(BaseModel):
    access_token: str
    token_type: str

class User(BaseModel):
    username: str

# Authenticate user
def authenticate_user(username: str, password: str):
    if username == fake_user['username'] and password == fake_user['password']:
        return True
    return False

# Create JWT token
def create_access_token(data: dict, expires_delta: int = ACCESS_TOKEN_EXPIRE_MINUTES):
    to_encode = data.copy()
    expire = time.time() + expires_delta * 60
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt

# Dependency
async def get_current_user(token: str = Depends(oauth2_scheme)):
    credentials_exception = HTTPException(status_code=401, detail="Could not validate credentials")
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        username: str = payload.get("sub")
        if username is None:
            raise credentials_exception
        return username
    except JWTError:
        raise credentials_exception

@app.post("/login", response_model=Token)
async def login(form_data: OAuth2PasswordRequestForm = Depends()):
    user_authenticated = authenticate_user(form_data.username, form_data.password)
    if not user_authenticated:
        raise HTTPException(status_code=400, detail="Incorrect username or password")
    access_token = create_access_token(data={"sub": form_data.username})
    return {"access_token": access_token, "token_type": "bearer"}

@app.get("/api/summary_chart")
async def get_summary_chart(user: str = Depends(get_current_user)):
    data = summary_collection.find_one({}, {'_id': 0})
    return data or {"labels": [], "values": []}

@app.get("/api/reports_chart")
async def get_reports_chart(user: str = Depends(get_current_user)):
    data = reports_collection.find_one({}, {'_id': 0})
    return data or {"labels": [], "values": []}

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=3000)
