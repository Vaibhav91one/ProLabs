import './App.css'
import FAQs from './components/sections/FAQs'
import Features from './components/sections/Features'
import Hero from './components/sections/Hero'
import WhyMoonEx from './components/sections/WhyMoonEx'
import Footer from './components/self/Footer'
import Navbar from './components/self/Navbar'

function App() {
  return (
    <>
  <main className="relative overflow-hidden bg-[#071624]">
    <Navbar/>
    <section className="xl:padding-l wide:padding-r padding-p ">
     <Hero/>
    </section>
     <section className="padding">
      <WhyMoonEx/>
     </section>
     <section className="padding">
      <Features/>
     </section>
     <section className="padding-x py-10">
      <FAQs/>
     </section>
     <section className="padding-x padding-t py-8">
      <Footer/>
     </section>
  </main>
    </>
  )
}

export default App
