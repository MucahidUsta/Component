import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import AboutScreen from "../screens/AboutScreen";
import ContactScreen from "../screens/ContactScreen";

const Tab = createMaterialBottomTabNavigator();

const MainNavigator= ()=>{
    return(
        <Tab.Navigator initialRouteName="Home">
        <Tab.Screen name= "Home" component={HomeScreen}/>
        <Tab.Screen name="About " component={AboutScreen}/>
        <Tab.Screen name="Contact " component={ContactScreen}/>
        
        </Tab.Navigator>
    )
}

export default MainNavigator