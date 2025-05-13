import { Outlet } from "react-router-dom";
import { PreHeader } from "../components/PreHeader/PreHeader";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";

export function Default() {
    return (
        <>
            <PreHeader />
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}