import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import News from './pages/news';
import Helyettesites from './pages/helyettesites';
import Busz from './pages/busz';
import Profile from './pages/profile';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="News" component={News} />
        <Stack.Screen name="Helyettesites" component={Helyettesites} />
        <Stack.Screen name="Busz" component={Busz} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
