import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class Player1697986691388 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: "players",
              columns: [
                {
                  name: "id",
                  type: "int",
                  isPrimary: true,
                  isGenerated: true,
                  generationStrategy: "increment",
                },
                {
                  name: "position",
                  type: "varchar",
                  length: "50",
                },
                {
                  name: "habilities",
                  type: "varchar",
                  length: "100",
                },
                {
                    name: "status",
                    type: "varchar",
                    length: "100",
                  },
                
              ],
             
            }),
            true
          );
        }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("players");
    }

}
