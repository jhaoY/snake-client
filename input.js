let connection;

// setup interface to handle user input from stdin
const setupInput = (conn) => {
  connection = conn
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.on("data", handleUserInput);
  stdin.resume();
  return stdin;
};

const handleUserInput = (key) => {
  key === '\u0003' ? process.exit() : null
  key === 'w' ? connection.write("Move: up") : null
  key === 's' ? connection.write("Move: down") : null
  key === 'a' ? connection.write("Move: left") : null
  key === 'd' ? connection.write("Move: right") : null;
  key === 'r' ? connection.write("Say: MOVE!") : null;
  key === 'q' ? connection.write("Say: BYE!!") : null;
}

module.exports = {
  setupInput,
}