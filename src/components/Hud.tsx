import Header from "./Header"
import { Outlet } from "react-router-dom"
import SteeringControls from "./SteeringControls"
export default function Hud() {
    return (
        <div className="hud-container">
            <div className="container">
                <Header />
                <Outlet />
                <SteeringControls />
            </div>
        </ div>
    )
}
