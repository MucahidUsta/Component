import { View, Text, StyleSheet } from "react-native"
import StandartButon from "../components/StandartButon";

const RegisterPage = ({navigation}) =>{
    const goToLogin = () =>{
        navigation.navigate("Register")
    }
    const goToForgotPassword = () =>{
        navigation.navigate("ForgotPassword")
    }
    return(
        <View style={styles.container}>
            <Text>Hello from register</Text>
            <StandartButon title="Login !" onPress={goToLogin}/>
            <StandartButon title="Forget password ? !" onPress={goToForgotPassword}/>
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
  
export default RegisterPage