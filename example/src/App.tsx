import { useState } from "react";
import { Toast } from "@mohsensami/toast";

function App() {
  const [showToast, setShowToast] = useState(false);

  return (
    <div style={{ padding: 40 }}>
      <button onClick={() => setShowToast(true)}>نمایش Toast</button>
      {showToast && (
        <Toast
          message="عملیات با موفقیت انجام شد!"
          duration={2000}
          onClose={() => setShowToast(false)}
          position="top"
          rtl={true}
        />
      )}
    </div>
  );
}

export default App;
