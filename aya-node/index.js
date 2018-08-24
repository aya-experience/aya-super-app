const http = require("http").createServer(() => null);
const io = require("socket.io")(http);

let browserSocket = null;
let mobileSocket = null;

io.on("connection", socket => {
  console.log("a user is now connected");

  socket.on("connect-browser", () => {
    console.log("connected to browser");
    browserSocket = socket;
  });

  socket.on("connect-mobile", () => {
    console.log("connected to mobile");
    mobileSocket = socket;
  });

  socket.on("do-stuff-on-browser", () => {
    if (browserSocket) {
      browserSocket.emit("do-stuff-on-browser");
    }
  });
});

const PORT = 2018;
http.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
