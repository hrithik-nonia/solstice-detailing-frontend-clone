import Landing from "./pages/landing.jsx";
import Service from "./pages/services.jsx";
import Gallery from "./pages/gallery.jsx";
import Contact from "./pages/contact.jsx";
import NavBar from "./component/navbar.jsx";
import { Routes, Route } from "react-router-dom";
import Footer from "./component/footer.jsx";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/service" element={<Service />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}
export default App;
