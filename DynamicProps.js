export default class App extends Component{
    constructor(){
        super();
        this.state={
            book:'React Native application'
        }
    }

    render(){
    return(
        <BookDisplay book:{this.state.book}/>
    );
    }
}

class BookDisplay extends Component{
    render(){

    }
}