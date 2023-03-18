import express from 'express';
import { join } from 'path';
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(join(__dirname, 'build')));

app.get('/*', (req, res) => {
  res.sendFile(join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
