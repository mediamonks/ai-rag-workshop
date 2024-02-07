# set up a simple server with fastapi that responds to /api/chat POST requests with a simple response

import uvicorn
from fastapi import FastAPI

app = FastAPI()

@app.post("/api/chat")
async def chat():
    # TODO: implement chat engine to respond to user input
    return {"message": "Hello, world!"}

if __name__ == "__main__":
    uvicorn.run(app="server:app", host="0.0.0.0", reload=True, port=8836)
