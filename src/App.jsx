import Landing from "./pages/landing.jsx";
import Service from "./pages/services.jsx";
import Gallery from "./pages/gallery.jsx";
import Contact from "./pages/contact.jsx";
import NavBar from "./component/navbar.jsx";
import { Routes, Route } from "react-router-dom";
import Footer from "./component/footer.jsx";
import ScrollToTop from "./component/scroll-to-top.jsx";
import Faq from "./pages/faq-page.jsx";

function App() {
  return (
    <>
      <NavBar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/service" element={<Service />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<Faq />} />
      </Routes>
      <Footer />
    </>
  );
}
export default App;
