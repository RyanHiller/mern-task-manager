# Task Manager (To-Do) App (MERN)

This is project is a task manager/to-do list web application made with the [MERN stack](https://www.mongodb.com/mern-stack).

## Installation

Download/clone this repository and navigate to the `/server` directory, then install dependencies.

```bash
cd server
npm install
```

Create an environment file `.env` and add your MongoDB connection URI to it as `DB_URI`.

```
# .env
DB_URI=<Your MongoDB connection URI>
```

## Usage

Start the application using the command below, then navigate to `http://localhost:3000` in your browser.

```bash
node src/server.js
```

## Development

### Client

Working on the client codebase can be done in the `/client` directory.

```bash
cd client
npm install
npm start
```

After making any changes, you will need to build the new frontend application

```bash
cd client
npm run build
```

Finally, you must replace the contents of `/server/public` with the new contents of `/client/build`.

### Server

All code for the server is located in `/server/src`. It is suggested to use an automated update tool such as [nodemon](https://www.npmjs.com/package/nodemon) for server development.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[ISC](https://opensource.org/licenses/ISC)
