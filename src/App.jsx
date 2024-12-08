import Download from "./sections/Download"
import Faq from "./sections/Faq"
import Feaures from "./sections/Feaures"
import Footer from "./sections/Footer"
import Header from "./sections/Header"
import Hero from "./sections/Hero"
import Pricing from "./sections/Pricing"
import Testimonials from "./sections/Testimonials"

function App() {

  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <Feaures />
      <Pricing />
      <Faq />
      <Testimonials />
      <Download />
      <Footer />
    </main>
  )
}

export default App
