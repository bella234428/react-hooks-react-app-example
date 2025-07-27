// src/components/TestComponent.js
import React from "react";

function TestComponent() {
  return (
    <div>
      <iframe
        title="time video" // ✅ This is what the test is looking for!
        width="560"
        height="315"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default TestComponent;
