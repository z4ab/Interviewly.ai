
import { transcribeAudio } from '@/app/transcribeAudio';
import { useRecordVoice } from "@/hooks/useRecordVoice";
import { useState, useEffect, useRef } from 'react';


const AudioRecorder = ({ setTimerOn }) => {
  const { startRecording, stopRecording} = useRecordVoice();
  const [isRecording, setIsRecording] = useState(false);

  const startRecordingLocal = async () => {
    startRecording();
    setIsRecording(true);
    setTimerOn(true);
  };


  const stopRecordingLocal = () => {
    stopRecording();
    setIsRecording(false);
    setTimerOn(false);
  };

  return (
    <div className="audio-recorder">
      <button
        onClick={isRecording ? stopRecordingLocal : startRecordingLocal}
        className={`px-4 py-2 rounded ${isRecording ? 'bg-red-500' : 'bg-green-500'} text-white`}
      >
        {isRecording ? 'Stop Recording' : 'Start Recording'}
      </button>
    </div>
  );
};


export default AudioRecorder;

