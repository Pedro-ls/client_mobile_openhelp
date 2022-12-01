import React, { useEffect, useState } from 'react';
import { Alert, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../../../colors';
import { endpointsMessages } from '../../../services/messages';
export default function Chat({ route }) {

    const [messages, setMessages] = useState([])
    const [messageField, setMessageField] = useState('')
    const { id } = route?.params;


    useEffect(() => {
        (async () => {


            try {
                const { data } = await endpointsMessages.getAll(Number.parseInt(id))

                setMessages(data)
            } catch {
                Alert.alert("Aviso: ", "Erro ao carregar mensagens")
            }


        })()
    }, [])
    return (
        <SafeAreaView>

            <ScrollView>
                <View style={{
                    backgroundColor: "#DD6",
                }}>
                    <Text style={{
                        fontSize: 12,
                        color: "#666444555",
                        paddingVertical: 10,
                        paddingLeft: 4
                    }}>
                        Reclamação da lotação de ônibus, seus dados só podem ser vistos por você e pela empresa de ônibus
                    </Text>
                </View>
                <View style={{
                    backgroundColor: colors.dark.black_03,

                }}>
                    {
                        messages.map((value, index) => {
                            return String(value.who).toUpperCase() == "CLI" ?
                                (
                                    <ItemChatMe key={index} message={value?.content} date={value?.pub_date} />
                                ) : (
                                    <ItemChatOuther key={index} message={value?.content} date={value?.pub_date} />
                                );
                        })
                    }
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
                        value={messageField}
                        onChangeText={(value) => setMessageField(value)}
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

                    }}
                        onPress={
                            async () => {
                                const date = new Date();
                                setMessages(messages.concat(
                                    {
                                        id: Math.random(),
                                        content: messageField,
                                        pub_date: `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}, ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`,
                                        who: "CLI"
                                    }
                                ))
                                endpointsMessages.register(messageField, id)
                            }
                        }
                    >
                        <Text style={{
                            color: colors.dark.Azul_01,
                            paddingHorizontal: 20,


                        }}>
                            Enviar
                        </Text>
                    </TouchableOpacity>

                </View>
            </ScrollView>
        </SafeAreaView >
    )
}

function ItemChatMe({ message, date }) {
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
                    {date}
                </Text>
                <Text>
                    {message}
                </Text>
            </View>
        </View>
    )
}

function ItemChatOuther({ date, message }) {


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
                    {date}
                </Text>
                <Text>
                    {message}
                </Text>
            </View>
        </View>
    )
}
