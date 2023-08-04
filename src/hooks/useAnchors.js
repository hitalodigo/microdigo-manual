import { useContext } from "react"
import { AnchorContext } from "../contexts/AnchorsContext";

export function useAnchor() {
  const context = useContext(AnchorContext);

  return context;
}
