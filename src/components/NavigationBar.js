import { Navbar, Container, Nav } from "react-bootstrap"

const NavigationBar = () => {
  return (
    <div>
      <Navbar variant="dark">
        <Container>
          <Navbar.Brand href="/">FILM RAMA21</Navbar.Brand>
          <Nav>
            <Nav.Link href="#trending">FILM TRANDING</Nav.Link>
            <Nav.Link href="#superhero">FILM RATING RENDAH</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavigationBar