import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class User1697806523259 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "users",
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
            name: "email",
            type: "varchar",
            length: "100",
            isUnique: true
          },
          {
            name: "password",
            type: "varchar",
            length: "255",
          },
          {
            name: "isActive",
            type: "boolean",
            default: "true",
          },
          {
            name: "role",
            type: "enum",
            enum: ["user", "admin", "super_admin"],
            default: '"user"',
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "CURRENT_TIMESTAMP",
          },
          {
            name: "updated_at",
            type: "timestamp",
            default: "CURRENT_TIMESTAMP",
            onUpdate: "CURRENT_TIMESTAMP",
          },
        ],
      }),
      true
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("users");
  }
}
