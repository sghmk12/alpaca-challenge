'use client'

import ABANoteResults from "./components/product/ABANoteResults";
import SessionObservations from "./components/product/SessionObservations";
import SessionParameters from "./components/product/SessionParameters";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-8 p-8 text-center">
      <h1 className="text-3xl font-bold">
        Welcome to the Alpaca Health ABA Notes Generator
      </h1>

      <p className="max-w-lg text-lg">
        {"Let's get started"}
      </p>

      <h1 className="text-xl font-medium">
        Input your session parameters
      </h1>

      <SessionParameters/>


      <h1 className="text-xl font-medium">
        Input your session observations
      </h1>

      <SessionObservations/>

      <ABANoteResults/>
    </div>
  );
}
