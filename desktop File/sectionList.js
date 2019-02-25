<SectionList
sections={[
    {title:'D', data:['Fathudzikri', 'Umar', 'Muhammad']},
    {title:'F', data:[ 'Ulama']},
]}
renderItem={({item})=><Text style={styles.item}>{item}</Text>}
renderSectionHeader={({section})=><Text style={styles.sectionHeader}>{section.title}</Text>}
keyExtractor={(item,index)=>index}
/>