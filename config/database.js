import pg from 'pg'
// import dotenv from 'dotenv'

// dotenv.config()

const cliente = new pg.Client({
        connectionString : process.env.CONNECTION_STRING
})

cliente.connect()

export default cliente