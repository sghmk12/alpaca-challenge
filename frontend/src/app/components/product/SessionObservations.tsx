import Card from "../core/Card";
import { sessionObservationsAtom } from "@/app/state";
import { useState } from "react";
import { useAtom } from "jotai";

export default function SessionObservations() {
    const [sessionObservations, setSessionObservations] = useAtom(sessionObservationsAtom);
    const [isCreatingSessionObservation, setIsCreatingSessionObservation] = useState(false);
    const [newSessionObservationValue, setNewSessionObservationValue] = useState("");

    const resetNewSessionObservation = () => {
        setIsCreatingSessionObservation(false);
        setNewSessionObservationValue("");
    }

    const saveNewSessionParameter = () => {
        setSessionObservations([
            ...sessionObservations,
            newSessionObservationValue
        ]);
        resetNewSessionObservation();
    }

    const deleteSessionObservation = (observationIdx: number) => {
        setSessionObservations([...sessionObservations].splice(observationIdx, 1));
    }

  return (
    <Card title="Session Observations">
        <div className="space-y-4">
        {sessionObservations.map((observation, idx) => (
            <div key={idx} className="flex justify-between space-x-4">
                <div className="flex items-center space-x-2">
                <div>{`${observation}`}</div>
                </div>
                
                <button className="text-red-900 bg-red-100 rounded-md p-1" onClick={() => deleteSessionObservation(idx)}>Delete</button>
            </div>
        ))}
       {isCreatingSessionObservation ?<div className="flex justify-between space-x-4">
            <div className="flex items-center space-x-2">
            <input type="text" placeholder="Observation" value={newSessionObservationValue} onChange={(e) => setNewSessionObservationValue(e.target.value)}/>
            </div>
            <div className="flex space-x-4">
            <button className="bg-red-200 text-red-900 rounded-md p-2"
            type="reset" onClick={resetNewSessionObservation}>Cancel</button>
            <button 
            className="bg-green-200 text-green-900 rounded-md p-2"
            type="submit" onClick={saveNewSessionParameter}>Save</button>
            </div>
       </div>
      
        : <button 
        className="bg-green-200 text-green-900 rounded-md p-2"
        onClick={() => {
            setIsCreatingSessionObservation(true);
        }
        }>Add Session Observation</button>}

        </div>
        
    </Card>
  );
}