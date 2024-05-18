// components/AudioRecorder.js
import { useState, useEffect, useRef } from 'react';

const AudioRecorder = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [audioChunks, setAudioChunks] = useState([]);
  const [timer, setTimer] = useState(0);
  const mediaRecorderRef = useRef(null); // Use ref to keep track of mediaRecorder instance
  const timerRef = useRef(null); // Use ref to keep track of timer

  useEffect(() => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.ondataavailable = (event) => {
        if (event.data.size > 0) {
          setAudioChunks((prev) => [...prev, event.data]);
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
    startTimer();
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
    }
    setIsRecording(false);
    stopTimer();
  };

  const uploadAudioBlob = async (blob) => {
    const formData = new FormData();
    formData.append('file', blob, 'recording.webm');

    await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    });
  };

  const startTimer = () => {
    setTimer(0);
    timerRef.current = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);
  };

  const stopTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  };

  return (
    <div className="audio-recorder">
      <button
        onClick={isRecording ? stopRecording : startRecording}
        className={`px-4 py-2 rounded ${isRecording ? 'bg-red-500' : 'bg-green-500'} text-white`}
      >
        {isRecording ? 'Stop Recording' : 'Start Recording'}
      </button>
      <p className="mt-2">Timer: {timer}s</p>
    </div>
  );
};

export default AudioRecorder;
