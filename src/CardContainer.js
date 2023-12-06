import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function classic(){
    console.log('You clicked classic.');
}

function relevance(){
    console.log('You clicked relevance.');
}

function clusterRelevance(){
    console.log('You clicked cluster relevance.');
}
function neuroRelevance(){
    console.log('You clicked neuro relevance.');
}
function BasicExample() {
  return (
    <Container>
        <Row>
            <Col>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Классический обратный вывод</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button onClick = {classic} variant="primary">Запустить классический обратный вывод </Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Релевантный обратный вывод</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button  onClick = {relevance} variant="primary">Запустить релевантный обратный вывод</Button>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
        <Row>
            <Col>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Кластерно-релевантный обратный вывод</Card.Title>
                     <Card.Text>
                        Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                    </Card.Text>
                    <Button onClick = {clusterRelevance} variant="primary">Запустить кластерно-релевантный обратный вывод</Button>
                </Card.Body>
            </Card>  
            </Col>
            <Col>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Нейросетевой обратный вывод</Card.Title>
                     <Card.Text>
                        Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                    </Card.Text>
                    <Button onClick = {neuroRelevance} variant="primary">Запустить нейросетевой обратный вывод</Button>
                </Card.Body>
            </Card>    
            </Col>
        </Row>
    </Container>
  );
}

export default BasicExample;