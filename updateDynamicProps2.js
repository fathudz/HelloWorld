import React,{Component} from 'react';
import {View, Text, Stylesheet} from 'react-native';
import {appRegistry} from 'react-native';

export default class App extends Component{
    Constructor(){
        super();
        this.state={
            book:'react native in action'
        }
    }

    updateBook(){
        this.setState=({book:'express in Action'})
    }

    render(){
        return(
            <DisplayBook updateBook={()=>this.updateBook()}
            book={this.state.book}/>
        )
    }
}

class BookDisplay extends Component{
    render(){
        return(
            <View>
                <Text onPress={this.props.updateBook}>
                    {this.props.book}
                </Text>
            </View>
        )
    }
}

appRegistry.registerComponent(,()=>App);