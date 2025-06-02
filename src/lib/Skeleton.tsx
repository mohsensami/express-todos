import React from "react";
import "./Skeleton.css";

type SkeletonVariant = "text" | "circle" | "rect";

interface SkeletonProps {
  width?: number | string;
  height?: number | string;
  variant?: SkeletonVariant;
  className?: string;
  style?: React.CSSProperties;
}

export const Skeleton: React.FC<SkeletonProps> = ({
  width,
  height,
  variant = "text",
  className = "",
  style = {},
}) => {
  const getSkeletonClass = () => {
    const classes = ["skeleton", `skeleton-${variant}`];
    if (className) classes.push(className);
    return classes.join(" ");
  };

  return (
    <div
      className={getSkeletonClass()}
      style={{
        width,
        height,
        ...style,
      }}
    />
  );
};
