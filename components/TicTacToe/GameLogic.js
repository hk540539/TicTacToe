import React, { useCallback, useState } from "react";
import TictacToe from "./TicTacToe";
// import useForceUpdate from "use-force-update";
import useForceUpdate from "../../forceUpdate/forceUpdate";

var itemArray = new Array(9).fill("empty");
const GameLogic = () => {
  const [winMessage, setWinner] = useState("");
  const [isCross, setCross] = useState(false);
  //   const forceUpdate = useForceUpdate();
  const [, dispatch] = useState(Object.create(null));

  const drawItem = itemNumber => {
    if (itemArray[itemNumber] === "empty") {
      itemArray[itemNumber] = isCross;
      setCross(!isCross);
    }

    winGame();
  };

  const chooseItemIcon = itemNumber => {
    if (itemArray[itemNumber] !== "empty") {
      return itemArray[itemNumber] ? "cross" : "circle";
    }
    return "pencil";
  };

  const chooseItemColor = itemNumber => {
    if (itemArray[itemNumber] !== "empty") {
      return itemArray[itemNumber] ? "red" : "green";
    }
    return "pink";
  };

  const forceUpdate = useForceUpdate();
  const resetGame = () => {
    itemArray.fill("empty");
    setWinner("");
    forceUpdate();
  };

  const winGame = () => {
    if (
      itemArray[0] !== "empty" &&
      itemArray[0] == itemArray[1] &&
      itemArray[1] == itemArray[2]
    ) {
      setWinner((itemArray[0] ? "Cross" : "Circle").concat(" win"));
    } else if (
      itemArray[3] !== "empty" &&
      itemArray[3] == itemArray[4] &&
      itemArray[4] == itemArray[5]
    ) {
      setWinner((itemArray[3] ? "Cross" : "Circle").concat(" win"));
    } else if (
      itemArray[6] !== "empty" &&
      itemArray[6] == itemArray[7] &&
      itemArray[7] == itemArray[8]
    ) {
      setWinner((itemArray[6] ? "Cross" : "Circle").concat(" win"));
    } else if (
      itemArray[0] !== "empty" &&
      itemArray[0] == itemArray[3] &&
      itemArray[3] == itemArray[6]
    ) {
      setWinner((itemArray[0] ? "Cross" : "Circle").concat(" win"));
    } else if (
      itemArray[1] !== "empty" &&
      itemArray[1] == itemArray[4] &&
      itemArray[4] == itemArray[7]
    ) {
      setWinner((itemArray[1] ? "Cross" : "Circle").concat(" win"));
    } else if (
      itemArray[2] !== "empty" &&
      itemArray[2] == itemArray[5] &&
      itemArray[5] == itemArray[8]
    ) {
      setWinner((itemArray[2] ? "Cross" : "Circle").concat(" win"));
    } else if (
      itemArray[0] !== "empty" &&
      itemArray[0] == itemArray[4] &&
      itemArray[4] == itemArray[8]
    ) {
      setWinner((itemArray[0] ? "Cross" : "Circle").concat(" win"));
    } else if (
      itemArray[2] !== "empty" &&
      itemArray[2] == itemArray[4] &&
      itemArray[4] == itemArray[6]
    ) {
      setWinner((itemArray[2] ? "Cross" : "Circle").concat(" win"));
    }
  };

  return (
    <TictacToe
      drawItem={drawItem}
      chooseItemColor={chooseItemColor}
      chooseItemIcon={chooseItemIcon}
      resetGame={resetGame}
      winMessage={winMessage}
    />
  );
};

export default GameLogic;
