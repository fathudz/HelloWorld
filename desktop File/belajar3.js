import Expo from 'expo';
import React, {Component} from 'react';
import {Stylesheet, AppRegistry, View, Text}from 'react-native';

class matricNumber extends Component{
    render(){
        return(
            <View>
                <Text>Fathudzikri adalah orang yang {this.props.nomor}</Text>
            </View>
        );
    }
}

export default class Catatan extends Componen{
    render(){
        return(
            <View>
                <Text>Mengapa manusia bisa menjadi seperti ini?</Text>
                <MatricNumber nomor='1411773'/>
                <MatricNumber nomor='1511839'/>
                <MatricNumber nomor='1786540'/>
            </View>
        );
    }
}

AppRegistry.registerComponent('AwesomeProject', ()=>Catatan);