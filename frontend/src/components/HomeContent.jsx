import React from 'react'

export default function HomeContent() {
  const truncateText = (text, wordLimit) => {
    return text.split(" ").slice(0, wordLimit).join(" ") + "...";
  };

  const text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque ullam maxime exercitationem placeat quibusdam perspiciatis nemo neque tempora cupiditate quasi, ratione facilis sit. Explicabo provident nihil ullam perspiciatis libero at optio nostrum illo hic, quo cumque asperiores, distinctio eaque pariatur deleniti consectetur dicta tempora voluptatum! Tempora suscipit debitis at cum.";
  
  return (
    <>
      <section className="py-10 text-center">
        <h2 className="text-6xl font-semibold text-gray-800">Welcome to MusicStream</h2>
        <p className="mt-4 text-lg text-wrap mx-12 text-gray-600">
          Your ultimate destination for discovering and streaming your favorite music. Explore millions of tracks across genres and artists, create custom playlists, and stay updated with the latest releases. Whether you're a casual listener or a music enthusiast, MusicStream is here to elevate your listening experience. Join us today and dive into the world of endless music!
        </p>
      </section>
      <section className="py-10 bg-gray-100">
        <h3 className="text-3xl font-semibold text-gray-800 text-center">How It Works</h3>
        <div className="mt-6 flex flex-wrap justify-center gap-6">
          <div className="w-80 text-center">
            <h4 className="text-xl font-semibold text-gray-800">1. Discover</h4>
            <p className="mt-2 text-gray-600">Browse through our vast library of songs and albums to find music that suits your taste.</p>
          </div>
          <div className="w-80 text-center">
            <h4 className="text-xl font-semibold text-gray-800">2. Create</h4>
            <p className="mt-2 text-gray-600">Create and customize playlists with your favorite tracks to match your mood and occasions.</p>
          </div>
          <div className="w-80 text-center">
            <h4 className="text-xl font-semibold text-gray-800">3. Enjoy</h4>
            <p className="mt-2 text-gray-600">Stream your favorite songs anytime, anywhere, and enjoy an uninterrupted listening experience.</p>
          </div>
        </div>
      </section>
      <section className="py-10 text-center">
        <h3 className="text-3xl font-semibold text-gray-800">What Our Users Say</h3>
        <div className="mt-6 flex flex-wrap justify-center gap-6">
          <div className="w-80 bg-white p-4 border rounded-md shadow-lg">
            <p className="text-gray-600">"MusicStream has transformed my music experience! The variety and quality of songs are unmatched."</p>
            <p className="mt-4 text-gray-800 font-semibold">- Ankit Sharma</p>
          </div>
          <div className="w-80 bg-white p-4 border rounded-md shadow-lg">
            <p className="text-gray-600">"As an artist, MusicStream has given me a platform to reach a global audience. Highly recommended!"</p>
            <p className="mt-4 text-gray-800 font-semibold">- Priya Singh</p>
          </div>
        </div>
      </section>
      <section className="py-10 bg-indigo-500 text-center text-white">
        <h3 className="text-3xl font-semibold">Ready to Dive into the World of Music?</h3>
        <p className="mt-4">Create a profile today and start streaming your favorite tracks.</p>
        <button className="mt-6 px-6 py-3 bg-white text-indigo-500 rounded-lg shadow-xl shadow-indigo-900">Get Started</button>
      </section>
    </>
  )
}
