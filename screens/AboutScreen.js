import { Text, View, StyleSheet } from "react-native"

const AboutScreen = () =>{
    return(
        <View style={styles.container}>
            <Text>hello a</Text>
        </View>
    )
} 

export default AboutScreen
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
 