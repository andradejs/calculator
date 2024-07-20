import { StatusBar } from "expo-status-bar";
import { evaluate } from "mathjs";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
} from "react-native";

import { useState } from "react";

export default function App() {
  const [valor, setValor] = useState("");

  function execultarOperacao() {
    setValor(evaluate(valor).toString());
  }

  function apagarUmDigito() {
    setValor(valor.slice(0, -1));
  }

  function apagarTudo() {
    setValor("");
  }

  function checkSymbol() {
    return isNaN(parseInt(valor.slice(-1)));
  }

  function adicionarNumero(numero) {
    setValor(valor + numero);
  }

  function adicionarOperacao(operacao) {
    if (!checkSymbol()) {
      setValor(valor + operacao);
    }
  }

  return (
    // <View style={styles.container}>
    <SafeAreaView style={styles.calculator}>
      <View>
        <TextInput
          style={styles.tela}
          placeholder="0"
          onChangeText={setValor}
          value={valor}
          editable={false}
        ></TextInput>
      </View>

      <View style={styles.teclado}>
        <View style={styles.row}>
          <TouchableOpacity
            style={[styles.btn, styles.AC]}
            onPress={apagarTudo}
          >
            <Text style={styles.textButton}>AC</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.btn, styles.symbol]}
            onPress={checkSymbol}
          >
            <Text style={styles.textButton}>( )</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.btn, styles.symbol]}
            onPress={() => {
              adicionarOperacao("%");
            }}
          >
            <Text style={styles.textButton}>%</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.btn, styles.symbol]}
            onPress={() => {
              if (!checkSymbol()) {
                setValor(valor + "/");
              }
            }}
          >
            <Text style={styles.textButton}>/</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            style={[styles.btn, styles.numeric]}
            onPress={() => {
              adicionarNumero("7");
            }}
          >
            <Text style={styles.textButton}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.btn, styles.numeric]}
            onPress={() => {
              adicionarNumero("8");
            }}
          >
            <Text style={styles.textButton}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.btn, styles.numeric]}
            onPress={() => {
              adicionarNumero("9");
            }}
          >
            <Text style={styles.textButton}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.btn, styles.symbol]}
            onPress={() => {
            adicionarOperacao("*");
              
            }}
          >
            <Text style={styles.textButton}>*</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            style={[styles.btn, styles.numeric]}
            onPress={() => {
              adicionarNumero("4");
            }}
          >
            <Text style={styles.textButton}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.btn, styles.numeric]}
            onPress={() => {
              adicionarNumero("5");
            }}
          >
            <Text style={styles.textButton}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.btn, styles.numeric]}
            onPress={() => {
              adicionarNumero("6");
            }}
          >
            <Text style={styles.textButton}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.btn, styles.symbol]}
            onPress={() => {
            adicionarOperacao("-");
              
            }}
          >
            <Text style={styles.textButton}>-</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            style={[styles.btn, styles.numeric]}
            onPress={() => {
              adicionarNumero("1");
            }}
          >
            <Text style={styles.textButton}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.btn, styles.numeric]}
            onPress={() => {
              adicionarNumero("2");
            }}
          >
            <Text style={styles.textButton}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.btn, styles.numeric]}
            onPress={() => {
              adicionarNumero("3");
            }}
          >
            <Text style={styles.textButton}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.btn, styles.symbol]}
            onPress={() => {
            adicionarOperacao("+");
            }}
          >
            <Text style={styles.textButton}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            style={[styles.btn, styles.numeric]}
            onPress={() => {
              adicionarNumero("0");
            }}
          >
            <Text style={styles.textButton}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.btn, styles.numeric]}
            onPress={() => {
              if (!checkSymbol() && !valor.toString().includes(".")) {
                setValor(valor + ".");
              }
            }}
          >
            <Text style={styles.textButton}>.</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.btn, styles.numeric]}
            onPress={apagarUmDigito}
          >
            <Text style={styles.textButton}>←</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.btn, styles.equal]}
            onPress={execultarOperacao}
          >
            <Text style={styles.textButton}>=</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  calculator: {
    flex: 1,
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "flex-end",
    // width: "auto",
    // height: 500,
    // padding: 15,
    // borderRadius: 15,
  },
  teclado: {
    flexDirection: "column",
    padding: 10,
  },

  btn: {
    width: 80,
    height: 80,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
  },
  textButton: {
    alignItems: "center",
    justifyContent: "center",
    color: "#ffffff",
    fontSize: 30,
    textAlign: "center",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  tela: {
    // backgroundColor: 'white',
    width: 340,
    height: 80,
    fontSize: 65,
    color: "white",
    // backgroundColor: 'white',
    textAlign: "right",
    fontWeight: "300",
  },

  symbol: {
    backgroundColor: "#3070f0",
  },
  numeric: {
    backgroundColor: "#202020",
  },
  equal: {
    backgroundColor: "#0000f0",
  },
  AC: {
    backgroundColor: "#007000",
  },
});
