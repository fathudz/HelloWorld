import Expo from 'expo';
import React, {COmponent} from 'react';
import {StyleSheet, Text, Image, AppRegistry} from 'react-native';

class Greeting extends Component{
    render(){
        return(
            <View style={{alignItems:'center'}}>
            <Text>{this.props.name}</Text>
            </View>
        );

    }
} ;

export default class LotsOfGreeting extends Component{
    render(){
        return(
            <view style={{alignItems:'center'}}>
            <Greeting name='Fathudzikri'/>
            <Greeting name='Aulia'/>
            <Greeting name='Muhammad'/>
            </view>
        );
    }
}

AppRegistry.registerComponent('AwesomeProject',()=>LotsOfGreeting);