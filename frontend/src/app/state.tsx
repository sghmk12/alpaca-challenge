import { atom } from "jotai";
import { GenerateClinicalNotesRequest } from "./api/ClinicalNotes/types";

export const sessionParametersAtom = atom<GenerateClinicalNotesRequest["session_parameters"]>({
    "Patient Name": "My Patient",
    "Insurance Company": "My Insurance Company",
})

export const sessionObservationsAtom = atom<GenerateClinicalNotesRequest["quick_observations"]>([])

export const clinicalNotesRequestSelector = atom<GenerateClinicalNotesRequest>((get) => {
    return {
        quick_observations: get(sessionObservationsAtom),
        session_parameters: get(sessionParametersAtom),
    }
});