import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import VideoSection from './components/VideoSection'
import AboutUs from './components/AboutUs'
import StatsSection from './components/StatsSection'
import ServicesHeader from './components/ServicesHeader'
import ServicesGrid from './components/ServicesGrid'
import ProjectsHeader from './components/ProjectsHeader'
import ProjectShowcase from './components/ProjectsShowcase'

function App() {

  return (
    <>
    <Navbar />
    <Hero />
    {/* <VideoSection /> */}
    <AboutUs />
    <StatsSection  />
    <ServicesHeader />
    <ServicesGrid />
    <ProjectsHeader />
    <ProjectShowcase />
    </>
  )
}

export default App
