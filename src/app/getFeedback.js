'use server'
import OpenAI from "openai";


export async function getFeedback(text, questions){
    const openai = new OpenAI( { apiKey: process.env.OPEN_AI_API } );
    const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: "Give feedback on this response" + text + "using this question as a reference" + questions }],
    model: "gpt-3.5-turbo-16k",
  });
    console.log(completion.choices[0]);
    return completion.choices[0]['message']['content'];
}
