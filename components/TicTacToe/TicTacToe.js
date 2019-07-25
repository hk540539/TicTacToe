import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { Button } from "native-base";

const TicTacToe = ({
  drawItem,
  chooseItemColor,
  chooseItemIcon,
  resetGame,
  winMessage
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.grid}>
        <View style={styles.row}>
          <View style={styles.item}>
            <TouchableOpacity onPress={() => drawItem(0)}>
              <Entypo
                name={chooseItemIcon(0)}
                size={50}
                color={chooseItemColor(0)}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.item}>
            <TouchableOpacity onPress={() => drawItem(1)}>
              <Entypo
                name={chooseItemIcon(1)}
                size={50}
                color={chooseItemColor(1)}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.item}>
            <TouchableOpacity onPress={() => drawItem(2)}>
              <Entypo
                name={chooseItemIcon(2)}
                size={50}
                color={chooseItemColor(2)}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.item}>
            <TouchableOpacity onPress={() => drawItem(3)}>
              <Entypo
                name={chooseItemIcon(3)}
                size={50}
                color={chooseItemColor(3)}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.item}>
            <TouchableOpacity onPress={() => drawItem(4)}>
              <Entypo
                name={chooseItemIcon(4)}
                size={50}
                color={chooseItemColor(4)}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.item}>
            <TouchableOpacity onPress={() => drawItem(5)}>
              <Entypo
                name={chooseItemIcon(5)}
                size={50}
                color={chooseItemColor(5)}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.item}>
            <TouchableOpacity onPress={() => drawItem(6)}>
              <Entypo
                name={chooseItemIcon(6)}
                size={50}
                color={chooseItemColor(6)}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.item}>
            <TouchableOpacity onPress={() => drawItem(7)}>
              <Entypo
                name={chooseItemIcon(7)}
                size={50}
                color={chooseItemColor(7)}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.item}>
            <TouchableOpacity onPress={() => drawItem(8)}>
              <Entypo
                name={chooseItemIcon(8)}
                size={50}
                color={chooseItemColor(8)}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <Text style={styles.winMessage}>{winMessage}</Text>
      <Button onPress={resetGame} full rounded primary style={styles.button}>
        <Text style={styles.btntext}>Reset Game</Text>
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center"
  },
  grid: {},
  row: {
    flexDirection: "row"
  },
  item: {
    borderWidth: 2,
    borderColor: "#000",
    padding: 30
  },
  winMessage: {
    padding: 20,
    fontSize: 25,
    fontWeight: "bold"
  },
  button: {
    margin: 20,
    padding: 10
  },
  btntext: {
    color: "#FFF",
    fontWeight: "bold"
  }
});

export default TicTacToe;
