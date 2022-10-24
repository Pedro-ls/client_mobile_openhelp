import React, { useState } from 'react';
import { TextInput, View, TouchableOpacity, Text, StyleSheet, ScrollView } from 'react-native';
import Dropdown from 'react-native-dropdown-picker';
import Feather from 'react-native-vector-icons/Feather';
import { colors } from '../../../colors';


function NewMessage() {

    const [valueSelect, setValueSelect] = useState(null);
    const [itemsSelect, setItemsSelect] = useState([
        { label: 'Football', value: 'football' },
        { label: 'Baseball', value: 'baseball' },
        { label: 'Hockey', value: 'hockey' },
    ]);
    const [statusopen, setStatusOpen] = useState(false);
    return (
        <View style={{
            flex: 1,
            backgroundColor: "#000"
        }}>
            <View style={styles.container}>
                <View>
                    <Text style={styles.labelInput}>Insira um titulo para nova conversa</Text>
                    <TextInput style={styles.input}
                        placeholderTextColor={colors.dark.Azul_02} multiline={true} placeholder="Esse titulo vai nomear a conversa" />
                </View>
                <View>
                    <Text style={styles.labelInput}>
                        você deseja criar uma conversa qual empresa?
                    </Text>
                    <Dropdown
                        value={valueSelect}
                        items={itemsSelect}
                        open={statusopen}
                        setValue={setValueSelect}
                        setItems={setItemsSelect}
                        setOpen={setStatusOpen}
                        arrowIconContainerStyle={{
                            borderColor: colors.dark.Azul_01,
                            borderWidth: 1,
                            borderRadius: 100
                        }}
                        style={
                            {
                                backgroundColor: colors.dark.black_03,
                                color: colors.dark.Azul_01
                            }
                        }
                        ArrowUpIconComponent={
                            () => {
                                return <Feather color={colors.dark.Azul_01} name="chevron-up" />

                            }
                        }
                        ArrowDownIconComponent={
                            () => {
                                return <Feather color={colors.dark.Azul_01} name="chevron-down" />
                            }
                        }
                        labelStyle={
                            {
                                color: colors.dark.Azul_01
                            }
                        }
                        listItemContainerStyle={
                            {
                                backgroundColor: colors.dark.black_03
                            }
                        }
                        textStyle={
                            {
                                color: colors.dark.Azul_01
                            }
                        }

                    />

                </View>
                <TouchableOpacity style={styles.buttonAdd}>
                    <Text style={styles.textButton}>
                        Inserir conversa
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

        padding: 15,
        marginTop: 15,
        marginHorizontal: 15,
        backgroundColor: colors.dark.black_02
    },
    input: {

        borderRadius: 5,
        marginTop: 10,
        marginBottom: 15,
        backgroundColor: colors.dark.black_03,
        borderWidth: 1,
        paddingLeft: 7,
        paddingVertical: 20,
        borderColor: colors.dark.Azul_01,
        color: colors.dark.Azul_01
    },
    labelInput: {
        fontSize: 16,
        color: colors.dark.Azul_01
    },
    buttonAdd: {
        backgroundColor: colors.dark.Azul_01,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 15,
        paddingVertical: 8,
        marginTop: 15
    },
    textButton: {
        color: colors.dark.white_01
    }
});

export default NewMessage