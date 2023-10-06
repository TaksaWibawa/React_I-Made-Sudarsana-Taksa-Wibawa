import HeroImage from "../assets/hero-img.png";

function HeroSection() {
  return (
    <section className="hero">
      <div id="left-hero">
        <h1>Better Solutions For Your Business</h1>
        <p>We are team of talented designers making websites with Bootstrap</p>
        <div id="hero-btn">
          <a href="#" id="started">
            Get Started
          </a>
          <a href="#">Watch Video</a>
        </div>
      </div>
      <div id="right-hero">
        <img src={HeroImage} alt="Hero Image" />
      </div>
    </section>
  );
}

export default HeroSection;
