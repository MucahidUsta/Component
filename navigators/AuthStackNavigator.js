import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/loginScreen";
import ForgetPassword from "../screens/forgetPassword";
import RegisterPage from "../screens/registerPage";

const Stack = createNativeStackNavigator();

const AuthStackNavigator= ()=>{
    return(
        <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown:false}}>
            <Stack.Screen name = "Login" component ={LoginScreen} />
            <Stack.Screen name = "Register" component ={RegisterPage} />
            <Stack.Screen name = "ForgotPassword" component ={ForgetPassword} />
        </Stack.Navigator>
    )
}
export default AuthStackNavigator;