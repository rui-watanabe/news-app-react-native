import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons'
import HomeScreen from '../screens/HomeScreen';
import ArticleScreen from '../screens/ArticleScreen'
import ClipScreen from '../screens/ClipScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => {
  return(
    <Stack.Navigator>
      <Stack.Screen name="Home" component={ HomeScreen } />
      <Stack.Screen name="Article" component={ ArticleScreen } />
    </Stack.Navigator>
  );
};

const ClipStack = () => {
  return(
    <Stack.Navigator>
      <Stack.Screen name="Clip" component={ ClipScreen } />
      <Stack.Screen name="Article" component={ ArticleScreen } />
    </Stack.Navigator>
  )
};

const ScreenOption = ({ route }) => ({
  tabBarIcon: ({ color, size }) => {
    let iconName;
    if (route.name === 'Home') {
      iconName = 'home';
    } else if (route.name === 'Clip') {
      iconName = 'bookmark';
    }
    return <FontAwesome name={iconName} size={size} color={color} />;
  } 
})

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={ ScreenOption }>
        <Tab.Screen name="Home" component={ HomeStack } />
        <Tab.Screen name="Clip" component={ ClipStack } />
      </Tab.Navigator>
    </NavigationContainer> 
  );
};

export default AppNavigator;