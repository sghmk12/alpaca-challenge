export interface GenerateClinicalNotesRequest {
    quick_observations: string[];
    session_parameters: Record<string, unknown>
}

export interface GenerateClinicalNotesResponse {
    notes: string;
}