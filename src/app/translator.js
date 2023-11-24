"use server"

import OpenAI from 'openai';

const openai = new OpenAI(); // API key defaults to process.env["OPENAI_API_KEY"]

export default async function Translator(source, language) {

  console.log("Translate !", source);

  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content: "Tu traduis des JSON et autre formats structurés en changeant just les valeurs sans changer les clés.",
      },
      { role: "user", content: "Here is the JSON to translate into " + language + ":  ``` json \n " + source +" \n ``` " },
    ],
    model: "gpt-3.5-turbo-1106",
    response_format: { type: "json_object" },
  });
  console.log(completion.choices[0].message.content);

  return completion.choices[0].message.content;

  // return " Coucou  "
}