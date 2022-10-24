import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Text, TouchableOpacity, View} from 'react-native';

import {Circle, NewMessageButton} from '../../styles';

import {colors} from '../../colors';

import FeatherIcons from 'react-native-vector-icons/Feather';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome';
import EntypoIcons from 'react-native-vector-icons/Entypo';
import AntDesignIcons from 'react-native-vector-icons/AntDesign';

import SearchCompany from '../../screens/Home/Pages/search_companies';
import NewMessage from '../../screens/Home/Pages/new_message';
import Warnings from '../../screens/Home/Pages/warnings';
import BusesPass from '../../screens/Home/Pages/bus';
import Speech from '../../screens/Home/Pages/speech';
import {useAuth} from '../../context/auth';

const Tab = createBottomTabNavigator();

function TabBar({navigation}) {
   const {user} = useAuth();

   return (
      <>
         <Tab.Navigator
            screenOptions={{
               lazy: false,
               unmountOnBlur: true,

               headerStyle: {
                  backgroundColor: colors.dark.black_01,
               },

               headerTitle: () => {
                  return (
                     <Text
                        style={{
                           color: colors.dark.Azul_01,
                           fontSize: 22,
                           fontWeight: 'bold',
                        }}>
                        OpenHelp
                     </Text>
                  );
               },
               headerRight: () => (
                  <>
                     <TouchableOpacity
                        style={{
                           flex: 1,
                           flexDirection: 'row',
                           alignItems: 'center',
                        }}>
                        <Circle>
                           <EntypoIcons
                              name="help"
                              size={25}
                              color={colors.dark.Azul_01}
                           />
                        </Circle>
                     </TouchableOpacity>
                  </>
               ),
               headerLeft: () => {
                  return (
                     <>
                        <TouchableOpacity
                           style={{
                              flex: 1,
                              flexDirection: 'row',
                              alignItems: 'center',
                           }}
                           onPress={() => {
                              navigation.navigate('Profile');
                           }}>
                           <Circle>
                              <FeatherIcons
                                 name="user"
                                 size={25}
                                 color={colors.dark.Azul_01}
                              />
                           </Circle>
                           <Text style={{color: colors.dark.Azul_01}}>
                              {user.username ? user.username : null}
                           </Text>
                        </TouchableOpacity>
                     </>
                  );
               },
               tabBarStyle: {
                  backgroundColor: colors.dark.black_03,
               },

               tabBarActiveTintColor: colors.dark.Azul_01,
               backgroundColor: colors.dark.black_01,
            }}>
            <Tab.Screen
               name="Warnings"
               options={{
                  title: 'Avisos',

                  tabBarIcon: ({color, size}) => {
                     return (
                        <EntypoIcons name="warning" size={size} color={color} />
                     );
                  },
               }}
               component={Warnings}
            />

            <Tab.Screen
               name="Bus"
               options={{
                  title: 'Onibus',
                  tabBarIcon: ({color, size}) => (
                     <FontAwesomeIcons name="bus" size={size} color={color} />
                  ),
               }}
               component={BusesPass}
            />

            <Tab.Screen
               name="New Message"
               options={{
                  title: '',
                  tabBarActiveTintColor: colors.dark.white_01,

                  tabBarIcon: ({color, size}) => {
                     return (
                        <NewMessageButton>
                           <EntypoIcons
                              name="plus"
                              size={size + 1}
                              color={color}
                           />
                        </NewMessageButton>
                     );
                  },
               }}
               component={NewMessage}
            />

            <Tab.Screen
               name="Messages"
               options={{
                  title: 'Coversas',
                  tabBarIcon: ({color, size}) => {
                     return (
                        <FontAwesomeIcons
                           name="comments"
                           size={size}
                           color={color}
                        />
                     );
                  },
               }}
               component={Speech}
            />

            <Tab.Screen
               name="Search"
               options={{
                  title: 'empresas',
                  tabBarIcon: ({color, size}) => (
                     <AntDesignIcons name="search1" size={size} color={color} />
                  ),
               }}
               component={SearchCompany}
            />
         </Tab.Navigator>
      </>
   );
}

function Test() {
   return (
      <View style={{flex: 1, backgroundColor: '#000'}}>
         <Text style={{color: '#fff', fontSize: 32}}>Em construção</Text>
      </View>
   );
}

export default TabBar;
