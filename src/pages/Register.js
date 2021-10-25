
import React from 'react';
import {
    Form,
    Segment,
    Container,
    Button, 
    Grid
  } from "semantic-ui-react";

  class Register extends React.Component{
    render (){
        return (
            <div className="register">
            <div className="overlay-register">
                <Container>
                    <Grid columns='equal'>
                        <Grid.Row></Grid.Row>
                        <Grid.Row>
                            <Grid.Column>
                                <Segment className="title-bg-accent-1">
                                    <h1 className="text-white">Registration</h1>
                                </Segment>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column>
                                <Segment>
                                    <Form.Input
                                    type="text"
                                    label="First Name"
                                    name="firstName"
                                    placeholder="First Name"
                                    />
                                </Segment>
                            </Grid.Column>
                            <Grid.Column>
                                <Segment>
                                    <Form.Input
                                    type="text"
                                    label="Last Name"
                                    name="lastName"
                                    placeholder="Last Name"
                                    />
                                </Segment>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column>
                                <Segment>
                                    <Form.Input
                                    type="text"
                                    label="Username"
                                    name="username"
                                    placeholder="Username"
                                    />
                                </Segment>
                            </Grid.Column> 
                            <Grid.Column>
                                <Segment>
                                    <Form.Input
                                    type="text"
                                    label="Email"
                                     name="email"
                                     placeholder="Email"
                                   />
                                </Segment>
                             </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column>
                                <Segment>
                                    <Form.Input
                                    type="password"
                                    label="Password"
                                    name="password"
                                    placeholder="Password"
                                    />
                                </Segment>
                            </Grid.Column>
                            <Grid.Column>
                                <Segment>
                                    <Form.Input
                                    type="password"
                                    label="Confirm Password"
                                    name="confirmPassword"
                                    placeholder="Confirm Password"
                                    />
                                </Segment>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column>
                                <Button color="blue" type="submit">Register</Button>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
            </div>
        </div>
    )}
}
      
export default Register;