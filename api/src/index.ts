import { connect } from "./database";
import app from "./app";

const port = 3005;

connect();

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
