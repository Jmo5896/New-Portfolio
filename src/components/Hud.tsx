import Header from "./Header"
import { Outlet } from "react-router-dom"
import SteeringControls from "./SteeringControls"
import type { SteeringControlsProps } from "../customTypes/interfaces"
export default function Hud({ position, updateAxis }: SteeringControlsProps) {
    return (
        <div className="hud-container">
            <div className="flex-container">
                <Header />
                <Outlet />
                <SteeringControls
                    position={position}
                    updateAxis={updateAxis}
                />
            </div>
        </ div>
    )
}
