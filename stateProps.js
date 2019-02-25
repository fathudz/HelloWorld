export default class App extends Component{
    render(){
        return(
            <BookDisplay book='React native in action'/>
        )
    }
}

class BookDisplay extends Component{
    render(){
        return(
            <View>
                <Text>{this.props.book}</Text>
            </View>
        )
    }
}