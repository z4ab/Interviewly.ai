AudioRecorder.js


import { transcribeAudio } from '@/app/transcribeAudio';
import { useState, useEffect, useRef } from 'react';


const AudioRecorder = ({ setTimerOn }) => {
  const [isRecording, setIsRecording] = useState(false);
  const [audioChunks, setAudioChunks] = useState([]);
  const mediaRecorderRef = useRef(null); // Use ref to keep track of mediaRecorder instance
  const timerRef = useRef(null); // Use ref to keep track of timer


  useEffect(() => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.ondataavailable = (event) => {
        if (event.data.size > 0) {
          setAudioChunks((prev) => {
            const newChunks = [...prev, event.data];
            return newChunks;
          });
        }
      };


      mediaRecorderRef.current.onstop = () => {
        const audioBlob = new Blob(audioChunks, { type: 'audio/webm' });
        uploadAudioBlob(audioBlob);
      };
    }
  }, [audioChunks]);


  const startRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const mediaRecorder = new MediaRecorder(stream, { mimeType: 'audio/webm' });
    mediaRecorderRef.current = mediaRecorder;
    setAudioChunks([]);
    setIsRecording(true);
    mediaRecorder.start();
    setTimerOn(true);
  };


  const stopRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
    }
    setIsRecording(false);
    setTimerOn(false);
  };


  const uploadAudioBlob = async (blob) => {
    const formData = new FormData();
    formData.append('file', blob, 'recording.webm');
    if (formData.get('file').size !== 0){
      console.log(formData.get('file').size);
    }
    await transcribeAudio(formData);
  };


  return (
    <div className="audio-recorder">
      <button
        onClick={isRecording ? stopRecording : startRecording}
        className={`px-4 py-2 rounded ${isRecording ? 'bg-red-500' : 'bg-green-500'} text-white`}
      >
        {isRecording ? 'Stop Recording' : 'Start Recording'}
      </button>
    </div>
  );
};


export default AudioRecorder;

