import React from 'react';

export default function Profile() {
  // Placeholder data, replace it with your actual user data
  const userData = {
    username: 'success',
    numberOfUploads: 10,
    profilePicture: 'profile pics.jpeg',
  };

  return (
    <div className="flex items-center justify-center flex-start h-screen">
      <img
        src={userData.profilePicture}
        alt={`Profile picture of ${userData.username}`}
        className="rounded-full w-20 h-20 mb-4"
      />
      <div className="text-center">
        <h2 className="text-2xl font-bold">{userData.username}</h2>
        <p className="text-gray-600">Number of uploads: {userData.numberOfUploads}</p>
      </div>
    </div>
  );
}
