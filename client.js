const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: "165.227.47.243",
    port: 50541,
  });

  conn.on("data", (data) => {
    console.log(data);
  });

  conn.on("connect", () => {
    console.log("Successfully connected!")
    conn.write("Name: JH")
    // setTimeout(() => {
    //   conn.write("Move: up")
    // }, 1000)
    // setInterval(() => {
    //   conn.write("Move: left")
    // }, 50)
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = {
  connect,
}