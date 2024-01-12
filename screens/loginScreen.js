import { View, Text, StyleSheet } from "react-native"
import StandartButon from "../components/StandartButon";

const LoginScreen = ({navigation}) =>{
    const goToRegister = () =>{
        navigation.navigate("Register")
    }
    const goToForgotPassword = () =>{
        navigation.navigate("ForgotPassword")
    }
    return(
        <View style={styles.container}>
            <Text>Hello from login</Text>
            <StandartButon title="Create an Acoount !" onPress={goToRegister}/>
            <StandartButon title="Forgot password ? !" onPress={goToForgotPassword}/>
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
  export default LoginScreen