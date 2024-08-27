// src/pages/ProfilePage.js
import React, { useState, useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';
import './ProfilePage.css';

const ProfilePage = () => {
  const { user } = useAuth();
  const [profileData, setProfileData] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    bio: '',
    graduationYear: '',
    phone: '',
    address: '',
  });

  useEffect(() => {
    // Simulate fetching profile data from an API
    const fetchProfileData = async () => {
      // Replace with actual API call
      const data = await new Promise(resolve => 
        setTimeout(() => resolve({
          name: 'John Doe',
          email: 'john.doe@example.com',
          bio: 'A passionate alum with a background in Computer Science.',
          graduationYear: 2020,
          phone: '123-456-7890',
          address: '123 Alumni St, College Town, USA',
          achievements: ['Published a paper in AI', 'Founded a tech startup'],
          recentActivities: [
            { activity: 'Updated profile picture', timestamp: '2 hours ago' },
            { activity: 'Commented on your post', timestamp: '1 day ago' }
          ]
        }), 1000)
      );
      setProfileData(data);
      setFormData({
        name: data.name,
        email: data.email,
        bio: data.bio,
        graduationYear: data.graduationYear,
        phone: data.phone,
        address: data.address,
      });
    };

    fetchProfileData();
  }, []);

  const handleEditToggle = () => {
    setEditMode(!editMode);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSave = () => {
    // Save updated profile data
    // Replace with actual API call
    console.log('Saving data:', formData);
    setProfileData(formData);
    setEditMode(false);
  };

  if (!profileData) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="profile-picture">
          <img src="https://via.placeholder.com/150" alt="Profile" />
        </div>
        <div className="profile-info">
          {editMode ? (
            <>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
              />
              <input
                type="text"
                name="graduationYear"
                value={formData.graduationYear}
                onChange={handleChange}
                placeholder="Graduation Year"
              />
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
              />
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Address"
              />
              <textarea
                name="bio"
                value={formData.bio}
                onChange={handleChange}
                placeholder="Bio"
              />
            </>
          ) : (
            <>
              <h1>{profileData.name}</h1>
              <p>Email: {profileData.email}</p>
              <p>Graduation Year: {profileData.graduationYear}</p>
              <p>Phone: {profileData.phone}</p>
              <p>Address: {profileData.address}</p>
              <p>{profileData.bio}</p>
            </>
          )}
        </div>
      </div>
      <div className="profile-achievements">
        <h2>Achievements</h2>
        <ul>
          {profileData.achievements.map((achievement, index) => (
            <li key={index}>{achievement}</li>
          ))}
        </ul>
      </div>
      <div className="profile-actions">
        {editMode ? (
          <>
            <button className="btn save" onClick={handleSave}>Save</button>
            <button className="btn cancel" onClick={handleEditToggle}>Cancel</button>
          </>
        ) : (
          <>
            <button className="btn edit-profile" onClick={handleEditToggle}>Edit Profile</button>
            <button className="btn connect">Connect</button>
          </>
        )}
      </div>
      <div className="profile-feed">
        <h2>Recent Activities</h2>
        {profileData.recentActivities.length === 0 ? (
          <p>No recent activities.</p>
        ) : (
          profileData.recentActivities.map((activity, index) => (
            <div className="feed-item" key={index}>
              <p>{activity.activity}</p>
              <span className="timestamp">{activity.timestamp}</span>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
