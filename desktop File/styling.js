import Expo from 'expo';
import React, {COmponent} from 'react';

import {AppRegistry, StyleSheet, View, Text } from 'react-native';
import {design1, design2} from './component/RumahDesign';
export default class Styling extends Component{
    render(){
        return(
            <View style={Styles.}>
            <Text style={[Styles.container,Styles.warning]}>
            </Text>
            <Text style={design1.aturan1}></Text>
            </View>

        );
    }
}

const styles=StyleSheet.create({
    container:{

    }
    message:{

    }
    warning:{

    }
});

AppRegistry.registerComponent('WelcomeApp',()=>Styling);
