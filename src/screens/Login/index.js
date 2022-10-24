import React, {useState} from 'react';
import {
   Text,
   View,
   StyleSheet,
   TextInput,
   TouchableOpacity,
   Image,
} from 'react-native';
import Logo from '../../assets/logo.png';
import * as Animatable from 'react-native-animatable';
import {colors} from '../../colors';
import {useNavigation} from '@react-navigation/native';
import {useAuth} from '../../context/auth';

export default function SignIn() {
   const navigation = useNavigation();
   const {login} = useAuth();
   async function handleSignIn() {
      await login(current_user.email, current_user.password);
   }

   const [current_user, setCurrentUser] = useState({
      email: '',
      password: '',
   });
   const changeFieldPassword = newValue => {
      setCurrentUser({
         ...current_user,
         password: newValue,
      });
      return current_user;
   };
   const changeFieldEmail = newValue => {
      setCurrentUser({
         ...current_user,
         email: newValue,
      });
      return current_user;
   };

   return (
      <React.Fragment>
         <View style={styles.container}>
            <Animatable.View
               animation={'fadeInLeft'}
               delay={500}
               style={styles.containerHeader}>
               <Animatable.View style={styles.containerLogo}>
                  <Image
                     source={Logo}
                     style={{
                        width: 100,
                        height: 80,
                     }}
                     width={350}
                     heigth={45}
                  />
               </Animatable.View>
            </Animatable.View>

            <Animatable.View
               animation={'fadeInLeft'}
               delay={500}
               style={styles.containerForm}>
               <View>
                  <Text style={styles.message}>Email</Text>
                  <TextInput
                     placeholder="Informe seu melhor email..."
                     style={styles.input}
                     placeholderTextColor={colors.dark.Azul_02}
                     keyboardType={'email-address'}
                     value={current_user.email}
                     onChangeText={changeFieldEmail}
                  />
               </View>

               <View>
                  <Text style={styles.message}>Senha</Text>
                  <TextInput
                     placeholder="Informe sua senha..."
                     style={styles.input}
                     textContentType={'password'}
                     secureTextEntry={true}
                     placeholderTextColor={colors.dark.Azul_02}
                     value={current_user.password}
                     onChangeText={changeFieldPassword}
                  />
               </View>

               <TouchableOpacity style={styles.button} onPress={handleSignIn}>
                  <Text style={styles.buttonText}>Acessar</Text>
               </TouchableOpacity>

               <TouchableOpacity
                  style={styles.register}
                  onPress={() => navigation.navigate('Register')}>
                  <Text style={styles.registerText}>
                     Não possui conta? Cadastre-se!
                  </Text>
               </TouchableOpacity>
            </Animatable.View>
         </View>
      </React.Fragment>
   );
}
const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: colors.dark.black_02,
   },
   containerHeader: {
      marginTop: '14%',
      marginBottom: 2,
      color: colors.dark.black_04,
   },
   containerLogo: {
      marginTop: 2,
      marginBottom: 20,
   },
   message: {
      fontSize: 16,
      color: colors.dark.Azul_01,
   },
   containerForm: {
      backgroundColor: colors.dark.black_03,
      flex: 1,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      paddingStart: '5%',
      paddingEnd: '5%',
      borderTopColor: colors.dark.Azul_01,
      borderLeftColor: colors.dark.Azul_01,
      borderRightColor: colors.dark.Azul_01,
      borderTopWidth: 1,
      borderRightWidth: 1,
      borderLeftWidth: 1,
      paddingTop: 35,
   },
   title: {
      fontSize: 20,
      marginTop: 28,
      color: colors.dark.Azul_01,
   },
   input: {
      borderRadius: 5,
      marginTop: 10,
      marginBottom: 15,
      backgroundColor: colors.dark.black_03,
      borderWidth: 1,
      paddingLeft: 7,
      borderColor: colors.dark.Azul_01,
      color: colors.dark.Azul_01,
   },
   buttonText: {
      color: colors.dark.white_01,
      fontSize: 18,
      fontWeight: 'bold',
   },
   buttonRegister: {
      marginTop: 14,
      fontWeight: 'bold',
   },
   registerText: {
      color: '#A1A1A1',
   },
   button: {
      paddingLeft: 10,
      paddingRight: 10,
      paddingTop: 12,
      paddingBottom: 12,
      borderRadius: 2,
      marginTop: 20,
      marginBottom: 7,
      backgroundColor: colors.dark.Azul_01,
      flexDirection: 'row',
      justifyContent: 'center',
      borderRadius: 5,
      borderColor: colors.dark.Azul_01,
      borderWidth: 1,
   },
});
