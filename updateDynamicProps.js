export default class App extends Component{
    Constructor(){
        super();
        this.state={
            book: 'React Native in Action'
        };
    }

    updateBook(){
        this.setState({book:'Express in Action'})
    }
    
    render(){
        return(
            <BookDisplay updateBook={()=>this.updateBook()}
            book={this.state.book}/>
        );
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