// NodeLicense - Open source licensing solution for Node.js projects

import express from 'express';
import sequelize from './models';
import licenseRoutes from './routes/licenseRoutes';

const app = express();
const PORT = process.env.PORT || 3000;

sequelize.sync()
    .then(() => console.log('Database and tables created successfully'))
    .catch(err => console.error(err));

app.use(express.json());
app.use('/licenses', licenseRoutes);

app.listen(PORT, () => {
    console.log('Server is running on ' + PORT);
});