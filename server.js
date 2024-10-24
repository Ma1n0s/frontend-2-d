const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Подключение к MongoDB
mongoose.connect('mongodb://localhost:27017/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Middleware
app.use(bodyParser.json());

// Модель компании
const Company = mongoose.model('Company', new mongoose.Schema({
  name: String,
  views: { type: Number, default: 0 },
}));

// API для увеличения количества просмотров
app.post('/api/companies/:id/increment-views', async (req, res) => {
  const companyId = req.params.id;
  await Company.findByIdAndUpdate(companyId, { $inc: { views: 1 } });
  res.sendStatus(200);
});

// API для получения информации о компании
app.get('/api/companies/:id', async (req, res) => {
  const companyId = req.params.id;
  const company = await Company.findById(companyId);
  res.json(company);
});

// Запуск сервера
app.listen(3000, () => console.log('Server running on port 3000'));
