import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';

function AutoLayoutExample() {
  return (
    <Container>
      <Row>
        <Col>
            <Navbar className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">Главная</Navbar.Brand>
                </Container>
            </Navbar>
        </Col>
        <Col>2 of 2</Col>
      </Row>
      <Row>
        <Col>1 of 3</Col>
        <Col>2 of 3</Col>
      </Row>
    </Container>
  );
}

export default AutoLayoutExample;