import app from "./expressApp";

const PORT = process.env.PORT || 8000;

export const StartServer = async () => {
  app.listen(PORT, () => {
    console.log(`server listening on port ${PORT} 🚀🚀🚀`);
  });

  process.on("uncaughtException", (err) => {
    console.log(err);
    process.exit(1);
  });
};

StartServer().then(() => {
  console.log("Server Is Up 🚀🚀🚀");
});
