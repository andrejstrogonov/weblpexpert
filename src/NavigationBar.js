import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './App.css';

function NavigationBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Главная</Nav.Link>
          <Nav.Link href="#health">Здоровье</Nav.Link>
          <Nav.Link href="#electrics">Электрики</Nav.Link>
          <Nav.Link href="#jurisprudence">Юриспруденция</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}

export default NavigationBar;
