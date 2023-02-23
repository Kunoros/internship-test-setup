from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import random
import asyncio

app = FastAPI()

origins = ["https://localhost:3000"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class User:
    def __init__(self, name, age, id):
        self.name = name
        self.age = age
        self.id = id

    def __str__(self):
        return f"Name: {self.name}, Age: {self.age}, ID: {self.id}"


user1 = User("Jan", 30, 1)
user2 = User("Piet", 25, 2)
user3 = User("Klaas", 40, 3)

userList = [user1, user2, user3]


def fetch_one_user():
    returnUser = random.choice(userList)
    return returnUser


def fetch_user_by_id(id):
    # foundUser = None
    for user in userList:
        if user.id == id:
            # foundUser = user.name
            return user.name
            # break
    return None


@app.get("/")
def read_roots():
    return {"hello": "world"}


@app.get("/api/name")
async def get_name():
    response = fetch_one_user()
    if response:
        return response
    raise HTTPException(400, "Something went wrong / Bad Request")


@app.get("/api/name/{id}")
async def get_name_by_id(id):
    response = fetch_user_by_id(id)
    if response:
        return response
    raise HTTPException(404, f"There is no user with ID: {id}")


@app.post("/api/name")
async def post_name(name):
    return 1


@app.put("/api/name/{id}")
async def put_name(name, data):
    return 1


@app.delete("/api/name/{id}")
async def delete_name(id):
    return 1
