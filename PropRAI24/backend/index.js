const express = require('express');
const app = express();
const PORT = 3000;

app.use("/", (req, res) => {
    res.send("API is on!")
});
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));