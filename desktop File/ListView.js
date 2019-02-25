import React, {Component} from 'react';
import {Stylesheet, FlatList, View, Text} from 'react-native';

export default class FlatListBasics extends Component{
    render(){
        return(
            <View>
            <FlatList
            data={[
                {key: 'Fathudzikri'},
                {key: 'Aulia'},
            ]}
            renderItem={({item})=> <Text style={Styles.item}>{item.key}</Text>>

        />
            </View></View>
        );
    }
}