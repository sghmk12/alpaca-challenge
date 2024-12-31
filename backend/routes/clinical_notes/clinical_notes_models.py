from pydantic import BaseModel
from typing import List

class ClinicalNoteReq(BaseModel):
    quick_observations: List[str]
    session_parameters: dict 

class ClinicalNoteRes(BaseModel):
    notes: str