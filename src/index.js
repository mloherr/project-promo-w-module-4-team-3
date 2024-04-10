const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');

const server = express();
server.use(cors());
server.use(express.json());

async function getDBConnection() {
  const connection = await mysql.createConnection({
    host: 'sql.freedb.tech',
    user: 'freedb_admin_choris',
    password: 'u&3W785vX6v?FM#',
    database: 'freedb_choripopins_project',
  });
  connection.connect();
  return connection;
}

const port = 5001;
server.listen(port, () => {
  console.log('Server is running on port ' + port);
});

server.get('/api/projects', async (req, res) => {
  const connection = await getDBConnection();
  const sql = 'SELECT * FROM author, projects WHERE idAuthor = fk_idAuthor';
  const [projectsResults] = await connection.query(sql);
  connection.end();
  res.status(200).json({
    status: 'success',
    projects: projectsResults,
  });
});

server.post('/api/newproject', async (req, res) => {
  const connection = await getDBConnection();
  const authorQuerySQL = 'INSERT INTO author (author, job, photo) VALUES (?,?,?)';
  const [authorResult] = await connection.query(authorQuerySQL, [
    req.body.autor,
    req.body.job,
    req.body.photo,
  ]);

  const sql =
    'INSERT INTO projects (name, slogan, descr, technologies, image, urlGithub, urlDemo, fk_idAuthor) VALUES (?,?,?,?,?,?,?,?)';
  const [projectResult] = await connection.query(sql, [
    req.body.name,
    req.body.slogan,
    req.body.desc,
    req.body.technologies,
    req.body.image,
    req.body.repo,
    req.body.demo,
    authorResult.insertId,
  ]);
  res
    .status(201)
    .json({ sucess: true, idProject: projectResult.insertId, idAuthor: authorResult.insertId });
});

const staticServer = './web';
server.use(express.static(staticServer));
