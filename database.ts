import "reflect-metadata";
import { DataSource } from "typeorm";
import { User1697806523259 } from "./src/migration/1697806523259-User";
import { User } from "./src/models/User";
import { Team1697966605986 } from "./src/migration/1697966605986-Team";
import { Team } from "./src/models/Team";
import { Player1697986691388 } from "./src/migration/1697986691388-Player";
import {Player} from "./src/models/Player"
import { PlayerTeam1697988892840 } from "./src/migration/1697988892840-Player-Team";
import { PlayerTeam} from "./src/models/PlayerTeam"


// le metes el export en la misma linea directamente que seria lo mismo que poner: export { AppDataSource } al final

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "karanas3689",
  database: "type_orm_2",
  //añadimos las migraciones que tiene que lanzar
  migrations: [User1697806523259, Team1697966605986, Player1697986691388, PlayerTeam1697988892840],
  entities: [User, Team, Player, PlayerTeam],
  synchronize: false,
  logging: false,
});
