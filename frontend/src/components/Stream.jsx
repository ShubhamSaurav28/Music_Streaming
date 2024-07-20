import React, { useRef, useEffect, useState } from 'react';
import Peer from 'peerjs';

function Stream() {
  const [peerID, setPeerID] = useState('');
  const videoRef = useRef(null);
  const peerRef = useRef(null);

  useEffect(() => {
    // Create Peer instance
    peerRef.current = new Peer();

    peerRef.current.on('open', (id) => {
      console.log('My peer ID is: ' + id);
      setPeerID(id);
    });

    peerRef.current.on('call', (call) => {
      console.log('Incoming call from: ' + call.peer);
      navigator.mediaDevices.getUserMedia({ video: true, audio: true })
        .then(stream => {
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
          }
          call.answer(stream); // Answer the call with our stream
          call.on('stream', (remoteStream) => {
            // Handle remote stream
            const remoteVideo = document.createElement('video');
            remoteVideo.srcObject = remoteStream;
            remoteVideo.autoplay = true;
            remoteVideo.playsInline = true;
            remoteVideo.className = 'w-1/2 h-1/2 transform rotate-y-180'; // Tailwind styling
            document.body.appendChild(remoteVideo); // Add remote video to the DOM
          });
        })
        .catch(err => console.error('Error accessing media devices.', err));
    });

    return () => {
      peerRef.current.disconnect();
    };
  }, []);

  const callPeer = (id) => {
    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
      .then(stream => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
        const call = peerRef.current.call(id, stream);
        call.on('stream', (remoteStream) => {
          // Handle remote stream
          const remoteVideo = document.createElement('video');
          remoteVideo.srcObject = remoteStream;
          remoteVideo.autoplay = true;
          remoteVideo.playsInline = true;
          remoteVideo.className = 'w-1/2 h-1/2 transform rotate-y-180'; // Tailwind styling
          document.body.appendChild(remoteVideo); // Add remote video to the DOM
        });
      })
      .catch(err => console.error('Error accessing media devices.', err));
  };

  return (
    <div className="p-5 flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl mb-4">Live Stream</h1>
      <video ref={videoRef} className="w-1/2 h-1/2 transform rotate-y-180" autoPlay playsInline muted />
      <button 
        onClick={() => callPeer('some-peer-id')} 
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Call Peer
      </button>
    </div>
  );
}

export default Stream;
