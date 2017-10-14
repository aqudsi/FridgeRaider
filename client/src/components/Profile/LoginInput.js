import React from "react";
import { Button, Form, FormGroup, Col, ControlLabel, FormControl } from 'react-bootstrap';

const LoginInput = React.createClass({
 render(){ 
  return(
  <Form horizontal>
    <FormGroup controlId="formHorizontalEmail">
      <Col componentClass={ControlLabel} sm={2}>
        Name
      </Col>
      <Col sm={10}>
        <FormControl type="email" placeholder="Name" />
      </Col>
    </FormGroup>

    <FormGroup controlId="formHorizontalPassword">
      <Col componentClass={ControlLabel} sm={2}>
        Password
      </Col>
      <Col sm={10}>
        <FormControl type="password" placeholder="Password" />
      </Col>
    </FormGroup>

    <FormGroup>
      <Col smOffset={2} sm={10}>
        <Button href="/profile" type="button">
          Sign in
        </Button>
      </Col>
    </FormGroup>
  </Form>
  )
 }
});

export default LoginInput;