const express = require("express");
const cors = require("cors");
const mysql = require("mysql2/promise");

const server = express();
server.use(cors());
server.use(express.json());

async function getDBConnection() {
  const connection = await mysql.createConnection({
    host: "sql.freedb.tech",
    user: "freedb_admin_choris",
    password: "u&3W785vX6v?FM#",
    database: "freedb_choripopins_project",
  });
  connection.connect();
  return connection;
}

const port = 5000;
server.listen(port, () => {
  console.log("Server is running on port " + port);
});

server.get("/api/projects", async (req, res) => {
  const connection = await getDBConnection();
  const sql = "SELECT * FROM author, projects WHERE idAuthor = fk_idAuthor";
  const [projectsResults] = await connection.query(sql);
  connection.end();
  res.status(200).json({
    status: "success",
    projects: projectsResults,
  });
});

const staticServer = './web';
server.use(express.static(staticServer));
