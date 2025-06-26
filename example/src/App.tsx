import React, { useState } from "react";
import { Toast } from "@mohsensami/toast";

function App() {
  const [showToast, setShowToast] = useState(false);

  return (
    <div style={{ padding: 40 }}>
      <button onClick={() => setShowToast(true)}>نمایش Toast</button>
      {showToast && (
        <Toast
          message="عملیات با موفقیت انجام شد!"
          duration={4000}
          onClose={() => setShowToast(false)}
        />
      )}
    </div>
  );
}

export default App;
