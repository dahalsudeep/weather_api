import express from "express";
import weatherRoute from "./routes/weatherRoute.js";

//Creating an express app
const app = express();

//Port that express server listens on
const PORT = 3000;

app.use(express.json());

//our new route
app.use("/api/weather", weatherRoute);

//Start the express server
app.listen(PORT, () => {
    console.log('Server is listening on port ${PORT}');
});