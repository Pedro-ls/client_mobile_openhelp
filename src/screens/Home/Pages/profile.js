import React, {useState} from 'react';
import {StyleSheet, Image, Text, View, TouchableOpacity} from 'react-native';
import {colors} from '../../../colors';
import {Dialog} from '@rneui/themed';
import {useAuth} from '../../../context/auth';
function Profile({navigation}) {
   const [isDialogDisplay, setIsDialogDisplay] = useState(false);
   const {user} = useAuth();

   return (
      <>
         <View style={styles.panel}>
            <View style={styles.itemPanel}>
               <View style={styles.positionPhotoProfile}>
                  <Image
                     source={{
                        uri: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80',
                     }}
                     style={{
                        width: 140,
                        height: 135,
                        borderRadius: 100,
                     }}
                  />
                  <Text style={styles.textNameProfile}>{user.username}</Text>
               </View>
            </View>
            <View style={styles.itemPanel}>
               <View style={styles.infoActions}>
                  <View>
                     <Text style={styles.textLabelProfile}>Email: </Text>
                     <Text style={styles.textLabelProfile}>{user.email}</Text>
                     <Text style={styles.textLabelProfile}>Cidade:</Text>
                     <Text style={styles.textLabelProfile}>{user.city}</Text>
                     <Text style={styles.textLabelProfile}>Estado: </Text>
                     <Text style={styles.textLabelProfile}>{user.state}</Text>
                  </View>
                  <View style={styles.positionButtonsProfile}>
                     <TouchableOpacity
                        style={{
                           ...styles.buttonDefault,
                           backgroundColor: '#ff3300',
                        }}
                        onPress={() => {
                           navigation.navigate('Update');
                        }}>
                        <Text style={{color: '#fff'}}>Atualizar</Text>
                     </TouchableOpacity>
                     <TouchableOpacity
                        style={{
                           ...styles.buttonDefault,
                           backgroundColor: '#F00',
                        }}
                        onPress={() => {
                           setIsDialogDisplay(true);
                        }}>
                        <Text style={{color: '#fff'}}>Apagar</Text>
                     </TouchableOpacity>
                  </View>
               </View>
               <Dialog
                  isVisible={isDialogDisplay}
                  backdropStyle={{
                     borderColor: colors.dark.Azul_01,
                     borderWidth: 1,
                  }}>
                  <View
                     style={{
                        paddingHorizontal: 2,
                     }}>
                     <Dialog.Title
                        titleStyle={{
                           color: colors.dark.black_03,
                           textAlign: 'center',
                        }}
                        title="Deseja Apagar seu usuario realmente, essa ação é permanente?"
                     />
                     <View
                        style={{
                           flexDirection: 'row',
                           justifyContent: 'space-evenly',
                           flexWrap: 'wrap',
                        }}>
                        <Dialog.Button
                           titleStyle={{
                              color: colors.dark.white_01,
                              marginHorizontal: 10,
                              paddingHorizontal: 2,
                           }}
                           buttonStyle={{
                              backgroundColor: 'red',
                           }}
                           title="Apagar"
                           onPress={() => {
                              navigation.navigate('SignIn');
                           }}
                        />
                        <Dialog.Button
                           title="Cancelar"
                           titleStyle={{
                              color: colors.dark.white_01,
                              marginHorizontal: 7,
                              paddingHorizontal: 2,
                           }}
                           buttonStyle={{
                              backgroundColor: 'gray',
                           }}
                           onPress={() => {
                              setIsDialogDisplay(false);
                           }}
                        />
                     </View>
                  </View>
               </Dialog>
            </View>
         </View>
      </>
   );
}

const styles = StyleSheet.create({
   panel: {
      flex: 1,
      height: 1,
      margin: 10,
      flexDirection: 'column',
      backgroundColor: colors.dark.black_02,
   },
   itemPanel: {
      flex: 1,
      height: 0.3,
      marginTop: 4,
      backgroundColor: colors.dark.black_03,
   },
   positionPhotoProfile: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
   },
   textNameProfile: {
      color: colors.dark.Azul_01,
   },
   textLabelProfile: {
      color: colors.dark.Azul_01,
      marginLeft: 5,
   },
   infoActions: {},
   positionButtonsProfile: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
   },
   buttonDefault: {
      paddingLeft: 15,
      paddingRight: 15,
      paddingTop: 8,
      paddingBottom: 8,
      marginLeft: 2,
      marginRight: 2,
      borderRadius: 5,
   },
});

export default Profile;
