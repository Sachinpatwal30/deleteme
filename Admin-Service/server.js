
import app from './app.js';

const port = process.env.PORT || 3000; // Provide a default port if PORT is not set

app.listen(port, () => {
  console.log(`Admin Service running on port ${port}`);
});
