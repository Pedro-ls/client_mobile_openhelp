import React, {useEffect, useState} from 'react';
import {ListItem, Avatar} from '@rneui/themed';
import {FlatList, View, Text, TouchableOpacity} from 'react-native';
import {colors} from '../../../colors';
import {SafeAreaView} from 'react-native-safe-area-context';
import {endpointsFollows} from '../../../services/follows';
import {useAuth} from '../../../context/auth';

function BusesPass() {
   const [companies, setCompanies] = useState(null);
   useEffect(() => {
      (async () => {
         const response = await endpointsFollows.getAll();

         setCompanies(response.data);
      })();
   });

   const {token} = useAuth();

   function elementItemFlatListHandler({item}) {
      return (
         <ListItem
            containerStyle={{
               backgroundColor: colors.dark.black_03,
               marginBottom: 2,
               borderRadius: 4,
               paddingHorizontal: 10,
               marginHorizontal: 4,
            }}>
            <Avatar
               rounded={true}
               source={{
                  uri: `http://192.168.10.100:5000/api/companies/image/${item.company.id}`,
                  headers: {
                     Authorization: 'Bearer ' + token,
                  },
               }}
            />
            <ListItem.Content>
               <ListItem.Title>
                  <Text style={{color: colors.dark.Azul_01}}>
                     {item.company.company_name}
                  </Text>
               </ListItem.Title>
               <ListItem.Subtitle>
                  <Text style={{color: colors.dark.Azul_01}}>
                     {item.company.city}
                  </Text>
               </ListItem.Subtitle>
            </ListItem.Content>
            <View>
               <TouchableOpacity
                  style={{
                     backgroundColor: colors.dark.Azul_01,
                     paddingHorizontal: 10,
                     paddingVertical: 4,
                     marginVertical: 2,
                     flexDirection: 'row',
                     justifyContent: 'center',
                     alignItems: 'center',
                  }}>
                  <Text
                     style={{
                        color: '#fff',
                     }}>
                     Ver Empresa
                  </Text>
               </TouchableOpacity>
            </View>
         </ListItem>
      );
   }
   return (
      <SafeAreaView
         style={{
            backgroundColor: '#000',
            flex: 1,
         }}>
         <View
            style={{
               justifyContent: 'center',
               alignItems: 'center',
               backgroundColor: '#000',
               paddingVertical: 5,
            }}>
            <Text style={{color: colors.dark.Azul_01, fontSize: 18}}>
               Empresas que eu participo...
            </Text>
         </View>
         <View>
            <FlatList
               contentContainerStyle={{
                  paddingBottom: 80,
                  backgroundColor: '#000',
               }}
               data={companies}
               keyExtractor={company => company.id}
               renderItem={elementItemFlatListHandler}
            />
         </View>
      </SafeAreaView>
   );
}

export default BusesPass;
