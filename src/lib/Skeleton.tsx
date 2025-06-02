import React from "react";
import "./Skeleton.css";

interface SkeletonProps {
  active?: boolean;
  avatar?: boolean;
  paragraph?: boolean;
  title?: boolean;
  round?: boolean;
  width?: number | string;
  height?: number | string;
  className?: string;
  style?: React.CSSProperties;
}

export const Skeleton: React.FC<SkeletonProps> = ({
  active = true,
  avatar = false,
  paragraph = false,
  title = false,
  round = false,
  width,
  height,
  className = "",
  style = {},
}) => {
  const getSkeletonClass = () => {
    const classes = ["skeleton"];
    if (active) classes.push("skeleton-active");
    if (round) classes.push("skeleton-round");
    if (className) classes.push(className);
    return classes.join(" ");
  };

  const renderAvatar = () => (
    <div
      className="skeleton-avatar"
      style={{ width: height || 40, height: height || 40 }}
    />
  );

  const renderTitle = () => (
    <div
      className="skeleton-title"
      style={{ width: width || "38%", height: height || 16 }}
    />
  );

  const renderParagraph = () => (
    <div className="skeleton-paragraph">
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className="skeleton-paragraph-line"
          style={{ width: i === 3 ? "61%" : "100%", height: height || 16 }}
        />
      ))}
    </div>
  );

  return (
    <div className={getSkeletonClass()} style={style}>
      {avatar && renderAvatar()}
      <div className="skeleton-content">
        {title && renderTitle()}
        {paragraph && renderParagraph()}
      </div>
    </div>
  );
};
