# Tennant (Timeclock)

Tennant is a Node application for managing & logging individuals and their hours worked across a variety of departments. This applications intention is to be a better method of tracking hours in expensive software, or spreadsheets.

A live demo of this application can be found on [Heroku](https://tennant-webapp-2.herokuapp.com/).

## Deployment

This application requires NodeJs and a MySQL database. All other depenencies are fetched via Node package manager.

1. Clone this repo
2. Assign required enviroment variables (See [Environment Variable Configuration](#Environment-Variable-Configuration)).
3. Run `db\schema.sql` query on MySQL to create database (This will drop DB, if exists)
4. Optional: Seed database with `db\seed.sql` with sample data.
5. Install the dependencies and start NPM
   ```bash
   npm i && npm start
   ```
6. Tables should create upon application startup (If they don't exist)

Your first user should be populated via MySQL directly to have a initial user to login with.

## Environment Variable Configuration

| Name          | Example            | Description                             |
| ------------- | ------------------ | --------------------------------------- |
| `DB_HOST`     | localhost          | URL to the MySQL Database               |
| `DB_NAME`     | tennant_time_clock | Name of the database to be used         |
| `DB_USER`     | tennant_db_user    | Username with proper permissions for DB |
| `DB_PW`       | l3tM31n_p@ssw0rd   | Password for the DB User                |
| `DB_PORT`     | 3306               | Port MySQL is running on (Default: 3306)|
| `SESS_PW`     | PG8ldedPCH3CxSxN   | Secret for generation of User Sessions  |

## Database Tables

This application uses three primary tables for storing information:

- **Individuals** - People having hours tracked, and user accounts for the web-application.
- **Departments** - Departments in which individuals belong to
- **Timecards** - Hours tracked against individuals

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to create tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)