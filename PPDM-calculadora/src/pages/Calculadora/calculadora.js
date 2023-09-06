import React, { useState } from 'react';
import { Text, TouchableOpacity, View, StatusBar, SafeAreaView, ImageBackground } from 'react-native';

import styles from '../../components/CalculatorStyles/styles';

import calc from '../../images/calcOn.png'
import conv from '../../images/convOff.png'

export default function Calculator( {navigation} ) {
  // Array com os textos dos botões da calculadora
  const buttons = ['AC', '+/-', '%', '/', '7', '8', '9', 'x', '4', '5', '6', '-', '3', '2', '1', '+', '.', '0', '⌫', '='];

  // Estados para armazenar o número atual e o último número
  const [currentNumber, setCurrentNumber] = useState('');
  const [lastNumber, setLastNumber] = useState('');

  // Função para verificar se uma string é um número válido
  const isNumeric = (str) => {
    return !isNaN(parseFloat(str)) && isFinite(str);
  };

  // Função para lidar com a entrada do usuário quando um botão é pressionado
  const handleInput = (buttonPressed) => {
    if (buttonPressed === 'AC') {
      // Limpa todos os números
      setLastNumber('');
      setCurrentNumber('');
    } else if (buttonPressed === '⌫') {
      // Remove o último caractere
      setCurrentNumber(currentNumber.substring(0, currentNumber.length - 1));
    } else if (buttonPressed === '+/-') {
      // Inverte o sinal do número
      setCurrentNumber(currentNumber.startsWith('-') ? currentNumber.substring(1) : '-' + currentNumber);
    } else if (buttonPressed === '%') {
      // Calcula a porcentagem do número
      const percentage = parseFloat(currentNumber) / 100;
      setCurrentNumber(percentage.toString());
    } else if (buttonPressed === '=') {
      // Define o último número como a expressão completa e realiza o cálculo
      setLastNumber(currentNumber + '=');
      calculateExpression();
    } else {
      // Adiciona o botão pressionado ao número atual
      setCurrentNumber(currentNumber + buttonPressed);
    }
  };

  // Função para calcular a expressão
  const calculateExpression = () => {
    try {
      // Avalia a expressão e calcula o resultado
      const result = eval(currentNumber.replace('x', '*'));
      setCurrentNumber(result.toString());
    } catch (error) {
      // Trata erros de cálculo
      setCurrentNumber('Error');
    }
  };

  // Estilos dos botões
  const buttonStyles = {
    'AC': { backgroundColor: '#4B5EFC' },
    '+/-': { backgroundColor: '#4B5EFC' },
    '%': { backgroundColor: '#4B5EFC' },
    '/': { backgroundColor: '#4B5EFC' },
    'x': { backgroundColor: '#4B5EFC' },
    '-': { backgroundColor: '#4B5EFC' },
    '+': { backgroundColor: '#4B5EFC' },
    '=': { backgroundColor: '#4B5EFC' },
  };

  return (
      <>
    <View style={styles.container}>
    <StatusBar backgroundColor={"#07161B"} barStyle="light-content" transLucent={false} style="light"/>
    

    <SafeAreaView>
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
      </SafeAreaView>


    </View>

          <View style={styles.result}>
            <View>
              {/* Exibe o histórico da calculadora */}
              <Text style={styles.historyText}>{lastNumber}</Text>
              {/* Exibe o número atual */}
              <Text style={styles.resultText}>{currentNumber}</Text>
            </View>
            <View style={styles.buttons}>
              {/* Mapeia os botões e renderiza os componentes TouchableOpacity */}
              {buttons.map((button) => (
                <TouchableOpacity
                  key={button}
                  style={[
                    styles.button,
                    buttonStyles[button] || {},
                  ]}
                  onPress={() => handleInput(button)}
                >
                  <Text style={styles.textButton}>{button}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
          </>
  );
}

// Estilos para os elementos da calculadora







