import React, { useState, MouseEvent, ReactNode } from "react";

interface MouseGlowProps {
  children: ReactNode;
  color?: string;
  spread?: number;
  blur?: number;
}

const MouseGlow: React.FC<MouseGlowProps> = ({
  children,
  color = "#00FF00",
  spread = 10,
  blur = 5,
}) => {
  const [isGlowing, setIsGlowing] = useState(false);
  const [position, setPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  const handleMouseMove = (event: MouseEvent) => {
    setIsGlowing(true);
    setPosition({ x: event.clientX, y: event.clientY });
  };

  const handleMouseLeave = () => {
    setIsGlowing(false);
  };

  const styles = {
    glow: {
      boxShadow: `0 0 ${spread}px ${spread}px rgba(${color.slice(1, 7)}, 0.5)`,
      filter: `blur(${blur}px)`,
      borderRadius: "50%",
    },
  };

  return (
    <div
      style={{ position: "relative" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {isGlowing && (
        <div
          style={{
            ...styles.glow,
            position: "absolute",
            top: position.y - spread / 2,
            left: position.x - spread / 2,
          }}
        />
      )}
    </div>
  );
};

export default MouseGlow;
