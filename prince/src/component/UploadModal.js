import React, { useState } from 'react';

function UploadModal() {
  // Use useState hook to create a state variable and its setter
  const [image, setImage] = useState(null);

  // Define event handler using arrow function
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(file); // Update the state with the selected image file
};

const handleUpload = () => {
    // Perform upload logic here, e.g., using an API endpoint
    console.log('Uploading image:', image);
    // Reset the state after upload
    setImage(null);
};

return (
    <div>
      <input type="file" onChange={handleImageChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}

export default UploadModal;
