import React, { useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [longUrl, setLongUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post( 'https://url-shortner-backend-i9sf.onrender.com/api/shorten', { longUrl });
    setShortUrl(res.data.shortUrl);
    setLongUrl('');
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-4 sm:p-8">
      <h2 className="text-3xl sm:text-4xl font-bold mb-6">🔗 URL Shortener</h2>

      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full max-w-xl">
        <input
          type="text"
          placeholder="Enter long URL"
          value={longUrl}
          onChange={(e) => setLongUrl(e.target.value)}
          className="border border-gray-700 bg-gray-800 text-white rounded px-3 py-2 flex-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded font-semibold"
        >
          Shorten
        </button>
      </form>

      {shortUrl && (
        <p className="mt-6 text-lg break-all">
          Short URL:{' '}
          <a
            href={shortUrl}
            target="_blank"
            rel="noreferrer"
            className="text-blue-400 hover:underline"
          >
            {shortUrl}
          </a>
        </p>
      )}
    </div>
  );
}
