import { useRef, useEffect } from 'react';
import Timer from './TImer';

const Camera = ({isRecording}) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const getMedia = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (err) {
        console.error('Error accessing the camera', err);
      }
    };

    getMedia();

    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        const stream = videoRef.current.srcObject;
        const tracks = stream.getTracks();

        tracks.forEach((track) => {
          track.stop();
        });

        videoRef.current.srcObject = null;
      }
    };
  }, []);

  return (
    <div className="relative py-4 w-full h-4/5">
      <video ref={videoRef} autoPlay className="w-full h-full object-cover rounded-lg" />
      <Timer start={isRecording} />
    </div>
  );
};

export default Camera;