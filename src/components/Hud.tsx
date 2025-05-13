import Header from "./Header"
import { Outlet } from "react-router-dom"
export default function Hud() {
    return (
        <div className="hud-container">
            <div className="container">
                <Header />
                <Outlet />
            </div>
        </ div>
    )
}
