import { generateClinicalNotes } from "@/app/api/ClinicalNotes";
import { clinicalNotesRequestSelector } from "@/app/state";
import { useMutation } from "@tanstack/react-query";
import { useAtom } from "jotai";
import { useState } from "react";
import Button from "../core/Button";
import Card from "../core/Card";
import Markdown from "react-markdown";

export default function ABANoteResults() {
  const [clinicalNotesRequest] = useAtom(clinicalNotesRequestSelector);
  const [clinicalNotes, setClinicalNotes] = useState<string | null>(null);
  const getABANotes = useMutation({
    mutationFn: async () =>
      generateClinicalNotes(clinicalNotesRequest).then((res) =>
        setClinicalNotes(res.notes)
      ),
  });

  return (
    <div className="space-y-2">
    <Button
        onClick={() => {
          getABANotes.mutate();
        }}
        text="Generate Professional Notes"
      />
      {clinicalNotes ? (
        <Card title="Generated Clinical Notes">
          <Markdown className="text-left">{clinicalNotes}</Markdown>
        </Card>
      ) : null}
      
    </div>
  );
}
