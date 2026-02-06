'use client';
import { useState } from 'react';

const VideoCard = ({ videoId }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  return (
    <div className="relative w-full aspect-[9/16] bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
          <div className="w-10 h-10 border-4 border-red-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?rel=0`}
        title="YouTube Video"
        className="absolute inset-0 w-full h-full"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
};

// https://www.youtube.com/shorts/qvAdEuznDvI
// https://www.youtube.com/shorts/CrtS4fRWQLc
// https://www.youtube.com/shorts/2ehEy2Ko_xg
// https://www.youtube.com/shorts/OLMRCARKNvs
// https://www.youtube.com/shorts/et_uv5MENeo
// https://www.youtube.com/shorts/9vra7YjrnEk
// https://www.youtube.com/shorts/Gld4eL_aqSk 

export default function VideoSection() {
  const videoIds = [
    'qvAdEuznDvI',
    'CrtS4fRWQLc', 
    '2ehEy2Ko_xg',
    'OLMRCARKNvs', 
    'et_uv5MENeo', 
    '9vra7YjrnEk', 
    'Gld4eL_aqSk', 
    'Z-Xpqk6vbvE',
  ]
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-50 mb-3">
            Our Happy Patients
          </h2>
          <div className="w-24 h-1 bg-red-500 mx-auto mt-4 rounded-full"></div>
        </div>
        
        {/* Grid: 1 column on mobile, 4 columns on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {videoIds.map((id, index) => (
            <VideoCard key={index} videoId={id} />
          ))}
        </div>
      </div>
    </div>
  );
}