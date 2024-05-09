import { DataSource } from "typeorm";
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const HOST=process.env.HOST
const DBpassword=process.env.DBpassword
const Database=process.env.database
const Port= process.env.PORT


export const AppSataSource = new DataSource({
    type: "postgres",
    host: HOST,
    port: parseInt(`${Port}`),
    username: "postgres",
    password: DBpassword,
    database: Database,
    // ssl: {
    //     rejectUnauthorized: false,
    // },
    entities: ["src/entities/*{.ts,.js}"],
    synchronize: true,
    logging: true,
});

export async function connectDB() {
    await AppSataSource.initialize()
        .then(() => {
            console.log("Connected to database");
        })
        .catch((e) => console.log(e));
}