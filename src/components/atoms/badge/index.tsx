import React from "react";

interface BadgeProps {
  title: string;
  backgroundColor: string;
  color: string;
}

const Badge = ({ title, backgroundColor, color }: BadgeProps) => {
  return (
    <>
      <div style={{ ...style.badge, backgroundColor, color }}>{title}</div>
    </>
  );
};

const style = {
  badge: {
    padding: "4px 8px",
    borderRadius: 4,
    fontSize: 12,
    fontWeight: 600,
  },
};

export default Badge;
