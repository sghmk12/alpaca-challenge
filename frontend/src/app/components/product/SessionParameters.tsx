import Card from "../core/Card";
import { sessionParametersAtom } from "@/app/state";
import { useState } from "react";
import { useAtom } from "jotai";

export default function SessionParameters() {
    const [sessionParameters, setSessionParameters] = useAtom(sessionParametersAtom);
    const [isCreatingSessionParameter, setIsCreatingSessionParameter] = useState(false);
    const [newSessionParameterKey, setNewSessionParameterKey] = useState("");
    const [newSessionParameterValue, setNewSessionParameterValue] = useState("");

    const resetNewSessionParameter = () => {
        setIsCreatingSessionParameter(false);
        setNewSessionParameterKey("");
        setNewSessionParameterValue("");
    }

    const saveNewSessionParameter = () => {
        setSessionParameters({
            ...sessionParameters,
            [newSessionParameterKey]: newSessionParameterValue
        });
        resetNewSessionParameter();
    }

    const deleteSessionParameter = (key: string) => {
        const newSessionParameters = {...sessionParameters};
        delete newSessionParameters[key];
        setSessionParameters(newSessionParameters);
    }

  return (
    <Card title="Session Parameters">
        <div className="space-y-4">
        {Object.entries(sessionParameters).map(([key, value]) => (
            <div key={key} className="flex justify-between space-x-4">
                <div className="flex items-center space-x-2">
                <div className="font-bold">{key}:</div>
                <div>{`${value}`}</div>
                </div>
                
                <button className="text-red-900 bg-red-100 rounded-md p-1" onClick={() => deleteSessionParameter(key)}>Delete</button>
            </div>
        ))}
       {isCreatingSessionParameter ?<div className="flex justify-between space-x-4">
            <div className="flex items-center space-x-2">
            <input type="text" placeholder="Name" value={newSessionParameterKey} onChange={(e) => setNewSessionParameterKey(e.target.value)}/>
            <input type="text" placeholder="Value" value={newSessionParameterValue} onChange={(e) => setNewSessionParameterValue(e.target.value)}/>
            </div>
            <div className="flex space-x-4">
            <button className="bg-red-200 text-red-900 rounded-md p-2"
            type="reset" onClick={resetNewSessionParameter}>Cancel</button>
            <button 
            className="bg-green-200 text-green-900 rounded-md p-2"
            type="submit" onClick={saveNewSessionParameter}>Save</button>
            </div>
       </div>
      
        : <button 
        className="bg-green-200 text-green-900 rounded-md p-2"
        onClick={() => {
            setIsCreatingSessionParameter(true);
        }
        }>Add Session Parameter</button>}

        </div>
        
    </Card>
  );
}