import Navbar from "./components/navbar";
import WelcomeSection from "./pages/welcome-section";
import AboutUsSection from "./pages/about-us-section";
import ContactUsSection from "./pages/contact-us-section";
import Footer from "./components/footer";

import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

function App() {
	return (
		<div className="container-wrapper gap-5">
			<Navbar />
			<WelcomeSection />
			<AboutUsSection />
			<ContactUsSection />
			<Footer />
		</div>
	);
}

export default App;
