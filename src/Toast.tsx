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
  rtl?: boolean;
}

export const Toast: React.FC<ToastProps> = ({
  message,
  type = "info",
  duration = 3000,
  onClose,
  position = "bottom",
  rtl = false,
}) => {
  const [visible, setVisible] = useState(true);
  const [hiding, setHiding] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHiding(true);
    }, duration);
    return () => clearTimeout(timer);
  }, [duration]);

  // Remove from DOM after animation
  useEffect(() => {
    if (hiding) {
      const timeout = setTimeout(() => {
        setVisible(false);
        onClose?.();
      }, 300); // match CSS transition duration
      return () => clearTimeout(timeout);
    }
  }, [hiding, onClose]);

  if (!visible) return null;

  return (
    <div
      dir={`${rtl ? "rtl" : "ltr"}`}
      className={`toast toast-${type} toast-${position} ${
        hiding ? "hide" : "show"
      }`}
    >
      <span>{message}</span>
      <button className="toast-close" onClick={() => setHiding(true)}>
        ×
      </button>
    </div>
  );
};
