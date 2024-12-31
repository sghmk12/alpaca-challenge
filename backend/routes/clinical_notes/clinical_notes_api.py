from dotenv import load_dotenv
load_dotenv() 

import logging
import os

# API
from fastapi import APIRouter, HTTPException
from .clinical_notes_models import ClinicalNoteReq, ClinicalNoteRes

# AI
from openai import OpenAI, APIError, APIConnectionError, RateLimitError


# env
load_dotenv()
OPEN_AI_MODEL = os.getenv("OPENAI_MODEL")
OPEN_AI_API_KEY = os.getenv("OPENAI_API_KEY")


# Initialize OpenAI client
client = OpenAI(api_key=OPEN_AI_API_KEY)

# Initialize router
router = APIRouter(
    prefix="/clinical_notes",
)

# Configure logging
logging.basicConfig(level=logging.INFO)


@router.post("/", response_model=ClinicalNoteRes)
async def generate_clinical_notes(request: ClinicalNoteReq):
    logging.info(f"Received request to generate session notes: {request.dict()}")
    
    # TODO: generate ai prompts
    user_prompt = ""
    system_prompt = ""

    try:
        logging.info(f"Generating chat response from Open AI model: {OPEN_AI_MODEL}")
        response = client.chat.completions.create(
            model=OPEN_AI_MODEL,  
            messages=[
                {"role": "system", "content": system_prompt
                 },
                {"role": "user", "content": user_prompt},
            ],
            temperature=0.7,
            max_tokens=500,
        )
       
        ai_notes = response.choices[0].message.content.strip()
        logging.info(f"Received the following response from OpenAI {ai_notes}")
        return {"notes": ai_notes}

    except APIError as e:
        error_string = f"OpenAI error: {e}"
        logging.error(error_string)
        raise HTTPException(status_code=500, detail=error_string)
    except APIConnectionError as e:
        error_string = f"Couldn't connect to OpenAI: {e}"
        logging.error(error_string)
        raise HTTPException(status_code=503, detail=error_string)
    except RateLimitError as e:
        error_string = f"OpenAI rate limit exceeded: {e}"
        logging.error(error_string)
        raise HTTPException(status_code=429, detail=error_string)
    except Exception as e:
        error_string = f"Error: {e}"
        logging.error(error_string)
        raise HTTPException(status_code=500, detail=error_string)