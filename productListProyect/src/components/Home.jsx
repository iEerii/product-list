import { Header } from "./Header";
import { Menu } from "./Menu";
import '../styles/home.css'

export const Home = () => {
    return(
        <main className="mainContainer">
            <Header />
            <Menu />
            {/* <Cart /> */}
        </main>
    )
}
