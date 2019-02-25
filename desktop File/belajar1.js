import React, {Component} from 'react';
import {AppRegistry, Image, Text, View} from 'react-native';

export default class HelloWorldApp extends Component{
    render(){
        let pic={
            uri: 'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwihv8PGiIjfAhXEP48KHegYAVQQjRx6BAgBEAU&url=https%3A%2F%2Fprateekvjoshi.com%2F2014%2F02%2F22%2Furl-vs-uri-vs-urn%2F&psig=AOvVaw28TGmI0-YYX4GT4e3L2iK-&ust=1544077883339432'

        };
        return (
            <Image source={pic} style={{width: 180 height: 70/>
            <View>
                <Text>

                </Text>
            </View>
        )
    }
}

AppRegistry.registerComponent('AwesomeProject', ()=> HelloWorldApp);

AppRegistry.registerComponent('AwesomeProject', ()=> HelloWorldApp);