import React from 'react';
import { Card } from '@rneui/themed';

import { Text } from 'react-native';
import { View } from 'react-native';
import { colors } from '../../colors';
import { Avatar } from '@rneui/base';

export function CardWarning({ item, token, index }) {

   const date = new Date(item.pub_date)
   const day = parseInt(date.getDay()) < 10 ? "0" + date.getDay() : date.getDay()
   const month = parseInt(date.getMonth()) < 10 ? "0" + date.getMonth() : date.getMonth()
   const year = parseInt(date.getFullYear()) < 10 ? "0" + date.getFullYear() : date.getFullYear()
   const hours = parseInt(date.getHours()) < 10 ? "0" + date.getHours() : date.getHours()
   const minutes = parseInt(date.getMinutes()) < 10 ? "0" + date.getMinutes() : date.getMinutes()

   return (
      <Card
         key={index}
         containerStyle={{
            backgroundColor: colors.dark.black_03,
            borderColor: colors.dark.Azul_02,
         }}>
         <View
            style={{
               flexDirection: 'row',
               justifyContent: 'center',
               alignItems: 'center',
            }}>
            <Card.Title>
               <Text
                  style={{
                     color: colors.dark.Azul_01,
                  }}>
                  {item.title}
               </Text>
            </Card.Title>
         </View>
         <Card.Divider />

         <View style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-evenly",
            marginBottom: 10
         }}>
            <View>
               <Avatar
                  size={40}

                  rounded source={{
                     uri: "http://192.168.10.103:5000/api/companies/image/" + item.company.id,
                     headers: {
                        "Authorization": "Bearer " + token
                     }
                  }} />
            </View>
            <View style={{
               flexDirection: "column",
               justifyContent: "center"
            }}>

               <Text
                  style={{
                     color: colors.dark.Azul_01,
                  }}>
                  {item.company.company_name}
               </Text>
            </View>

            <View style={{
               flexDirection: "column",
               justifyContent: "center"
            }}>
               <Text style={{
                  color: colors.dark.Azul_01,
                  fontSize: 10
               }}>{day}/{month}/{year}, {hours}:{minutes}</Text>
            </View>
         </View>
         <View>
            <Card.Image
               style={{ padding: 1 }}
               source={{
                  uri: `http://192.168.10.103:5000/api/warnings/image/${item.id}`,
                  headers: {
                     Authorization: 'Bearer ' + String(token),
                  },
               }}
            />
            <View>
               <Text
                  style={{
                     marginBottom: 10,
                     color: colors.dark.Azul_01,
                  }}>
                  {item.content}
               </Text>
            </View>
         </View>


      </Card >
   );
}
