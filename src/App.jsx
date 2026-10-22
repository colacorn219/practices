import { Banner } from "./components/Banner/Banner";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Prem } from "./components/Prem/Prem";
import { Subscribe } from "./components/Subscribe/Subscribe";

export function App() {

  return (
    <div className="layout">
      <Header />
      <Banner />
      <Prem />
      <Subscribe />
      <Footer />
    </div>
  )
}

