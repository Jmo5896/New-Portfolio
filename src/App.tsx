import { useState } from "react";
import StarryCanvas from "./components/3dAssets/StarryCanvas";
import Hud from "./components/Hud";
import type { TPosition, TAxis } from "./customTypes/types";

export default function App() {
  const [cameraPosition, setPosition] = useState<TPosition>([-.92, 0.14, 3.44])

  const updateAxis = (axis: TAxis, newValue: number) => {
    const axisIndex = axis === 'x' ? 0 : axis === 'y' ? 1 : 2;
    const currentPosition: TPosition = [...cameraPosition];
    currentPosition[axisIndex] = newValue;
    setPosition(currentPosition)
  }

  return (
    <>
      <StarryCanvas cameraPosition={cameraPosition} />
      <Hud
        position={cameraPosition}
        updateAxis={updateAxis}
      />
    </>
  )
}
