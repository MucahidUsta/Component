import { View , Text, StyleSheet} from "react-native"
import StandartButon from "../components/StandartButon";
const ForgotPassword = ({navigation}) =>{
    const goToRegister = () =>{
        navigation.navigate("Register")
    }
    const goToLogin = () =>{
        navigation.navigate("Login")
    }
    return(
        <View style={styles.container}>
            <Text>Hello from forget</Text>
            <StandartButon title="Create an Acoount !" onPress={goToRegister}/>
            <StandartButon title="Login !" onPress={goToLogin}/>
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  export default ForgotPassword