"use client"

import React from 'react';

import Translator from './translator';

export default function Interface() {


  
  const [source, setSource] = React.useState("{}");
  const [language, setLanguage] = React.useState("français");
  const [output, setOutput] = React.useState("{}");

  console.log("language: ", language);
  // let translate = () => {
  //   console.log("translate: ", source);
  //   setTimeout( () => { console.log("Translated") ; setOutput("Yay "); }, 1000)
  // }

  let showCopy; 
  if(output === "{}"){
    showCopy = (<></>);
  }else {
    showCopy =  (<button onClick={() => {navigator.clipboard.writeText(output)}}
                  className="mt-6 shadow-lg  px-6 py-4  bg-purple-900 rounded-[19px] 
                text-white text-[1.5em] font-normal font-['Mukta']"> 
                  Copy to clipboard
                </button>);
  }

  console.log("Source: ", source); 

  let title = (
<div className="place-self-start justify-start items-center gap-9 inline-flex">
  <div className="flex-col justify-start items-start gap-2 inline-flex">
    <div className="text-white text-3xl font-normal font-['Mukta']">Peac²h translation tool</div>
    <div className="text-white text-base font-normal font-['Cambay']">Upload your JSON survey content and receive a translated version.</div>
  </div>
  <img className="w-36 h-12" src="/catie-white.png" />
</div> 
)


  let body = (
  <div className="w-[1332px] h-[568px] px-5 py-[26px] justify-between items-start inline-flex">
    <div className="w-[25em]">
      <div className="text-white text-[2.5em] font-bold font-['Alegreya']">1. Paste the JSON</div>
      <div className="ml-10  text-white text-base font-normal font-['Cambay']">Source</div>
      <input type="text" name="source" defaultValue={source} onChange={(event) => setSource(event.target.value)}
        className="w-[25em] h-[25em] bg-zinc-300 bg-opacity-20 rounded-[22px] 
        text-white text-base font-normal font-['Source Sans 3']"></input>
    </div>
 
      <div className="h-[30em] flex-col justify-between items-center inline-flex">
        <div className="text-white mb-16 text-[2.5em] font-bold font-['Alegreya']">2. Set the language </div>
        <div className="flex-col justify-between items-center flex">
          <div className="m-8">
            <input type="text" name="lang" 
                   className="lang-input" defaultValue={language}
                   onChange={(event) => setLanguage(event.target.value)} 
                   /> 
          </div>
      
          <button onClick={async () => {setOutput(await Translator(source, language))}} 
            className="shadow-lg px-8 py-6 bg-purple-900 rounded-[19px] 
          text-white text-[2em] font-normal font-['Mukta']"> 
            Translate
          </button>

            { showCopy }

        </div>

        <div className="text-white text-[2.5em] font-bold font-['Alegreya']">3. Press the button</div>
      
      </div>
 

      <div className="w-[25em]">
        <div className="text-white text-[2.5em] font-bold font-['Alegreya']">4. Copy the result</div>
        
        <div className="ml-10 flex text-white text-base font-normal font-['Cambay']"> 
          <div className="">Résultat</div>
          <div className="ml-4 cursor-pointer" onClick={() => {navigator.clipboard.writeText(output)}}>  COPIER </div>
        </div>
        <input type="text" name="source" defaultValue={output} onChange={(event) => setOutput(event.target.value)}
          
          className="w-[25em] h-[25em] bg-zinc-300 bg-opacity-20 rounded-[22px] 
          text-white text-base font-normal font-['Source Sans 3']"></input>
      </div>
    </div>)

  return (
    <> 
      { title }

      { body }
    </>
  )
}
