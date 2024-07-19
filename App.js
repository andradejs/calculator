import { StatusBar } from "expo-status-bar";
import { evaluate } from "mathjs";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
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
  return (
    <View style={styles.container}>
      <View style={styles.calculator}>
        <View>
          <TextInput
            style={styles.tela}
            placeholder="0"
            onChangeText={setValor}
            value={valor}
          ></TextInput>
        </View>

        <View style={styles.teclado}>
          <View style={styles.row}>
            <TouchableOpacity style={styles.number} onPress={apagarTudo}>
              <Text style={styles.textButton}>AC</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.number}>
              <Text style={styles.textButton}>( )</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.number}>
              <Text
                style={styles.textButton}
                onPress={() => {
                  setValor(valor + "%");
                }}
              >
                %
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.number}>
              <Text
                style={styles.textButton}
                onPress={() => {
                  setValor(valor + "÷");
                }}
              >
                ÷
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity
              style={styles.number}
              onPress={() => {
                setValor(valor + "7");
              }}
            >
              <Text style={styles.textButton}>7</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.number}
              onPress={() => {
                setValor(valor + "8");
              }}
            >
              <Text style={styles.textButton}>8</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.number}
              onPress={() => {
                setValor(valor + "9");
              }}
            >
              <Text style={styles.textButton}>9</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.number}
              onPress={() => {
                setValor(valor + "*");
              }}
            >
              <Text style={styles.textButton}>*</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity
              style={styles.number}
              onPress={() => {
                setValor(valor + "4");
              }}
            >
              <Text style={styles.textButton}>4</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.number}
              onPress={() => {
                setValor(valor + "5");
              }}
            >
              <Text style={styles.textButton}>5</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.number}
              onPress={() => {
                setValor(valor + "6");
              }}
            >
              <Text style={styles.textButton}>6</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.number}
              onPress={() => {
                setValor(valor + "-");
              }}
            >
              <Text style={styles.textButton}>-</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity
              style={styles.number}
              onPress={() => {
                setValor(valor + "1");
              }}
            >
              <Text style={styles.textButton}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.number}
              onPress={() => {
                setValor(valor + "2");
              }}
            >
              <Text style={styles.textButton}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.number}
              onPress={() => {
                setValor(valor + "3");
              }}
            >
              <Text style={styles.textButton}>3</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.number}
              onPress={() => {
                setValor(valor + "+");
              }}
            >
              <Text style={styles.textButton}>+</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity
              style={styles.number}
              onPress={() => {
                setValor(valor + "0");
              }}
            >
              <Text style={styles.textButton}>0</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.number}
              onPress={() => {
                setValor(valor + ".");
              }}
            >
              <Text style={styles.textButton}>.</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.number} onPress={apagarUmDigito}>
              <Text style={styles.textButton}>←</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.number} onPress={execultarOperacao}>
              <Text style={styles.textButton}>=</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  calculator: {
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "flex-end",
    width: "auto",
    height: 500,
    padding: 15,
    borderRadius: 15,
  },
  teclado: {
    flexDirection: "column",
    padding: 10,
  },

  number: {
    width: 50,
    height: 50,
    backgroundColor: "#52a3eb",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
  },
  textButton: {
    alignItems: "center",
    justifyContent: "center",
    color: "#ffffff",
    fontSize: 20,
    textAlign: "center",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  tela: {
    // backgroundColor: 'white',
    width: 225,
    height: 50,
    fontSize: 50,
    color: "white",
    textAlign: "right",
    fontWeight: "regular",
  },
});
