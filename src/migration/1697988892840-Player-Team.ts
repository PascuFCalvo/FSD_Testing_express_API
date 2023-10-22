import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class PlayerTeam1697988892840 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: "playerteams",
              columns: [
                
                  
                  {
                      name: "team_id",
                      type: "int",
                    },
                    {
                        name: "player_id",
                        type: "int",
                    },
                    {
                      name: "player_description",
                      type: "text",
                    },
                ],
                foreignKeys: [
                    {
                        name: "Team",
                        referencedTableName: "teams",
                        referencedColumnNames: ["id"],
                        columnNames: ["team_id"],
                        onDelete: "CASCADE",
                        onUpdate: "CASCADE",
                    },
                    {
                        name: "Player",
                        referencedTableName: "players",
                        referencedColumnNames: ["id"],
                        columnNames: ["player_id"],
                        onDelete: "CASCADE",
                        onUpdate: "CASCADE",
                },
                ],
            })
            );
        }
        
        public async down(queryRunner: QueryRunner): Promise<void> {
            await queryRunner.dropTable("playerteams");
        }
        
}
