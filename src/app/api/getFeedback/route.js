import OpenAI from "openai";

export async function POST(req) {
  const { formData } = req.body;
  const openai = new OpenAI({ apiKey: "" });

  try {
    const completion = await openai.chat.completions.create({
      messages: [{ role: "system", content: "Give feedback on this response: " + formData }],
      model: "gpt-3.5-turbo-16k",
    });
    res.status(200).json({ feedback: completion.choices[0].message.content });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to get feedback" });
  }
}