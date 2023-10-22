import {
  MigrationInterface,
  QueryRunner,
  Table,
} from "typeorm";

export class Team1697966605986 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "teams",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "name",
            type: "varchar",
            length: "50",
          },
          {
            name: "race",
            type: "varchar",
            length: "100",
          },
          {
            name: "userId",
            type: "int",
          },
        ],
        foreignKeys: [
          {
            columnNames: ["userId"],
            referencedTableName: "Users",
            referencedColumnNames: ["id"],
            onDelete: "CASCADE",
          },
          
        ],
      }),
      true
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("teams");
  }
}
