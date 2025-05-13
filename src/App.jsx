import { useContext, useEffect } from "react"
import  { Routes, Route } from  "react-router-dom"
import Navbar from './components/Navbar'
import pages from './pages/pages'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import WhatsAppButton from './components/WhatsAppButton'
import { EventContext } from "./context/EventContext"


const App = () => {
  const { isVisible } = useContext(EventContext)
   useEffect(() => {
    if (isVisible) {
      // Lock scroll
      document.body.style.overflow = 'hidden';
    } else {
      // Restore scroll
      document.body.style.overflow = '';
    }

    // Clean up on unmount
    return () => {
      document.body.style.overflow = '';
    };
  }, [isVisible]);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<pages.Home />} />
        <Route path="/about" element={<pages.About />} />
        <Route path="/services" element={<pages.Services />} />
        <Route path="/gallery" element={<pages.Gallery />} />
        <Route path="/contact" element={<pages.Contact />} />
        <Route path="/services/*" element={<pages.Category />} />
        <Route path="events/:eventId" element={<pages.EventDetails />} />
      </Routes>
      <BackToTop />
      <WhatsAppButton />
      <Footer />
    </div>
    
  )
}

export default App