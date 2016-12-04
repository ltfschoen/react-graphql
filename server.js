import express from 'express';
import linkApi from './js/api/mockLinkApi';

const port = 3000;
let app = express();
app.use(express.static('public'));

app.listen(port, () => {
  console.log('Listening on port 3000');
});

app.get("/data/links", (req, res) => {
  return linkApi.getAllLinks().then((links) => {
    res.json(links);
  }).catch(error => {
    throw(error);
  });
});
