import type { TPosition, TAxis } from "./types"

export interface StarryCanvasProps {
    cameraPosition: TPosition
}

export interface planet1Props {
    url: string;
}

export interface PositionSliderProps {
    label: string;
    axis: TAxis;
    updateAxis: (axis: TAxis) => void;
    value: number;
}