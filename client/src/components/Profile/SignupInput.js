import React from "react";
import { Button, Form, FormGroup, Col, ControlLabel, FormControl } from 'react-bootstrap';

export const SignupInput = React.createClass({
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

      <FormGroup controlId="formHorizontalPassword">
      <Col componentClass={ControlLabel} sm={2}>
        Confirm Password
      </Col>
      <Col sm={10}>
        <FormControl type="password" placeholder="Confirm Password" />
      </Col>
    </FormGroup>

    <FormGroup>
      <Col smOffset={2} sm={10}>
        <Button href="/" type="submit">
          Submit
        </Button>
      </Col>
    </FormGroup>
  </Form>
  )
 }
});

export default SignupInput;