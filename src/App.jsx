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
import ReviewsHeader from './components/ReviewsHeader'
import ReviewsCarousel from './components/ReviewsCarousel'
import AwardsSection from './components/AwardsSection'
import ClientsSection from './components/ClientsSection'
import SpecialitiesSection from './components/SpecialitiesSection'
import PackagesHeader from './components/PackagesHeader'
import PackagesCards from './components/PackagesCards'
import BlogsHeader from './components/BlogsHeader'
import BlogsCards from './components/BlogsCards'
import FAQSection from './components/FAQSection'
import Footer from './components/Footer'
import Home from './components/Test'

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
    <ReviewsHeader />
    <ReviewsCarousel />
    <AwardsSection />
    <ClientsSection />
    <SpecialitiesSection />
    <PackagesHeader />
    <PackagesCards />
    <BlogsHeader />
    <BlogsCards />
    <FAQSection />
    <Footer />
    </>
  )
}

export default App
