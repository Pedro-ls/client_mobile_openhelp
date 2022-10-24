import React from 'react';

// components react-native
import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider, createTheme} from '@rneui/themed';
import {Routes} from './routes';
import {AuthProvider} from './context/auth';

const theme = createTheme({
   components: {
      Button: {
         background: '#000',
      },
      ListItem: {
         background: '#000',
      },
      Dialog: {
         backdropStyle: {},
      },
   },
});

function App() {
   return (
      <ThemeProvider theme={theme}>
         <NavigationContainer>
            <AuthProvider>
               <Routes />
            </AuthProvider>
         </NavigationContainer>
      </ThemeProvider>
   );
}

export default App;
