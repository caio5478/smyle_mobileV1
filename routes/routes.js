import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

import Home from "../screens/Login";
import App from "../screens/App";

export default function Routes(){
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name= "Home" component={Home}/>
                <Stack.Screen name= "App" component={App}/>
            </Stack.Navigator>
        </NavigationContainer>
        
    )
}