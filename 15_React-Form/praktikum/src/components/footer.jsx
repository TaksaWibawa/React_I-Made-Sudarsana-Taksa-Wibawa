import { useLocation } from "react-router-dom";

function Footer() {
  const location = useLocation();

  return (
    <footer className="sticky-footer">
      {/* render footer top if its landing page */}
      {location.pathname === "/" && (
      <div id="footer-top">
        <div id="sect-one">
          <h3>ARSHA</h3>
          <p id="sect-one-top">
            <span id="one">A108 Adam Street</span>
            <span id="two">New York, NY 535022</span>
            <span id="three">United States</span>
          </p>
          <p id="sect-one-bottom">
            <span>
              <strong>Phone: </strong>+1 5589 55488 55
            </span>
            <span>
              <strong>Email: </strong>info@example.com
            </span>
          </p>
        </div>
        <div id="sect-two">
          <h3>Useful Links</h3>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Terms of service</a>
            </li>
            <li>
              <a href="#">Privacy policy</a>
            </li>
          </ul>
        </div>
        <div id="sect-three">
          <h3>Our Services</h3>
          <ul>
            <li>
              <a href="#">Web Design</a>
            </li>
            <li>
              <a href="#">Web Development</a>
            </li>
            <li>
              <a href="#">Product Management</a>
            </li>
            <li>
              <a href="#">Marketing</a>
            </li>
            <li>
              <a href="#">Graphic Design</a>
            </li>
          </ul>
        </div>
        <div id="sect-four">
          <h3>Our Social Networks</h3>
          <p>
            Cras fermentum odio eu feugiat lide par naso tierra videa magna
            derita valies
          </p>
          <div id="blob-group">
            <a href="#" className="blob"></a>
            <a href="#" className="blob"></a>
            <a href="#" className="blob"></a>
            <a href="#" className="blob"></a>
            <a href="#" className="blob"></a>
          </div>
        </div>
      </div>
      )}

      {/* render footer bot for all pages */}
      <div id="footer-bot">
        <p id="first">
          © Copyright <strong>Arsha.</strong> All Rights Reserved
        </p>
        <p id="second">
          Designed by <span>BootstrapMade</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
