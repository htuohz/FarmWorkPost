using Microsoft.EntityFrameworkCore.Migrations;

namespace FarmWorkPost.Migrations
{
    public partial class adddisplayformatefordate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "Type",
                table: "Jobs",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AlterColumn<string>(
                name: "Status",
                table: "Jobs",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddColumn<string>(
                name: "UserName",
                table: "AppUsers",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "UserName",
                table: "AppUsers");

            migrationBuilder.AlterColumn<int>(
                name: "Type",
                table: "Jobs",
                type: "int",
                nullable: false,
                oldClrType: typeof(string));

            migrationBuilder.AlterColumn<int>(
                name: "Status",
                table: "Jobs",
                type: "int",
                nullable: false,
                oldClrType: typeof(string));
        }
    }
}
