import React, {useState} from 'react';
import {
   View,
   Text,
   TextInput,
   StyleSheet,
   TouchableOpacity,
   ScrollView,
   Image,
   Alert,
} from 'react-native';
import {colors} from '../../colors';
import {launchImageLibrary} from 'react-native-image-picker';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {endpointsClient} from '../../services/client';
import {Dialog} from '@rneui/base';

export function FormClient({object, uri, method, textButtonProps}) {
   const [newClient, setNewClient] = useState(object);
   const [image, setImage] = useState(null);

   const [statusRegister, setStatusRegister] = useState(false);

   const changeFieldUsername = newValue => {
      setNewClient({
         ...newClient,
         username: newValue,
      });
      return newClient;
   };
   const changeFieldPassword = newValue => {
      setNewClient({
         ...newClient,
         password: newValue,
      });
      return newClient;
   };
   const changeFieldEmail = newValue => {
      setNewClient({
         ...newClient,
         email: newValue,
      });
      return newClient;
   };
   const changeFieldCity = newValue => {
      setNewClient({
         ...newClient,
         city: newValue,
      });
      return newClient;
   };
   const changeFieldState = newValue => {
      setNewClient({
         ...newClient,
         state: newValue,
      });
      return newClient;
   };

   const onChangeUploadPhoto = () => {
      launchImageLibrary(
         {
            mediaType: 'photo',
            noData: true,
         },
         result => {
            if (result) {
               setImage(result.assets[0]);
            }
         },
      );
   };

   const onSubmitDataClient = async () => {
      setStatusRegister(true);
      if (method == 'POST') {
         const formData = new FormData();

         formData.append('username', newClient.username);
         formData.append('password', newClient.password);
         formData.append('email', newClient.email);
         formData.append('city', newClient.city);
         formData.append('state', newClient.state);
         formData.append('photo_profile', {
            name: image.fileName,
            uri: image.uri,
            type: image.type,
            filename: image.fileName,
            fileName: image.fileName,
            content_type: image.type,
         });

         console.log(formData);

         const result = await endpointsClient.register(formData);

         if (result) {
            setStatusRegister(false);
            Alert.alert('Mensagem: ', result.data.client.username);
         }
         setStatusRegister(false);
      }
   };

   return (
      <ScrollView style={styles.container}>
         <View>
            <Text style={styles.labelInput}>Username</Text>
            <TextInput
               style={styles.input}
               placeholder="Insira seu username"
               placeholderTextColor={colors.dark.Azul_02}
               value={newClient.username}
               onChangeText={changeFieldUsername}
            />
         </View>

         <View>
            <Text style={styles.labelInput}>Email</Text>
            <TextInput
               style={styles.input}
               textContentType={'emailAddress'}
               keyboardType={'email-address'}
               placeholder="Insira seu melhor email"
               placeholderTextColor={colors.dark.Azul_02}
               value={newClient.email}
               onChangeText={changeFieldEmail}
            />
         </View>
         <View>
            <Text style={styles.labelInput}>Senha</Text>
            <TextInput
               style={styles.input}
               placeholder="Insira uma senha forte"
               placeholderTextColor={colors.dark.Azul_02}
               textContentType={'password'}
               secureTextEntry={true}
               value={newClient.password}
               onChangeText={changeFieldPassword}
            />
         </View>
         <View>
            <Text style={styles.labelInput}>Cidade</Text>
            <TextInput
               style={styles.input}
               placeholder="Incira o nome da sua cidade"
               placeholderTextColor={colors.dark.Azul_02}
               value={newClient.city}
               onChangeText={changeFieldCity}
            />
         </View>
         <View>
            <Text style={styles.labelInput}>Estado</Text>
            <TextInput
               style={styles.input}
               placeholder="Insira seu estado 2 digitos ex: SP"
               placeholderTextColor={colors.dark.Azul_02}
               value={newClient.state}
               onChangeText={changeFieldState}
            />
         </View>
         <View>
            <TouchableOpacity
               style={{
                  flex: 1,
                  height: 80,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderWidth: 1,
                  borderColor: colors.dark.Azul_01,
                  borderRadius: 5,
                  borderStyle: 'dashed',
               }}
               onPress={onChangeUploadPhoto}>
               <View>
                  {image == null ? (
                     <Text
                        style={{
                           color: colors.dark.Azul_02,
                        }}>
                        Enviar sua foto{' '}
                        <FontAwesome color={colors.dark.Azul_02} name="image" />
                     </Text>
                  ) : (
                     <Image
                        style={{
                           flex: 1,
                        }}
                        source={{
                           uri: image.uri,
                           width: 200,
                           height: 200,
                        }}
                     />
                  )}
               </View>
            </TouchableOpacity>
         </View>
         <TouchableOpacity
            style={styles.buttonAdd}
            onPress={onSubmitDataClient}>
            <Text style={styles.textButton}>{textButtonProps}</Text>
         </TouchableOpacity>
         {statusRegister && <Dialog.Loading />}
      </ScrollView>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      padding: 15,
      marginTop: 15,
      marginHorizontal: 15,
      backgroundColor: colors.dark.black_02,
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
   labelInput: {
      fontSize: 16,
      color: colors.dark.Azul_01,
   },
   buttonAdd: {
      backgroundColor: colors.dark.Azul_01,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 15,
      paddingVertical: 8,
      marginTop: 15,
      marginBottom: 35,
   },
   textButton: {
      color: colors.dark.white_01,
   },
});
