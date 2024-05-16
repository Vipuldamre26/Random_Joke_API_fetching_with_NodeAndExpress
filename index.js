const express = require("express");
const axios = require("axios");

const app = express();
const port = 8000;

app.get('/api/jokes/random', async (req, res) => {
    try {
      const response = await axios.get('https://official-joke-api.appspot.com/random_joke');
      const joke = response.data.setup;
      console.log(response.data.setup);
      res.json({"Joke" : joke});
    } 
    catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Unable to fetch the random joke' });
    }
  });
  
  app.listen(port, () => {
    console.log(`Server is running on ${port}`);
  });