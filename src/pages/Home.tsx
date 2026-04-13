import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Services from "../components/Services/Services";
import Experience from "../components/Experience/Experience";
import Achievements from "../components/Achievements/Achievements";
import CaseStudies from "../components/CaseStudies/CaseStudies";
import Testimonials from "../components/Testimonials/Testimonials";
import Stats from "../components/Stats/Stats";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import Paper from "../components/Papers/Paper";

const Home = () => {
    return (
        <>
            <Navbar />
            <section id="home">
                <Hero />
            </section>
            <section id="services">
                <Services />
            </section>
            <section id="experience">
                <Experience />
            </section>
            <section id="case-study">
                <CaseStudies />
            </section>
            <section id="papers">
                <Paper />
            </section>
            <section id="testimonials">
                <Testimonials />
            </section>
            <section id="stats">
                <Stats />
            </section>
            <section id="achievements">
                <Achievements />
            </section>
            <section id="contact">
                <Contact />
            </section>
            <Footer />
        </>
    );
};

export default Home;