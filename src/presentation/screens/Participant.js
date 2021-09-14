import React, { useEffect } from 'react';
import {View, StyleSheet,Text,Image,Dimensions} from 'react-native';

/*TODO TASK 05*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  infoPanel:{
    padding:20
  },
  infoPanelRow:{
    flexDirection:'row', 
    justifyContent:'space-between',
    paddingBottom:20
  },
  image:{
    borderBottomWidth:1,
    borderBottomColor:'black',
  }
});

export const Participant = props => {
  //let participant = props.route.
  let participantInfo = props.route.params?.item ?? null;
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const InfoPanel = ({title,record, align='left'})=>{
    return(
      <View>
      <Text style={{textAlign:align}}>{title}</Text>
      <Text style={{textAlign:align}}>{record}</Text>
      </View>)
  }
  useEffect(()=>{
    if(participantInfo){
      props.navigation.setOptions({
        headerTitle: participantInfo.name,
      });
    }
  },[])
  
  
  return (
    <View style={styles.container}>
      {participantInfo.image && <View style={styles.image}><Image 
                        
                        style={{
                            width:windowWidth,height:windowHeight/4}}
                            resizeMode="cover"
                            resizeMethod="resize"
                        source={{uri:participantInfo.image}}
                    /></View>}
                    <View style={styles.infoPanel}>
                    
                    <Text style={{fontSize:20,paddingBottom:20, fontWeight:'bold'}}>Profile</Text>
                    
                    <View style={styles.infoPanelRow}>
                      <InfoPanel title={'Origin'} record={participantInfo.origin?.name}/>
                      <InfoPanel title={'Gender'} record={participantInfo.gender} align={'right'}/>
                    </View>
                    <View style={styles.infoPanelRow}>
                      <InfoPanel title={'Status'} record={participantInfo.status}/>
                      <InfoPanel title={'Species'} record={participantInfo.species} align={'right'}/>
                    </View>
                    </View>
      
    </View>
  );
};

export default Participant;
