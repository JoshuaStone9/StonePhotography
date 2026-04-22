export default function About() {
  return (
    <section id="about" className="container py-5 text-center">
      <h2 className="mb-4">About Me</h2>

      <div className="row justify-content-center">
        <div className="col-10 col-sm-8 col-md-6 col-lg-4">
          <img src="images/me.jpg" alt="Joshua Stone" className="img-fluid rounded shadow about-img"/>
        </div>
      </div>

      <div className="row justify-content-center mt-4">
        <div className="col-10 col-md-8 col-lg-6">
        <h2>About Me</h2>
          <p>Hello, my name is Joshua Stone and I am a beginner photographer 
            using a Canon EOS 600D. I have only recently started this journey.
            I am excited to keep learning, developing my skills and seeing where
             this adventure in photography takes me.
          </p>
        </div>
      </div>
    </section>
  );
}