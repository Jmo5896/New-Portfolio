import PositionSlider from "./PositionSlider"

export default function SteeringControls() {
    return (
        <div className="control-pad">
            <PositionSlider
                label="X-Axis"
                value={0}
                updateAxis={() => console.log('PLACEHOLDER UPDATE_AXIS')}
                axis={'x'}
            />
        </div>
    )
}
