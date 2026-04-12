import React from "react";

interface SunburstProps {
  rayCount?: number;
  innerRadius?: number;
  minRayLength?: number;
  maxRayLength?: number;
  rayWidth?: number;
  color?: string;
  size?: number;
  centerDotRadius?: number;
}

export const Sunburst: React.FC<SunburstProps> = ({
  rayCount = 72,
  innerRadius = 14,
  minRayLength = 30,
  maxRayLength = 30,
  rayWidth = 1,
  color = "#1a1a1a",
  size = 100,
  centerDotRadius = 7,
}) => {
  const cx = size / 2;
  const cy = size / 2;

  const rays = Array.from({ length: rayCount }, (_, i) => {
    const angle = (i / rayCount) * 2 * Math.PI - Math.PI / 2;

    // Vary ray lengths in a subtle pattern for visual interest
    const variation = Math.sin(i * 0.4) * 0.25 + Math.cos(i * 0.7) * 0.15;
    const rayLength =
      minRayLength + (maxRayLength - minRayLength) * (0.5 + variation * 0.5);

    const x1 = cx + innerRadius * Math.cos(angle);
    const y1 = cy + innerRadius * Math.sin(angle);
    const x2 = cx + (innerRadius + rayLength) * Math.cos(angle);
    const y2 = cy + (innerRadius + rayLength) * Math.sin(angle);

    return { x1, y1, x2, y2, angle };
  });

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: "block" }}
    >
      {/* Rays */}
      {rays.map((ray, i) => (
        <line
          key={i}
          x1={ray.x1}
          y1={ray.y1}
          x2={ray.x2}
          y2={ray.y2}
          stroke={color}
          strokeWidth={rayWidth}
          strokeLinecap="round"
        />
      ))}

      {/* White filled center circle */}
      <circle cx={cx} cy={cy} r={centerDotRadius + 3} fill="white" />

      {/* Center dot with ring */}
      <circle
        cx={cx}
        cy={cy}
        r={centerDotRadius}
        fill="white"
        stroke={color}
        strokeWidth={1.2}
      />
      {/* Inner center fill */}
      <circle cx={cx} cy={cy} r={centerDotRadius - 3} fill={color} />
    </svg>
  );
};