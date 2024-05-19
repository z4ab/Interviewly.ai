'use server'
import OpenAI from "openai";


export async function getQuestions(formData){
    console.log(formData);
<<<<<<< HEAD
    const openai = new OpenAI( { apiKey: process.env.OPEN_AI_KEY} );
=======
    const openai = new OpenAI( { apiKey: ""  } );
>>>>>>> 14764db0c546ac9f032dbca98f8ed6626fe071b9
    const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: "Make 1 interview questions by focusing on the technical aspect of what's required from the following. Make the question so that it can be answered in just audio form.:" + formData }],
    model: "gpt-3.5-turbo-16k",
  });
    console.log(completion.choices[0]);
    return completion.choices[0]['message']['content'];
}
