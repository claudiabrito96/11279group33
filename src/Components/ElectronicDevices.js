
import React from 'react';
import {
    Segment,
    Container,
    Button, 
    Grid,
    Dropdown
  } from "semantic-ui-react";
  import './ElectronicDevices.css';

  const options = [
    { key: 1, text: 'Choice 1', value: 1 },
    { key: 2, text: 'Choice 2', value: 2 },
    { key: 3, text: 'Choice 3', value: 3 },
  ]
  

  class ElectronicDevices extends React.Component{
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
                                    <h1 className="text-white">Input Device Usage</h1>
                                </Segment>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                        <label for="membership">Choose a device: </label>
                        <select name="devices" id="devices">
                        <option value="cell">Cellphone</option>
                        <option value="computer">Desktop Computer</option>
                        <option value="lamp" >Lamp</option>
                        <option value="laptop">Laptop</option>
                        <option value="microwave" >Microwave</option>
                        <option value="fridge" >Refrigerator</option>
                        <option value="lights" >Room Lights</option>
                        <option value="vacuum" >Vacuum</option>
                        </select>

                        </Grid.Row>
                        <Grid.Row>

                        <label for="tentacles">Number of hours of use (1-100): </label>

                        <input type="number" id="tentacles" name="tentacles"
                            min="1" max="100"/>

                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column>
                                <Button color="blue" type="submit">Submit</Button>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
            </div>
        </div>
    )}
}
      
export default ElectronicDevices;