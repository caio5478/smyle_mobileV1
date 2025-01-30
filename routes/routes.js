import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

import Home from "../screens/Home";
import Profile from "../screens/Profile";

export default function Routes(){
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name= "Home" component={Home}/>
                <Stack.Screen name= "Perfil" component={Profile}/>
            </Stack.Navigator>
        </NavigationContainer>
        
    )
}