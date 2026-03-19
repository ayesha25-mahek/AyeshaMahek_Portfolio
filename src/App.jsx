// import { Navbar } from "@/layout/Navbar";
// import { Hero } from "@/sections/Hero";
// import { About } from "@/sections/About";
// import { Projects } from "@/sections/Projects";
// import { Experience } from "@/sections/Experience";
// import { Testimonials } from "@/sections/Testimonials";
// import { Contact } from "@/sections/Contact";
 import { Footer } from "./layout/Footer";
import { Navbar } from "./layout/Navbar";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Projects } from "./sections/Projects";
import { Experience } from "./sections/Experience";

import { Achievements } from "./sections/Achievements";
import { Contact } from "./sections/Contact";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
// function App() {
//   return <h1 style={{color:"white"}}>It Works</h1>;
// }

// export default App;
// function App() {
//   return (
//     <div style={{ padding: "40px", color: "#fff", backgroundColor: "#111" }}>
//       <h1>Hello Portfolio</h1>
//       <p>This is a test.</p>
//       <button style={{ padding: "10px 20px", backgroundColor: "#20b2a6", color: "#fff" }}>
//         Test Button
//       </button>
//     </div>
//   );
// }

export default App;


// export default App;