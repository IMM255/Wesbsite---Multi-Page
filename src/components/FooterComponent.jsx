import { Container, Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom" 

const FooterComponent = () => {
  return (
    <div className="footer py-5">
      <Container>
        <Row className="d-flex justify-content-between">
          <Col lg="5">
            <h3 className="fw-bold">Coding.</h3>
            <p className="desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit nihil cupiditate exercitationem ipsum consequuntur sapiente quam totam ad similique cum?</p>
            <div className="telp mb-1 mt-4">
              <Link className="text-decoration-none">
                <i className="fa-brands fa-whatsapp"></i>
                <p className="m-0">+62 123-4567-8912</p>
              </Link>
            </div>
            <div className="mail">
              <Link className="text-decoration-none">
                <i className="fa-regular fa-envelope"></i>
                <p className="m-0">person-email@gmail.com</p>
              </Link>
            </div>
          </Col>
          <Col className="d-flex flex-column col-lg-2 col mt-lg-0 mt-5">
            <h5 className="fw-bold">Menu</h5>
            <Link to="">Home</Link>
            <Link to="kelas">Kelas</Link>
            <Link to="tertimonial">Testimonial</Link>
            <Link to="faq">Faq</Link>
            <Link to="syaratketen">Syarat & Ketentuan</Link>
          </Col>
          <Col lg="4" className="mt-lg-0 mt-5">
            <h5 className="fw-bold mb-3">Subscribe untuk info lebih lanjut</h5>
            <div className="subscribes">
              <input type="text" placeholder="Subscribe.." />
              <button className="btn btn-danger rounded-end rounded-0">Subscribe</button>
            </div>
            <div className="social mt-3">
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-linkedin"></i>
              <i className="fa-brands fa-youtube"></i>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="text-center px-3 px-md-0">&copy; Copyright {new Date().getFullYear()} by <span className="fw-bolds">Muhammad Imam Arif Darmawan</span> All Right Reserved</p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default FooterComponent
