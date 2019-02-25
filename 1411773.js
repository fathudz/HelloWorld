import React,{component} from 'react';
import {appRegistry, View, Text, StyleSheet} from 'react-native';

export default class App extends Component{
    constructor(){
        super();
        this.state={
            prinAmount: , //principle Amount
            Interest: , //Interest
            InDec: , //Interest times by 0.01
            YOR: , //Year or Repayment
            totalMonth: , //total of Month, YOR*12
            monthlyRepayment: , //final calcultions
        }
    
    }
    
    totalMonth = () => {  //this is to calculate totalMonth
        const { YOR} = this.state;
      
        this.setState({
          sum: Number(YOR)*12
        });
      }
      InDec = () => { //this is to calculate Interest
        const { Interest } = this.state;
      
        this.setState({
          sum: Number(Interest)*0.01
        });
      }
    calculateCarLoan = () => {this.setState({monthlyRepayment: Number(((this.state.prinAmount*(this.state.Interest/12))/(1-(Math.pow((1+(Interest/12)),totalMonth))))).toFixed(2)}
    //the above is to do calculation and clicking
    
    render(){
        return (
            <View style={stylesheet.container0}>
                <Text>Car Loan Calculator</Text>
                <Text style={stylesheet.container2}>Principle Amount    <TextInput style={StyleSheet.container1} onChangeText={(prinAmount) => this.setState({prinAmount})}/></Text>
                <Text style={stylesheet.container2}>Interest(%) <TextInput style={stylesheet.container1} onChangeText={(Interest) =>this.setState({Interest})}/> </Text> 
                <Text style={stylesheet.container2}>Years of Repayment <TextInput style={stylesheet.container1} onChangeText={(YOR)=>{this.setState({YOR})}}/> </Text>
                    <Button color="#841584"onPress={this.calculateCarLoan} title='Calculate'/>
                <Text>Principle Amount <Text style={stylesheet.container1}>: {this.state.prinAmount}</Text>
                <Text>Interest(%) <Text style={stylesheet.container1}>: {this.state.Interest}% ({this.state.InDec})</Text>
                <Text>Year of Repayment <Text style={stylesheet.container1}>: {this.state.YOR} ({this.state.totalMonth}) Months </Text>
                <Text>Monthly Repayment <Text style={stylesheet.container1}>{this.state.prinAmount} /Month</Text></Text>
            </View>
            );
    }
}




const styles=stylesheet.create{
    container0:{
        marginLeft:10;
        justifyContent:'center';
        fontSize: 30,
    }
    container1:{

    }
}

appRegistry.