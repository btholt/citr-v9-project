import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function Modal({ children }) {
  const elemRef = useRef(null);
  if (!elemRef.current) {
    elemRef.current = document.createElement("div");
  }

  useEffect(() => {
    const modalRoot = document.getElementById("modal");
    modalRoot.appendChild(elemRef.current);
    return () => modalRoot.removeChild(elemRef.current);
  }, []);

  return createPortal(<div>{children}</div>, elemRef.current);
}
