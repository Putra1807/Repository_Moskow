import "../assets/css/aos.css"
import "../assets/css/bootstrap.min.css"
import "../assets/css/font-awesome.min.css"
import "../assets/css/tooplate-gymso-style.css"
import About from "../components/About"
import Class from "../components/Class"
import Contact from "../components/Contact"
import Features from "../components/Features"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Hero from "../components/Hero"
import Modal from "../components/Modal"
import Schedule from "../components/Schedule"

export default function Homepage() {
    return (
        <div>
            <Header />
            <Hero />
            <Features />
            <About />
            <Class />
            <Schedule />
            <Contact />
            <Footer />
            <Modal />
        </div>
    )
}
