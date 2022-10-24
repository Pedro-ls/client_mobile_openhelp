import React, {useEffect, useState} from 'react';
import {ListItem, Avatar} from '@rneui/themed';
import {FlatList, TextInput, View, Text, TouchableOpacity} from 'react-native';
import {colors} from '../../../colors';
import {endpointsCompanies} from '../../../services/companies';
import {useAuth} from '../../../context/auth';
import {endpointsFollows} from '../../../services/follows';

function SearchCompany() {
   const {token} = useAuth();
   useEffect(() => {
      (async () => {
         const response = await endpointsCompanies.getAll(fieldSearch);
         setCompanies(response.data);
      })();
   }, []);

   const [companies, setCompanies] = useState([]);
   const [fieldSearch, setFieldSearch] = useState('');

   function elementItemFlatListHandler({item}) {
      const handleFollowCompany = () => {
         const id = item.id;
         endpointsFollows.register(id).then(res => {
            console.log('Registrado');
         });
      };
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
                  uri: `http://192.168.10.100:5000/api/companies/image/${item.id}`,
                  headers: {
                     Authorization: 'Bearer ' + String(token),
                  },
               }}
            />
            <ListItem.Content>
               <ListItem.Title>
                  <Text style={{color: colors.dark.Azul_01}}>
                     {item.company_name}
                  </Text>
               </ListItem.Title>
               <ListItem.Subtitle>
                  <Text style={{color: colors.dark.Azul_01}}>{item.city}</Text>
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
                     color: '#fff',
                  }}
                  onPress={handleFollowCompany}>
                  <Text
                     style={{
                        color: '#fff',
                     }}>
                     Seguir Empresa
                  </Text>
               </TouchableOpacity>
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
      <>
         <View>
            <TextInput
               style={{
                  backgroundColor: colors.dark.black_03,
                  borderWidth: 1,
                  paddingLeft: 7,
                  paddingVertical: 20,
                  borderColor: colors.dark.Azul_01,
                  color: colors.dark.Azul_01,
               }}
               placeholderTextColor={colors.dark.Azul_02}
               placeholder="Nome da empresa que está procurando"
               onChangeText={async value => {
                  setFieldSearch(fieldSearch);
                  const response = await endpointsCompanies.getAll(fieldSearch);

                  setCompanies(response.data);
               }}
               value={fieldSearch}
            />
         </View>
         <View>
            <FlatList
               contentContainerStyle={{
                  paddingBottom: 80,
                  backgroundColor: '#000',
               }}
               data={companies}
               keyExtractor={(user, index) => index}
               renderItem={elementItemFlatListHandler}
            />
         </View>
      </>
   );
}

export default SearchCompany;
