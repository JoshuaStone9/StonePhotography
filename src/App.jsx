import Gallery from "./Components/Gallery";
import About from "./Components/About";

function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a
            className="navbar-brand"
            href="#"
            style={{ fontFamily: "'Permanent Marker', cursive" }}
          >
            Stone Photography
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link button" href="#home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link button" href="#gallery">Gallery</a>
              </li>
              <li className="nav-item">
                <a className="nav-link button" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link button" href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <main className="container-fluid my-5">
        <section id="home" className="text-center mb-5">
          <h2>Welcome to Stone Photography</h2>
        </section>

        <Gallery />

        <About />

        <section id="contact" className="text-center mb-5">
          <h2>Contact</h2>
          <p>Email: info@stonephotography.com</p>
        </section>
      </main>

      <footer className="bg-dark text-center py-3">
        <p className="mb-0">&copy; 2026 Stone Photography. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;