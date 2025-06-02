import React from "react";
import { Skeleton } from "./lib/Skeleton";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="app">
      <h1>Skeleton Loading Examples</h1>

      <div className="skeleton-demo">
        <h2>Text Variant</h2>
        <Skeleton width={200} height={20} variant="text" />
      </div>

      <div className="skeleton-demo">
        <h2>Circle Variant</h2>
        <Skeleton width={40} height={40} variant="circle" />
      </div>

      <div className="skeleton-demo">
        <h2>Rectangle Variant</h2>
        <Skeleton width={300} height={100} variant="rect" />
      </div>

      <div className="skeleton-demo">
        <h2>Multiple Skeletons</h2>
        <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
          <Skeleton width={40} height={40} variant="circle" />
          <div style={{ flex: 1 }}>
            <Skeleton
              width="100%"
              height={20}
              variant="text"
              style={{ marginBottom: "8px" }}
            />
            <Skeleton width="60%" height={16} variant="text" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
