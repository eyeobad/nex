import React from "react"
import { Route, Routes } from "react-router-dom"
import RootLayout from "./layouts/RootLayout"
import Home from "./pages/Home"
import About from "./pages/About"
import ServicesPage from "./pages/ServicesPage"
import ServiceDetail from "./pages/ServiceDetail"
import ProcessPage from "./pages/ProcessPage"
import QuotePage from "./pages/QuotePage"
import FloridaGrowthContent from "./pages/FloridaGrowthContent"
import BookingPage from "./pages/BookingPage"
import BlogPage from "./pages/BlogPage"
import DigitalMarketingEcommerce from "./pages/DigitalMarketingEcommerce"
import PrivacyPolicy from "./pages/PrivacyPolicy"
import ProjectsPage from "./pages/ProjectsPage"
import TermsOfService from "./pages/TermsOfService"
import NotFound from "./pages/NotFound"
import EnrollPage from "./pages/EnrollPage"

const App = () => {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="services/:slug" element={<ServiceDetail />} />
        <Route path="process" element={<ProcessPage />} />
        <Route path="quote" element={<QuotePage />} />
        <Route path="booking" element={<BookingPage />} />
        <Route path="florida-growth" element={<FloridaGrowthContent />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="blog" element={<BlogPage />} />
        <Route path="blog/digital-marketing-for-ecommerce-businesses" element={<DigitalMarketingEcommerce />} />
        <Route path="privacy" element={<PrivacyPolicy />} />
        <Route path="terms" element={<TermsOfService />} />
        <Route path="enroll" element={<EnrollPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
