import { connect } from "./database";
import app from "./app";

const port = 3000;

connect();

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
