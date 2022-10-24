import React from 'react';
import { ListItem, Avatar, ButtonProps, ButtonGroupProps } from '@rneui/themed';
import { FlatList, TextInput, View, Text, TouchableOpacity } from 'react-native';
import { colors } from '../../../colors';
import { SafeAreaView } from 'react-native-safe-area-context';


const data = [
    {
        id: 1,
        name: 'a',
        photo: 'a',
        company_url: 'https://cdn-icons-png.flaticon.com/512/480/480443.png',
    },
    {
        id: 2,
        name: 'b',
        photo: 'b',
        company_url: 'https://cdn-icons-png.flaticon.com/512/480/480443.png',
    },
    {
        id: 3,
        name: 'c',
        photo: 'c',
        company_url: 'https://cdn-icons-png.flaticon.com/512/480/480443.png',
    },
    {
        id: 4,
        name: 'd',
        photo: 'd',
        company_url: 'https://cdn-icons-png.flaticon.com/512/480/480443.png',
    },
    {
        id: 5,
        name: 'e',
        photo: 'e',
        company_url: 'https://cdn-icons-png.flaticon.com/512/480/480443.png',
    }, {
        id: 6,
        name: 'e',
        photo: 'e',
        company_url: 'https://cdn-icons-png.flaticon.com/512/480/480443.png',
    },
];

function Speech({ navigation }) {

    const [companies, setCompanies] = React.useState(data)

    function elementItemFlatListHandler({ item }) {
        return (
            <ListItem containerStyle={{
                backgroundColor: colors.dark.black_03,

                borderRadius: 4,
                paddingHorizontal: 10,
                marginHorizontal: 4
            }} >
                <Avatar rounded={true} source={{
                    uri: item.company_url
                }} />
                <ListItem.Content>
                    <ListItem.Title>
                        <Text style={{ color: colors.dark.Azul_01 }}>
                            Você tem uma conversa com {item.name}
                        </Text>
                    </ListItem.Title>
                    <ListItem.Subtitle>
                        <Text style={{ color: colors.dark.Azul_02 }}>
                            12/05/2000
                        </Text>
                    </ListItem.Subtitle>

                </ListItem.Content>
                <View>
                    <TouchableOpacity style={{ backgroundColor: colors.dark.Azul_01, paddingHorizontal: 10, paddingVertical: 4, marginVertical: 2, flexDirection: "row", justifyContent: "center", alignItems: "center" }}
                        onPress={() => {
                            navigation.navigate("Chat")
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
        <SafeAreaView>

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
