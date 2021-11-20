import { StatusBar } from 'expo-status-bar';
import React, { useContext } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import LoginService from './services/Login.service';
import LoginScreen from './screens/LoginScreen';
import { Context } from './context';
import { loginAction, logoutAction } from './actions/login.action';
import { useToast } from 'react-native-styled-toast';
import { showMessage, hideMessage } from "react-native-flash-message";

const loginService = new LoginService();

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3498db',
    accent: '#f1c40f',
  },
};

export default function IndexApp() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  const { state, dispatch } = useContext(Context);
   
  const onSubmit = (data: { username: string; password: string }) => {
    loginService.login(data.username, data.password).then(user => {
      if (user.success) {
        dispatch(loginAction(user.payload));
      } else {
        const { payload : { errorMsg, errorCode } } = user;
        showMessage({
          message: errorCode,
          description: errorMsg,
          type: "danger",
        });
        dispatch(logoutAction());
      }
    }).catch(error => { 
      dispatch(logoutAction());
    });
  };

  if (!isLoadingComplete) {
    return null;
  }
  if (!state.login || !state.login.user) {
    return (
      <PaperProvider theme={theme}>
        <SafeAreaProvider>
          <LoginScreen onSubmit={onSubmit} />
        </SafeAreaProvider>
      </PaperProvider>
    );
  } else {
    return (
      <PaperProvider theme={theme}>
        <SafeAreaProvider>
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
        </SafeAreaProvider>
      </PaperProvider>
    );
  }
}
