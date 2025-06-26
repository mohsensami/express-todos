import React, { useEffect, useState } from "react";
import "./Toast.css";

export type ToastType = "success" | "error" | "info" | "warning";
export type ToastPosition = "top" | "bottom";

export interface ToastProps {
  message: string;
  type?: ToastType;
  duration?: number;
  onClose?: () => void;
  position?: ToastPosition;
}

export const Toast: React.FC<ToastProps> = ({
  message,
  type = "info",
  duration = 3000,
  onClose,
  position = "bottom",
}) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onClose?.();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  if (!visible) return null;

  return (
    <div className={`toast toast-${type} toast-${position}`}>
      <span>{message}</span>
      <button
        className="toast-close"
        onClick={() => {
          setVisible(false);
          onClose?.();
        }}
      >
        ×
      </button>
    </div>
  );
};
