import React from 'react';
import {SafeAreaView} from 'react-native';
import {useAuth} from '../context/auth';
import {AppRoutes} from './app.routes';
import {AuthRoutes} from './auth.routes';
import LottieAnimation from 'lottie-react-native';
import BusLoading from '../assets/lf30_editor_bvdpnvhd.json';
export const Routes = () => {
   const {signed, loadingScreen} = useAuth();
   if (loadingScreen) {
      return (
         <SafeAreaView
            style={{
               flex: 1,
               alignItems: 'center',
               justifyContent: 'center',
               backgroundColor: '#000000',
            }}>
            <LottieAnimation
               autoPlay={true}
               source={BusLoading}
               resizeMode="contain"
               autoSize={true}
               loop={true}
            />
         </SafeAreaView>
      );
   }
   return signed ? <AppRoutes /> : <AuthRoutes />;
};
