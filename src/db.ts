import { Sequelize } from 'sequelize'
import { DB_NAME, DB_HOST, DB_PASSWORD, DB_USER, DB_PORT } from './config'

export const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    port: DB_PORT,
    dialect: 'postgres',
    logging: false,
})

import './models'
