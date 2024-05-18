'use server'
import fs from "fs";
import OpenAI from "openai";


export async function transcribeAudio(mavFile){
    const openai = new OpenAI("");
    const transcription = await openai.audio.transcriptions.create({
        file: fs.createReadStream("audio.mp3"),
        model: "whisper-1",
        response_format: "verbose_json",
        timestamp_granularities: ["word"]
      });
}
