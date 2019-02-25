
export default class App extends Component{
    render(){
        return(
            <View>
                <Flatlist
                    data={[
                        {key: 'Fathudzikri'},
                    ]}
                    render item={({item}=><Text style={StyleSheet.item>{item.key}</Text>})}
                />
            </View>
        )
    }
}

<Flatlist
data{[
    {key:'fathudzikri'},
    {key:'ulama'}
]}
render item={({item})=><Text style={StyleSheet.item}}>{item.key}</Text>


<SectionList 
sections={[
    {title:'D', data: ['vabin',]},

    render item={({item})=><Text style={StyleSheet.item}>{item}</Text>}}
    renderSectionHeader={({section})=><Text style={style.sectionHeader}>{section.title}</Text>}
    keyExtractor={(item, index)=>index}
]}