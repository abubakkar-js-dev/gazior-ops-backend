import app from "./app";
import connectToMongoDB from "./config/db.config";

const PORT = process.env.PORT || 8000;

// connect with database
connectToMongoDB()
  .then(() => {
    console.log("Successfully connected with Mongodb");

    // listen to server
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error(
      "Failed to start the server due to DB connection error:",
      err,
    );
  });
