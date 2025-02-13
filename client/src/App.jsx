import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Events from './pages/Events.jsx'
import Forum from './pages/Forum.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import EventPage from './pages/EventPage.jsx'
import Profile from './pages/Profile.jsx'
import Navbar from './modules/Navbar.jsx'
import Footer from './modules/Footer.jsx'

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/e/:eventId" element={<EventPage />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
