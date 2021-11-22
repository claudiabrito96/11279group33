
import React from 'react';
import {
    Form,
    Segment,
    Container,
    Button, 
    Grid,
    Dropdown
  } from "semantic-ui-react";
  import './ElectronicDevices.css';

import devices from "../Assets/devices.json";



  const options = [
    { key: 1, text: 'Choice 1', value: 1 },
    { key: 2, text: 'Choice 2', value: 2 },
    { key: 3, text: 'Choice 3', value: 3 },
  ]

  
  

  class ElectronicDevices extends React.Component{

    render () {
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
               
                        </Grid.Row>
                        <Grid.Row>
                        <label for="membership">Choose a device: </label>
                        <select>
                        <option value="">Select device</option>
                        <option value="A/C (4-ton) - 4 kWh" >A/C (4-ton) - 4 kWh</option>
                        <option value="Cellphone - 1 kWh">Cellphone - 1 kWh</option>
                        <option value="Desktop Computer Sleep Mode - 30 kWh">Desktop Computer Sleep Mode - 30 kWh</option>
                        <option value="Desktop Computer Active Mode - 150 kWh" >Desktop Computer Active Mode - 150 kWh</option>
                        <option value="Dryer - 3 kWh" >Dryer - 3 kWh</option>
                        <option value="Laptop - 72 kWh">Laptop - 72 kWh</option>
                        <option value="Microwave - 0.3 kWh" >Microwave - 0.3 kWh</option>
                        <option value="Oven - 2.3 kWh" >Oven - 2.3 kWh</option>
                        <option value="Refrigerator - 0.3 kWh" >Refrigerator - 0.3 kWh</option>
                        <option value="Room Lights (1 room) - 0.1 kWh" >Room Lights (1 room) - 0.1 kWh</option>
                        <option value="Stovetop - 3 kWh" >Stovetop - 3 kWh</option>
                        <option value="Television - 0.3 kWh" >Television - 0.3 kWh</option>
                        <option value="Vacuum - 1.4 kWh" >Vacuum - 1.4 kWh</option>
                        <option value="Washing Machine - 0.3 kWh" >Washing Machine - 0.3 kWh</option>
                        </select>

                        </Grid.Row>
                        <Grid.Row>

                        <label for="hours">Number of hours of use (1-100): </label>

                        <input type="number" id="hours" name="hours"
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
