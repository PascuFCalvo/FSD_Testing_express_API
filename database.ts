import "reflect-metadata";
import { DataSource } from "typeorm";
import { User1697806523259 } from "./src/migration/1697806523259-User";
import { User } from "./src/routes/models/User";



// le metes el export en la misma linea directamente que seria lo mismo que poner: export { AppDataSource } al final

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "karanas3689",
  database: "type_orm_2",
  //añadimos las migraciones que tiene que lanzar
  migrations: [User1697806523259],
  entities: [User],
  synchronize: false,
  logging: false,
});
