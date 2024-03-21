import React, { useState } from 'react';
import Toast from './stories/Toast';
import './App.css';

function App() {
  const [showToast, setShowToast] = useState(false);

  // Function to open the toast
  const openToast = () => {
    setShowToast(true);
  };

  // Function to handle closing the toast
  const closeToast = () => {
    setShowToast(false);
  };
  return (
    <div className="App">
      <button onClick={openToast}>Show Toast</button>
      {showToast && (
        <Toast
          status="info"
          icon={true}
          title="Toast"
          message="Toast"
          showAction={true}
          onClose={closeToast}
          actionText="Dismiss"
          onAction={closeToast}
        />
      )}
    </div>
  );
}


export default App;
