import { React, useEffect, useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import Converte from "../../services/converte";

export default function Botao({ texto, setInput, inputAtual, setOutput, converteD, converteP, inicial }){
    // seta o novo input como o já existente
    var novoInput = inputAtual;

    // caso esteja menor que o tamanho máximo, permite inserção de novo dígito
    if (String(inputAtual).length < 12 && texto != "<") {
        
        // em caso de caractere especial, precisa de função exclusiva
        // apagar
        if (texto == "<") {
            novoInput = inputAtual.slice(0, -1);
        }
        // vírgula (só pode haver uma)
        else if (texto == ",") {
            if (!String(inputAtual).includes(",")) {
                novoInput = inputAtual;
                novoInput += texto;
            }
        }
        // caso contrário, insere normalmente o dígito
        else{
            novoInput = inputAtual;
            novoInput += texto;
        }
    }
    else if (texto == "<") {
        novoInput = inputAtual.slice(0, -1);
    }

    var categoria = "Numeros";
    if (texto == "<" || texto == ",") {
        categoria = "Especiais";
    }
    const categorias = {Especiais: "#4B5EFC", Numeros: "#2E2F38"}
    const estilos = styleFunction(categorias[categoria])
    return(
                                                                                    // apagar tudo quando segurar o botão de apagar
        <TouchableOpacity style={estilos.botao} onPress={() => {setInput(novoInput); setOutput(Converte(converteD, converteP, novoInput))}} onLongPress={() => {texto == "<"? setInput("") : setInput(inputAtual); texto == "<"? setOutput("") : setOutput(Converte(converteD, converteP, inputAtual))}}>
            <Text style={estilos.texto}>{texto}</Text>
        </TouchableOpacity>
    );
}

const styleFunction = (cor) => StyleSheet.create({
    div: {
        flex: 1,
    },
    botao: {
        flex: 3,
        backgroundColor: cor,
        borderRadius: 30,
        width: 96,
        height: 72,
        alignItems: "center",
        justifyContent: "center",
        margin: 5,
    },
    texto: {
        color: "#FFF",
        fontSize: 40,
    },
})
    
