import type { TPosition, TAxis } from "./types"

export interface StarryCanvasProps {
    cameraPosition: TPosition;
}

export interface planet1Props {
    url: string;
}

export interface PositionSliderProps {
    label: string;
    axis: TAxis;
    updateAxis: (axis: TAxis, newValue: number) => void;
    value: number;
}

export interface SteeringControlsProps {
    position: TPosition;
    updateAxis: (axis: TAxis, newValue: number) => void;
}