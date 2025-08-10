import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Admin() {
  const [urls, setUrls] = useState([]);

  useEffect(() => {
    axios.get('https://url-shortner-backend-i9sf.onrender.com/api/admin')
      .then(res => setUrls(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 sm:p-8">
      <h2 className="text-2xl sm:text-3xl font-bold mb-4">📊 Admin Dashboard</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-700 text-sm sm:text-base">
          <thead className="bg-gray-800">
            <tr>
              <th className="border border-gray-700 px-4 py-2">Long URL</th>
              <th className="border border-gray-700 px-4 py-2">Short URL</th>
              <th className="border border-gray-700 px-4 py-2">Visits</th>
            </tr>
          </thead>
          <tbody>
            {urls.map(url => (
              <tr key={url._id} className="hover:bg-gray-800">
                <td className="border border-gray-700 px-4 py-2 break-all">{url.longUrl}</td>
                <td className="border border-gray-700 px-4 py-2">
                  <a
                    href={`url.longUrl`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    {url.shortCode}
                  </a>
                </td>
                <td className="border border-gray-700 px-4 py-2 text-center">{url.visitCount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
