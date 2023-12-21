"use client";
import { FC, ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import cn from "../../utility/css/cn";
import { useClickOutSide } from "../../hooks/ClickOutSide";

interface prop {
  children?: ReactNode;
  curserPointer?: boolean;
  className?: string;
  onClose?: () => void;
}

export const Model: FC<prop> = ({
  onClose,
  className,
  curserPointer,
  children,
}) => {
  const [root, setRoot] = useState<HTMLDivElement>();

  const closeOneEscKeyPress = (e: KeyboardEvent) => {
    if (e.key !== "Escape") return;
    onClose?.();
  };

  const ref = useClickOutSide(() => onClose?.());

  useEffect(() => {
    const div = document.createElement("div");

    document.body.appendChild(div);

    setRoot(div);

    document.addEventListener("keydown", closeOneEscKeyPress);

    return () => {
      document.removeEventListener("keydown", closeOneEscKeyPress);

      if (!div) return;
      div.remove();
    };
  }, []);

  const onOutSideClick = () => {
    onClose?.();
  };

  return root
    ? createPortal(
        <div
          className={cn(
            `fixed top-0 left-0 flex items-center justify-center bg-black/20 backdrop-blur-sm w-full h-full z-50 ${className}`
          )}
        >
          <div
            className={`absolute top-0 left-0 z-10 w-full h-full bg-transparent ${
              curserPointer ? "cursor-pointer" : ""
            }`}
            onClick={onOutSideClick}
          ></div>
          <div className="z-20" ref={ref}>
            {children}
          </div>
        </div>,
        root
      )
    : null;
};
