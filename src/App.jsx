import React from "react"
import { Route, Routes } from "react-router-dom"
import RootLayout from "./layouts/RootLayout"
import Home from "./pages/Home"
import About from "./pages/About"
import ServicesPage from "./pages/ServicesPage"
import ServiceDetail from "./pages/ServiceDetail"
import ProcessPage from "./pages/ProcessPage"
import QuotePage from "./pages/QuotePage"
import BlogPage from "./pages/BlogPage"
import PrivacyPolicy from "./pages/PrivacyPolicy"
import TermsOfService from "./pages/TermsOfService"

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
        <Route path="blog" element={<BlogPage />} />
        <Route path="privacy" element={<PrivacyPolicy />} />
        <Route path="terms" element={<TermsOfService />} />
      </Route>
    </Routes>
  )
}

export default App
