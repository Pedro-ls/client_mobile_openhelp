import React from 'react';
import {Card} from '@rneui/themed';

import {Text} from 'react-native';
import {View} from 'react-native';
import {colors} from '../../colors';

export function CardWarning({item, token, index}) {
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
         <View
            style={{
               flexDirection: 'row',
               justifyContent: 'space-between',
               alignItems: 'center',
            }}>
            <View>
               <Text
                  style={{
                     color: colors.dark.Azul_01,
                  }}>
                  {item.photo}
               </Text>
            </View>

            <View>
               <Text
                  style={{
                     color: colors.dark.Azul_01,
                  }}>
                  {item.datetime}
               </Text>
            </View>
         </View>

         <Card.Divider />
         <Card.Image
            style={{padding: 0}}
            source={{
               uri: `http://192.168.10.103:5000/api/warnings/image/${item.id}`,
               headers: {
                  Authorization: 'Bearer ' + String(token),
               },
            }}
         />
         <Text
            style={{
               marginBottom: 10,
               color: colors.dark.Azul_01,
            }}>
            {item.content}
         </Text>
      </Card>
   );
}
