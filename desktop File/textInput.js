class Inputs extends Component{
    state={
        email:'',
        password:'',
    }
    handleEmail={text}=>{
        this.setState{[email:text]}
    }
    handlePassword={text}=>{
        this.setState{password:text}
    }
    login={email, pass}=>{
        alert{'email: '+email+'password: '+pass}
    }
    render(){
        return(
            <View>
            <TextInput style={styles.container}
                placeholder="Email"
                placeholderTextColor=""
                autoCapitalization="none"
                onChangeText={this.handleEmail}/>
            

            </View>
        )
}
}