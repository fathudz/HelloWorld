import React, {Component} from 'react';
import {AppRegistry, Stylesheet, Text, Image, View} from 'react-native';



export default class PropsComponents extends Component {
    render(){
        let pic={
            uri: 'https://images.newscientist.com/wp-content/uploads/2016/02/black-hole-jet-star.jpg'
        };
        return (
            <view>
                <text></text>
                <Image source={pic} style={width: 193, height:110}/>
            </view>
        );
    }
}

const Styles = StyleSheet.create({
    bigblue:

});
AppRegistry.registerComponent('AwesomeProject');