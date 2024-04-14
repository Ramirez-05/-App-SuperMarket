from pydantic import BaseModel

class AuthBase(BaseModel):
    username: str
    password: str

class Token(BaseModel):
    access_token: str
    token_type: str

    class Config:
        from_attributes = True
