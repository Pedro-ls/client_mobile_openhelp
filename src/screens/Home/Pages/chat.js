import React from 'react';
import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../../../colors';
export default function Chat() {
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={{
                    backgroundColor: colors.dark.black_03,

                }}>
                    <ItemChatMe />
                    <ItemChatMe />
                    <ItemChatOuther />

                </View>
                <View style={{
                    flexDirection: "row",
                    justifyContent: "space-around",
                    paddingVertical: 10,
                    marginHorizontal: 2
                }}>
                    <TextInput style={{
                        flex: 1,
                        backgroundColor: colors.dark.black_02,
                        borderLeftColor: colors.dark.Azul_01,
                        borderTopColor: colors.dark.Azul_01,
                        borderBottomColor: colors.dark.Azul_01,
                        borderWidth: 1,
                        borderRightWidth: 0,
                        paddingLeft: 10,
                        borderTopLeftRadius: 10,
                        borderBottomLeftRadius: 10,
                        color: colors.dark.Azul_01

                    }}
                        placeholder="Insira sua mensagem"
                        placeholderTextColor={colors.dark.Azul_02}
                    />
                    <TouchableOpacity style={{
                        color: colors.dark.Azul_01,
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRightColor: colors.dark.Azul_01,
                        borderTopColor: colors.dark.Azul_01,
                        borderBottomColor: colors.dark.Azul_01,
                        borderWidth: 1,
                        borderLeftWidth: 0,
                        borderTopRightRadius: 10,
                        borderBottomEndRadius: 10,

                    }}>
                        <Text style={{
                            color: colors.dark.Azul_01,
                            paddingHorizontal: 20,


                        }}>
                            Enviar
                        </Text>
                    </TouchableOpacity>

                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

function ItemChatMe() {
    return (
        <View style={{
            flexDirection: "row",
            justifyContent: "flex-end",
            padding: 10,
            marginHorizontal: 10,
            marginVertical: 5
        }}>
            <View
                style={{
                    backgroundColor: colors.dark.Azul_01,
                    paddingHorizontal: 10,
                    paddingVertical: 5
                }}
            >
                <Text>
                    12-12-2001
                </Text>
                <Text>
                    teste
                </Text>
            </View>
        </View>
    )
}

function ItemChatOuther() {
    return (
        <View style={{
            flexDirection: "row",
            justifyContent: "flex-start",
            padding: 10,
            marginHorizontal: 10,
            marginVertical: 5
        }}>
            <View
                style={{
                    backgroundColor: colors.dark.Azul_01,
                    paddingHorizontal: 10,
                    paddingVertical: 5
                }}
            >
                <Text>
                    12-12-2001
                </Text>
                <Text>
                    teste
                </Text>
            </View>
        </View>
    )
}