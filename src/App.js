import './App.css';
import Header from "./components/Header/Header";
import Advantages from "./components/Advantages/Advantages";
import Services from "./components/Services/Services";
import Projects from "./components/Projects/Projects";
import ContactUs from "./components/ContactUs/ContactUs";
import Brief from "./components/Brief/Brief";
import FAQ from "./components/FAQ/FAQ";
import SocialNetworks from "./components/SocialNetworks/SocialNetworks";
import LeadMagnetOffer from "./components/LeadMagnetOffer/LeadMagnetOffer";

function App() {
    return (
        <div className="App">
            <Header/>
            <Advantages/>
            <Services/>
            <Projects/>
            <ContactUs/>
            <Brief/>
            <FAQ/>
            <LeadMagnetOffer/>
            <SocialNetworks/>
        </div>
    );
}

export default App;
