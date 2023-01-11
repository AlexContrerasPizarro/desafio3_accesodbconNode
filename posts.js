const { Pool } = require('pg')

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'adm123',
    database: 'likeme',
    allowExitOnIdle: true
})


const putPosts = async (titulo, url, descripcion, likes) => {
    const consulta = "Insert Into posts Values (DEFAULT, $1, $2, $3, $4)"
    const values = [titulo, url, descripcion, likes]
    await pool.query(consulta, values)
    console.log("post agregado")
}


const getPosts = async () => {
    const { rows } = await pool.query("Select * From posts")
    console.log(rows)
    return rows
}

module.exports = { putPosts, getPosts }