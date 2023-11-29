const express = require('express');
const app = express();
const PORT = 3001;
const cors = require('cors');
app.use(express.json());
app.use(cors());

const taskRoutes = require('./src/routes/routes')
app.use('/api/tasks',taskRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
