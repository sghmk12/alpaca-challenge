import { GenerateClinicalNotesRequest, GenerateClinicalNotesResponse } from "./types";

const BASE_URL = process.env.API_BASE_URL ?? "http://localhost:8000"

export function generateClinicalNotes(req: GenerateClinicalNotesRequest): Promise<GenerateClinicalNotesResponse> {
    return fetch(`${BASE_URL}/clinical_notes`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
    }).then((res) => res.json());
}