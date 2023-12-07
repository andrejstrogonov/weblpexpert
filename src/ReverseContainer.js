import Form from 'react-bootstrap/Form';

function ReverseContainer(){
    return(
      <Form>
         <Form.Group className="test-form" controlId="Form.ControlInput1">
          <Form.Label>Здесь получить название обратного вывода</Form.Label>
            <Form.Control type="text" placeholder="Normal text" />
        </Form.Group>
    
        
      </Form>
    );
}

export default ReverseContainer;

