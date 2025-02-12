function Footer() {
  return (
    <>
      <footer>
        <div className="links">
          <div className="column">
            <div className="logo"></div>
            <a href="#">Terms · Privacy Policy</a>
          </div>
          <div className="column">
            <b>Products</b>
            <a href="">Web Studio</a>
            <a href="">DynamicBox Flex </a>
            <a href="">Programming Forms</a>
            <a href="">Integrations</a>
            <a href="">Command-Line</a>
          </div>
          <div className="column">
            <b>Resources</b>
            <a href="">Documentation</a>
            <a href="">Tutorials & Guides</a>
            <a href="">Blog</a>
            <a href="">Support Center</a>
            <a href="">Partners</a>
          </div>
          <div className="column">
            <b>Company</b>
            <a href="">Home</a>
            <a href="">About us</a>
            <a href="">Company values</a>
            <a href="">Pricing</a>
            <a href="">Privacy Policy</a>
          </div>
          <div className="column">
            <b>Subscribe</b>
            <p>Get the latest news and articles to <br /> your inbox every month.</p>
            <input type="text" placeholder="Your email" />
          </div>
        </div>
        <div className="copy">
          <p>Made by Cruip. All rights reserved.</p>
          <div className="social">
            <a href="">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="">
              <i className="fa-brands fa-telegram"></i>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
