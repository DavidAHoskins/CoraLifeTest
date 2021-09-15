import React, {useEffect,useRef} from 'react';
import {StyleSheet, Image,Dimensions,Animated} from 'react-native';
import {useQuery} from '@apollo/client';
import {useNavigation, CommonActions} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {GET_PARTICIPANTS} from '../../data/queries';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export const Splash = () => {
  const {data} = useQuery(GET_PARTICIPANTS);
  const navigation = useNavigation();
  const windowWidth = Dimensions.get('window').width;
  const fadeAnim = useRef(new Animated.Value(0)).current
  useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }
    ).start();
  }, [fadeAnim])
  useEffect(() => {
    if (data && data.characters) {
      setTimeout(() => {
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{name: 'Participants'}],
          }),
        );
      }, 2000);
    }
  }, [navigation, data]);

  /*TODO TASK 02*/
  /*TODO TASK 08*/
  return (<SafeAreaView style={styles.container} edges={['right', 'left']} >
    <Animated.View       
               
      style={{
        opacity: fadeAnim, 
        flex:1
      }}
    >
    <Image 
      style={{flex:1, width:windowWidth/2, height:windowWidth/2, margin:windowWidth/4}}
      resizeMode="contain"
      resizeMethod="resize"
      source={require('../../../assets/images/splash.png')}
                    /></Animated.View>
  </SafeAreaView>);
};

export default Splash;
