import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './App.css';

function NavigationBar() {
  return (
    <>
      <Navbar className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#home">Главная</Navbar.Brand>
          </Container>
      </Navbar>
      <br />
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#сlassic">Классический вывод</Navbar.Brand>
        </Container>
      </Navbar>
      <br />
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#relevance">Релевантный вывод</Navbar.Brand>
        </Container>
      </Navbar>
      <br />
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#clusterrelevance">Кластерно-релевантный</Navbar.Brand>
        </Container>
      </Navbar>
      <br />
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#neuro">Нейросетевой</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default NavigationBar;
