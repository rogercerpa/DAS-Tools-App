import React, { useEffect, useState } from 'react';


const QueueStatus = () => {

  const [user, setUser] = useState(null);

  useEffect(() => {
    const listener = (data) => setUser(data);

    document.addEventListener('DOMContentLoaded', () => {
      // Remove all previous listeners
      window.api.removeAllListeners('get-user-reply');
      
      window.api.send('get-user');
      window.api.on('get-user-reply', listener);
    });
  }, []);

  return (
    <div className="bg-blue-100 p-4">
      <h1>Queue Status</h1>
      <div>
      {user ? (
        <div>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
    </div>
  );
};

export default QueueStatus;

