import React, {Component} from 'react';
import (View, Text, Stylesheet) from 'react-native';

class Nyoba extends Component{
    constructor{
        super()
        this.state={
            name:'chris'
        }
    }
     

componentWillMount(){
    console.log('will be mounted ... ')
}
componentDidMount(){
    console.log('mounted')
}

render(){
    return(
        <View>
            <View>

            </View>
        </View>
    )
}
}

const styles=Stylesheet.create({
    container:
        {
            marginTop:100,
            flex:1
        }
})