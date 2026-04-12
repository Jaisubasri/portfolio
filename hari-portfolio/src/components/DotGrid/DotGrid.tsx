import "./DotGrid.css";

interface DotGridProps {
  rows?: number;
  cols?: number;
  size?: number;
  gap?: number;
}

const DotGrid = ({ rows = 10, cols = 5, size = 12, gap = 1.5 }: DotGridProps) => {
  const totalDots = rows * cols;
  const fadeStartIndex = Math.floor(totalDots * 0.5);

  return (
    <div className="dot-grid" style={{ 
      gridTemplateColumns: `repeat(${cols}, 1fr)`,
      gap: `${gap}rem`,
      width: `${cols * (size + gap * 16)}px`,
      height: `${rows * (size + gap * 16)}px`
    }}>
      {[...Array(totalDots)].map((_, i) => (
        <div
          key={i}
          className="dot"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            opacity: i >= fadeStartIndex ? 0.3 : 1,
          }}
        />
      ))}
    </div>
  );
};

export default DotGrid;
