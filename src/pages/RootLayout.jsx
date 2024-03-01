import Header from "../components/Header";
import {Outlet, RouterProvider} from "react-router-dom";

function RootLayout() {
    return (
        <div className="Home">
            <Header/>
            <Outlet />
        </div>
    );
}

export default RootLayout;