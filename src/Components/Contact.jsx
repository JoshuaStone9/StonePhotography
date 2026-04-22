export default function Contact() {
  return (
    <section id="contact" className="container py-5 text-center" style={{backgroundColor: "rgba(255, 255, 255, 1)", color:"black"}}>
      <h2 className="mb-4 subtitle">Contact Me</h2>
      <p>Feel free to reach out to me through any of the following channels:</p>
      <div className="row justify-content-center mt-4">
        <div className="col-10 col-md-8 col-lg-6">
          <p>Email: stonephotography@gmail.com</p>
        </div>
            <div className="row justify-content-center mt-4">
        <div className="col-auto">
          <div className="d-flex flex-wrap justify-content-center gap-4" style={{backgroundColor: "black", padding:"10px 185px", }}>
            <a href="https://instagram.com/stonephotography" target="_blank" rel="noreferrer" className="text-decoration-none text-light d-flex align-items-center gap-2"><i className="bi bi-instagram fs-3" ></i></a>
            <a href="https://x.com/stonephotography" target="_blank" rel="noreferrer" className="text-decoration-none text-light d-flex align-items-center gap-2"><i className="bi bi-twitter-x fs-3"></i></a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-decoration-none text-light d-flex align-items-center gap-2"><i className="bi bi-facebook fs-3"></i></a>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}
