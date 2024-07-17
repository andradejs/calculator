import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.calculator}>
        <View>
          <TextInput></TextInput>
        </View>

        <View style={styles.teclado}>
          <View style={styles.row}>
            <TouchableOpacity style={styles.number}>
              <Text style={styles.textButton}>AC</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.number}>
              <Text style={styles.textButton}>( )</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.number}>
              <Text style={styles.textButton}>%</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.number}>
              <Text style={styles.textButton}>÷</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity style={styles.number}>
              <Text style={styles.textButton}>7</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.number}>
              <Text style={styles.textButton}>8</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.number}>
              <Text style={styles.textButton}>9</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.number}>
              <Text style={styles.textButton}>X</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity style={styles.number}>
              <Text style={styles.textButton}>4</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.number}>
              <Text style={styles.textButton}>5</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.number}>
              <Text style={styles.textButton}>6</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.number}>
              <Text style={styles.textButton}>-</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity style={styles.number}>
              <Text style={styles.textButton}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.number}>
              <Text style={styles.textButton}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.number}>
              <Text style={styles.textButton}>3</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.number}>
              <Text style={styles.textButton}>+</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity style={styles.number}>
              <Text style={styles.textButton}>0</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.number}>
              <Text style={styles.textButton}>,</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.number}>
              <Text style={styles.textButton}>←</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.number}>
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
  },
  calculator: {
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
    width: 300,
    height: 400,
    margin: "auto",
    borderRadius: 15,
  },
  teclado: {
    flexDirection: "column",
    // backgroundColor: "#0ff0ff",
    padding: 10,
  },

  number: {
    width: 40,
    height: 40,
    backgroundColor: "#52a3eb",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
  },
  textButton: {
    alignItems: "center",
    justifyContent: "center",
    color: "#ffffff",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    // marginBottom: 
  },
});
