import express from "express";

//Creating an express app
const app = express();

//Port that express server listens on
const PORT = 3000;

app.use(express.json());

//Start the express server
app.listen(PORT, () => {
    console.log('Server is listening on port ${PORT}');
});