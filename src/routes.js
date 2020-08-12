
import * as React from 'react';
import { View, Text } from 'react-native';
//import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './pages/Home';
import Users from './pages/Users';
import Product from './pages/Product';


/*
function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}*/


function DetailsScreen() {
   return (
     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
       <Text>Details Screen</Text>
     </View>
   );
 }
 

const Stack = createStackNavigator();

function Routes() {
  return (
      <Stack.Navigator screenOptions={
         {headerStyle: {backgroundColor: '#7159c1'},
          headerTintColor: '#FFF',
          headerTitleAlign: "center"}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name= "Product" component={Product} options={({ route }) => ({ title: route.params.product.title })}/>
        <Stack.Screen name="Users" component={Users} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
  );
}

export default Routes;