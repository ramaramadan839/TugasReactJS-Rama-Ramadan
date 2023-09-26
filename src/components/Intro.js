import { Col, Container, Row, Button } from "react-bootstrap"

const Intro = () => {
  return (
    <div className="intro">
      <Container className="text-white text-center d-flex justify-content-center align-items-center">
        <Row>
          <Col>
            <div className="title">Film Bajakan Rama21</div>
            <div className="title">Nonton Gratis Tanpa Iklan</div>
            <div className="introButton mt-4 text-center">
              <Button variant="primary">Lihat Semua List</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Intro
