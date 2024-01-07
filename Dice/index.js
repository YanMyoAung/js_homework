let history = {};

function roll() {
  let user_1 = +document.getElementById("dice").value;
  let user_2 = user_1 === 1 ? 2 : 1;
  let dice = generateRandom(2, 12);
  let decider = dice <= 6 ? 1 : 2;
  let winner = user_1 === decider ? user_1 : user_2;

  let info = `User one choose ${numtoText(
    user_1
  )} and user two choose ${numtoText(
    user_2
  )} and the dice value is ${dice} and the winner is ${textWinner(
    winner,
    user_1
  )}`;

  document.getElementById("output").innerHTML =
    "Winner is " + textWinner(winner, user_1);
  document.getElementById("currentGame").innerHTML = " - " + info + "<br/>";
  logger(history, generateGamerID(history), info);
  document.getElementById("dice").value = "";
  showHistory();
}

function generateRandom(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function showHistory() {
  document.getElementById("history").innerHTML = "";
  for (property in history) {
    document.getElementById("history").innerHTML +=
      "<h3>" + property + "</h3><p>" + history[property] + "</p>";
  }
}

function clearHistory() {
  history = {};
  document.getElementById("history").innerHTML = "";
}

function logger(obj, key, value) {
  obj[key] = value;
}

function generateGamerID(obj) {
  return "Game_" + (Object.keys(obj).length + 1);
}

function numtoText(value) {
  if (value === 1) {
    return " 1 to 6";
  }
  return " 6 to 12";
}

function textWinner(winner, user1) {
  if (winner === user1) {
    return "User One";
  }
  return "User Two";
}

let text = "      ";
if (text.trim() !== "") {
}
