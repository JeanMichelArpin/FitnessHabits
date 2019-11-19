import React, { Component } from 'react'
import { IonRow, IonCol, IonButton } from '@ionic/react';

export class Beverage extends Component {
    constructor(props) {
        super(props);
        
        
        this.increment=this.increment.bind(this);
    }
    
    increment(){
        this.props.onIncrement(this.props.beverage);
    }

    render() {
        return (
            <IonCol>
                <IonRow style={{justifyContent: 'center'}}>
                    <IonButton onClick={this.increment}>{this.props.beverage.quantity}</IonButton>
                </IonRow>
                <IonRow style={{justifyContent: 'center'}}>
                    {this.props.beverage.name}
                </IonRow>
                <IonRow style={{justifyContent: 'center'}}>
                    {this.props.beverage.volume}
                </IonRow>
            </IonCol>
        )
    }
}

export default Beverage
