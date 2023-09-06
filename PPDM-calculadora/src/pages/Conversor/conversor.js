import { React, useEffect, useState } from "react";
import { View, SafeAreaView, Text, TextInput, TouchableOpacity, StyleSheet, FlatList, ImageBackground } from "react-native";
import { Picker } from "@react-native-picker/picker";
import Botao from '../../components/Botao-Conversor/botao.js';
import Converte from "../../services/converte.js";

import calc from '../../images/calcOff.png'
import conv from '../../images/convOn.png'
import { StatusBar } from "expo-status-bar";


export default function Conversor({navigation}){
    const [input, setInput] = useState("");
    const [output, setOutput] = useState("");
    const [convertido, setConvertido] = useState("m");
    const [conversor, setConversor] = useState('"');

    const digitos = [
        {id: "1", digito: "7"},
        {id: "2", digito: "8"},
        {id: "3", digito: "9"},
        {id: "4", digito: "4"},
        {id: "5", digito: "5"},
        {id: "6", digito: "6"},
        {id: "7", digito: "1"},
        {id: "8", digito: "2"},
        {id: "9", digito: "3"},
        {id: "10", digito: ","},
        {id: "11", digito: "0"},
        {id: "12", digito: "<"}
    ];

    return(
        
        <SafeAreaView style={{flex: 1, backgroundColor: '#07161B'}}>
            <StatusBar backgroundColor={"#07161B"} barStyle="light-content" transLucent={false} style="light"/>
            
            <View style={styles.header}>

                <View style={styles.botoes}>

                    <TouchableOpacity onPress={() => navigation.navigate('CalculadoraN')}>

                        <ImageBackground style={styles.iconCal}  source={`${calc}`} />

                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('ConversorN')}>

                        <ImageBackground style={styles.iconConv}  source={`${conv}`} />

                    </TouchableOpacity>

                </View>


                </View>

            {/* área onde estão os componentes de escolha da conversão */}
            <View style={styles.fundoInput}>

                {/* seletor de valor do input */}
                <View style={styles.viewInput}>
                    <View style={styles.viewPicker}>
                        <Picker
                            selectedValue={convertido}
                            onValueChange={(itemValue) => {setConvertido(itemValue); setOutput(Converte(itemValue, conversor, input))}}
                            style={styles.picker}
                            dropdownIconColor= 'white'
                        >
                            <Picker.Item label="Centímetros" value="cm"/>
                            <Picker.Item label="Metros" value="m"/>
                            <Picker.Item label="Quilômetros" value="km"/>
                            <Picker.Item label="Polegadas" value='"'/>
                            <Picker.Item label="Pés" value="'"/>
                            <Picker.Item label="Jardas" value="yd"/>
                            <Picker.Item label="Milhas" value="mi"/>
                        </Picker>
                    </View>

                    {/* retorno visual do input */}
                    <View style={styles.viewOutput}>
                        <Text style={styles.input}>{input}</Text>
                        <Text style={styles.unidade}>{convertido}</Text>
                    </View>

                </View>

                {/* seletor de valor do output */}

                <View style={styles.viewInput}>
                    <View style={styles.viewPicker}>
                        <Picker
                        selectedValue={conversor}
                        onValueChange={(itemValue) => {setConversor(itemValue); setOutput(Converte(convertido, itemValue, input))}}
                        style={styles.picker}
                        dropdownIconColor= 'white'
                        >
                            <Picker.Item label="Centímetros" value="cm"/>
                            <Picker.Item label="Metros" value="m"/>
                            <Picker.Item label="Quilômetros" value="km"/>
                            <Picker.Item label="Polegadas" value='"'/>
                            <Picker.Item label="Pés" value="'"/>
                            <Picker.Item label="Jardas" value="yd"/>
                            <Picker.Item label="Milhas" value="mi"/>
                        </Picker>
                    </View>

                    {/* retorno visual do output */}
                    <View style={styles.viewOutput}>
                        <Text style={styles.input}>{output}</Text>
                        <Text style={styles.unidade}>{conversor}</Text>
                    </View>

                </View>
                

                
            </View>

            {/* área onde estão os botões para input */}
            <View style={styles.fundoBotoes}>
                <FlatList
                    style={{marginTop: 55}}
                    data={digitos}
                    numColumns={3}
                    renderItem={({item}) => (
                        <Botao texto={item.digito} setInput={setInput} inputAtual={input} converteD={convertido} converteP={conversor} setOutput={setOutput}/>
                    )}
                    keyExtractor={(item) => item.id}
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    fundoInput: {
        backgroundColor: "#07161B",
        paddingHorizontal: 25,
        paddingTop: 70,
        paddingBottom: 20,
        flex: 1,
    },
    input: {
        padding: 3,
        color: "#fff",
    },
    unidade: {
        color: "#FFF",
        padding: 3,
    },
    fundoBotoes: {
        backgroundColor: "#E6E6E6",
        flex: 2,
        paddingHorizontal: 20,
        borderTopEndRadius: 35,
        borderTopStartRadius: 35,
    },
    picker: {
        color: "#fff",
        fontSize: 25,
        transform: [
            { scaleX: 1.25 }, 
            { scaleY: 1.25 },
        ]
    },
    viewInput: {
        flexDirection: 'row',
        alignItems: "flex-end",
        justifyContent: "center",
        alignSelf: "stretch",
        width: "auto",
        paddingVertical: 25,
    },
    viewPicker: {
        borderBottomWidth: 1,
        borderColor: 'white',
        flex: 1,
        // width: 60,
    },
    viewOutput: {
        // width: 110, 
        flexDirection: "row", 
        flex: 1, 
        justifyContent: "flex-end",
        marginLeft: 20
    },


     header: {
        height: 70,
        marginTop: 70,
        justifyContent: 'center',
        alignItems: 'center',
        
    },

    botoes: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        gap: 100,
        
    },

    iconCal: {
        width: 30,
        height: 30,
        
    },

    iconConv: {
        width: 30,
        height: 30,
    }

})