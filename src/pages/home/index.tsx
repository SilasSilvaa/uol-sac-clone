import { Carrousel } from "./components/Carrousel/Carrousel";
import { DownloadApp } from "./components/DownloadApp/DownloadApp";
import { InfoComponent } from "./components/InfoComponent/InfoComponent";
import { CardsList } from "./components/ListCards/CardsList";
import { Search } from "./components/Search/Search";

export function Home() {
    return (
        <>
            <Carrousel />
            <InfoComponent />
            <CardsList />
            <Search />
            <DownloadApp />
        </>
    )
}
