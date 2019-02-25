import React, {Component} from 'react';
import{Stylesheet, Text, View} from 'react-native';

export default class App extends Component{
    constructor(){
        super();
        this.state={
            weight:0,
            height:0,
            bmi:0
        }
    }

    calculateBMI=()=>{
        this.setState({bmi:number(
            (this.state.weight/Math.pow(this.state.height,2))*1000).toFixed(1)},
            ()=>{
                if(this.state.bmi<18.5){
                    alert.alert('You are underweight!');
                }
                else if(this.state.bmi<24.9){
                    alert.alert()
                }
            }
        )
    }
    render(){
        return(

        )
    }
}

class App extends Component{
    render(){
        return(
            <View>
<Text>BMI Calculator</Text>
<TextInput onChangeText={(weight) =>
this.setState({weight})}
placeholder='Weight in KG'/>
<TextInput onChangeText={(height) =>
this.setState({height})}
placeholder='Height in CM'/>
<Button color="#841584"
onPress={this.calculateBMI}
title='Calculate'/>
<Text>BMI: {this.
        )
    }
}