import React from 'react';
import Interface from './interface';
import OpenAI from "openai";

{/* <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Alegreya+Sans:wght@700&family=Cambay&family=Mukta&display=swap" rel="stylesheet"></link>
 */}

export default async function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     
      <Interface /> 
         
    </main>
  )
}
