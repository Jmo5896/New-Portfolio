import { useState } from "react";
import StarryCanvas from "./components/3dAssets/StarryCanvas";
import Hud from "./components/Hud";
import type { TPosition } from "./customTypes/types";

export default function App() {
  const [cameraPosition, setPosition] = useState<TPosition>([1.15, .01, 3])
  return (
    <>
      <StarryCanvas cameraPosition={cameraPosition} />
      <Hud />
    </>
  )
}
