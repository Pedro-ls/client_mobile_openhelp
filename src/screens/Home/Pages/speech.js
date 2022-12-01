import { Alert, FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Avatar, ButtonGroupProps, ButtonProps, ListItem } from '@rneui/themed';
import React, { useEffect } from 'react';

import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../../../colors';
import { endpointsSpeeches } from '../../../services/speech';

function Speech({ navigation }) {

   const [companies, setCompanies] = React.useState(null)

   useEffect(() => {
      (async () => {
         const response = await endpointsSpeeches.getAll()
         if (response?.data?.message) Alert.alert("Aviso: ", "Login invalido!")
         if (response.data.length == 0) return;
         setCompanies(response.data)
      })()
   }, [])

   function elementItemFlatListHandler({ item }) {
      return (
         <ListItem containerStyle={{
            backgroundColor: colors.dark.black_03,

            borderRadius: 4,
            paddingHorizontal: 10,
            marginHorizontal: 4
         }} >
            <ListItem.Content>
               <ListItem.Title>
                  <Text style={{ color: colors.dark.Azul_01 }}>
                     Você para {item.company_name}
                  </Text>
               </ListItem.Title>
               <ListItem.Subtitle>
                  <Text style={{ color: colors.dark.Azul_02 }}>
                     {item.pub_date}
                  </Text>
               </ListItem.Subtitle>

            </ListItem.Content>
            <View>
               <TouchableOpacity style={{ backgroundColor: colors.dark.Azul_01, paddingHorizontal: 10, paddingVertical: 4, marginVertical: 2, flexDirection: "row", justifyContent: "center", alignItems: "center" }}
                  onPress={() => {
                     navigation.navigate("Chat", {
                        id: item.follow_id
                     })
                  }}
               >
                  <Text style={{
                     color: "#fff"
                  }}>Abrir Conversa</Text>
               </TouchableOpacity>
            </View>
         </ListItem>
      );
   }
   return (
      <SafeAreaView style={{
         backgroundColor: "#000",
         flex: 1
      }}>

         <View style={{
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#000",
            paddingVertical: 5
         }}>
            <Text style={{ color: colors.dark.Azul_01, fontSize: 18 }}>Abra uma conversa</Text>
         </View>
         <View>
            <FlatList
               contentContainerStyle={{
                  paddingBottom: 140,
                  backgroundColor: "#000"
               }}
               data={companies}
               keyExtractor={(user) => user.id}
               renderItem={elementItemFlatListHandler}
            />
         </View>
      </SafeAreaView>
   );
}

export default Speech;
