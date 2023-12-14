/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
/* eslint-disable object-shorthand */
/* eslint-disable prefer-destructuring */
/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable linebreak-style */
/* eslint-disable object-curly-spacing */
/* eslint-disable linebreak-style */
/* eslint-disable import/no-extraneous-dependencies */
const {uploadWithCloudinary} = require('./cloudinary') ;
const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const multure = require('multer');
const path = require('path');

const storage = multure.diskStorage({
  destination: './src/image',
  // eslint-disable-next-line arrow-body-style
  filename: (req, file, cb) => {
    return cb(null, `${file.filename}_${Date.now()}${path.extname(file.originalname)}`);
  },
});

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static('./src'));

const hostname = "7sp.h.filess.io";
const database = "donate_maprayspie";
const port = 3307;
const username = "donate_maprayspie";
const password = "9b0a707fac7090c3a636c6292b1f1ca3677b65c1";


const upload = multure({
  storage: storage,
});

const db = mysql.createConnection({
  host: hostname,
  user: username,
  password,
  database,
  port,
});

app.get('/', (req, res) => {
  const sql = 'SELECT * FROM donasi';
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.post('/donates', upload.single('gambar'),uploadWithCloudinary, (req, res) => {
  const sql = 'INSERT INTO donasi (`id_donasi`, `nama_donatur`, `email`, `judul_donasi`, `batas_donasi`, `kategori_donasi`, `deskripsi_donasi`, `no_telepon`, `alamat`, `poster`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
  const values = [
    req.body.id,
    req.body.nama,
    req.body.email,
    req.body.judul,
    req.body.date,
    req.body.kategori,
    req.body.deskripsi,
    req.body.number,
    req.body.alamat,
    req.body.gambar,
  ];
  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('Error saat menyimpan data ke database:', err);
      return res.status(500).json({ error: 'Terjadi kesalahan saat menyimpan data.' });
    }
    console.log('Data berhasil disimpan:', result);
    return res.status(200).json({ message: 'Data berhasil disimpan.' });
  });
});

app.get('/events/:id', (req, res) => {
  const eventId = req.params.id;
  const sql = 'SELECT * FROM donasi WHERE id_donasi = ?';
  db.query(sql, eventId, (err, data) => {
    if (err) return res.status(500).json({ error: 'Terjadi kesalahan saat mengambil data.' });
    if (data.length === 0) return res.status(404).json({ message: 'Event tidak ditemukan.' });

    return res.status(200).json(data[0]); // Mengembalikan data event yang sesuai
  });
});

app.listen(port, () => {
  console.log(`Server sudah menyala pada port ${port}`);
});
