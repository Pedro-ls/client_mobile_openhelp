import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Text, TouchableOpacity } from 'react-native';
import { Circle } from '../../styles';
import { colors } from '../../colors';

import FeatherIcons from 'react-native-vector-icons/Feather';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome';
import EntypoIcons from 'react-native-vector-icons/Entypo';
import AntDesignIcons from 'react-native-vector-icons/AntDesign';
import { NewMessageButton } from '../../styles';
import SearchCompany from '../../screens/Home/Pages/search_companies';

const Tab = createBottomTabNavigator();

function TabBar() {
  return (
    <Tab.Navigator
      screenOptions={{
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
              }}
            >
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
              }}
            >
              <Circle>
                <EntypoIcons
                  name="message"
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
              >
                <Circle>
                  <FeatherIcons
                    name="user"
                    size={25}
                    color={colors.dark.Azul_01}
                  />
                </Circle>
                <Text style={{ color: colors.dark.Azul_01 }}>username</Text>
              </TouchableOpacity>
            </>
          );
        },
        tabBarStyle: {
          backgroundColor: colors.dark.black_03,
        },

        tabBarActiveTintColor: colors.dark.Azul_01,
        backgroundColor: colors.dark.black_01,
      }}
    >
      <Tab.Screen
        name="Warnings"
        options={{
          title: 'Avisos',

          tabBarIcon: ({ color, size }) => {
            return <EntypoIcons name="warning" size={size} color={color} />;
          },
        }}
        component={Test}
      />

      <Tab.Screen
        name="Bus"
        options={{
          title: 'Onibus',
          tabBarIcon: ({ color, size }) => (
            <FontAwesomeIcons name="bus" size={size} color={color} />
          ),
        }}
        component={Test}
      />

      <Tab.Screen
        name="New Message"
        options={{
          title: '',
          tabBarActiveTintColor: colors.dark.white_01,

          tabBarIcon: ({ color, size }) => {
            return (
              <NewMessageButton>
                <EntypoIcons name="plus" size={size + 1} color={color} />
              </NewMessageButton>
            );
          },
        }}
        component={Test}
      />

      <Tab.Screen
        name="Messages"
        options={{
          title: 'mensagens',
          tabBarIcon: ({ color, size }) => {
            return (
              <FontAwesomeIcons name="comments" size={size} color={color} />
            );
          },
        }}
        component={Test}
      />

      <Tab.Screen
        name="Search"
        options={{
          title: 'empresas',
          tabBarIcon: ({ color, size }) => (
            <AntDesignIcons name="search1" size={size} color={color} />
          ),
        }}
        component={SearchCompany}
      />
    </Tab.Navigator>
  );
}

function Test() {
  return null;
}

export default TabBar;
