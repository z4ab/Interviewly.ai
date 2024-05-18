'use server'
import OpenAI from "openai";


export async function getQuestions(formData){
    console.log(formData);
    const openai = new OpenAI( { apiKey:  } );
    const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: "Make 1 interview questions by focusing on the technical aspect of what's required from the following. Make the question so that it can be answered in just audio form.:" + formData }],
    model: "gpt-3.5-turbo-16k",
  });
    console.log(completion.choices[0]);
    return completion.choices[0]['message']['content'];
}
