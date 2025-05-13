import type { SteeringControlsProps } from "../customTypes/interfaces"
import PositionSlider from "./PositionSlider"

export default function SteeringControls({ position, updateAxis }: SteeringControlsProps) {
    return (
        <div className="control-pad">
            <PositionSlider
                label="X-Axis"
                value={position[0]}
                updateAxis={updateAxis}
                axis={'x'}
            />
            <PositionSlider
                label="Y-Axis"
                value={position[1]}
                updateAxis={updateAxis}
                axis={'y'}
            />
            <PositionSlider
                label="Z-Axis"
                value={position[2]}
                updateAxis={updateAxis}
                axis={'z'}
            />
        </div>
    )
}
