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
          <Nav.Link href="#сlassic">Классический вывод</Nav.Link>
          <Nav.Link href="#relevance">Релевантный вывод</Nav.Link>
          <Nav.Link href="#clusterrelevance">Кластерно-релевантный</Nav.Link>
          <Nav.Link href="#neuro">Нейросетевой</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}

export default NavigationBar;
