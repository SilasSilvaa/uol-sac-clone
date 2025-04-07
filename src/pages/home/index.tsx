import { Card } from "./components/Card/Card";
import { Carrousel } from "./components/Carrousel/Carrousel";
import { DownloadApp } from "./components/DownloadApp/DownloadApp";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { InfoComponent } from "./components/InfoComponent/InfoComponent";
import { PreHeader } from "./components/PreHeader/PreHeader";
import { Search } from "./components/Search/Search";

export function Home() {

    return (
        <>
            <PreHeader />
            <Header />
            <Carrousel />
            <InfoComponent />
            <Card />
            <Search />
            <DownloadApp />
            <Footer />
        </>
    )
}
