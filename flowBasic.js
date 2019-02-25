import React, {Component} from 'react';
import{View, Text, Stylesheet} from 'react-native';

class HelloWorld extends Component{
    constructor(){
        super()
        this.state={
            name:'chris'
        }
    }

    render(){
        return(
            <View>
                <View>
                    <Text></Text>
                </View>
            </View>
        )
    }
}

componentWillMount(){
    console.log('about to mount..')
}

componentDidMount(){
    console.log('mounted')
}

const styles= Stylesheet.create({
    container:
        {
        marginTop: 100,
        flex:1
        }
})