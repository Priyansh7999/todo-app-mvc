# MVC(Model View Controller)
The MVC architecture is a popular software design pattern used in web development that separates the project's data, UI, and control logic into three distinct components. It stands for Model-View-Controller.

### 1. Model
The Model represents the data layer of your application where the entire application’s business data and the related logic are stored.

### 2. View 
The View handles everything users see and interact with directly. View code is made up of all the functions that directly interact with the user, making your app look nice and defining how users see and interact with it.

### 3. Controller
The Controller acts as a bridge between the Model and the View, receiving user input and deciding what to do with it. It’s the brains of the application that tie together the Model and the View.

# EXAMPLE - Todo List App
A simple **Todo List application** where :
- Users can add todos
- See a list of todos
- Mark todos as completed
- Delete todos

The project has two separate parts:
- Frontend → React(View)
- Backend → Express + PostgreSQL (Model + Controller + Routes)

## Database Setup (PostgreSQL)

```sql
CREATE DATABASE IF NOT EXISTS todos_db;

-- todos Table
CREATE TABLE IF NOT EXISTS todos (
  id SERIAL,
  title TEXT NOT NULL,
  completed BOOLEAN DEFAULT false
);

-- Add Primary Key in todos
ALTER TABLE todos
ADD CONSTRAINT pk_todos
PRIMARY KEY (id);
```
## .env Setup

Create a `.env` file inside the `server` folder and add the following:

```env
DB_USER=your_username
DB_HOST=localhost
DB_NAME=your_database_name
DB_PASSWORD=your_password
DB_PORT=5432
```
## Database Connection

```js
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});
```
## Model Layer (server/models/todoModes.js)
- Talk directly to PostgreSQL
- Run SQL queries
- Return data

## Controller Layer (server/controllers/todoController.js)
- Receive requests from routes
- Call model functions
- Handle logic
- Send data back to frontend

## View 
- Showing the UI (input, list, buttons)
- Handling user actions (click, type)
- Sending requests to the backend
- Displaying backend data

## API Endpoints
| Method | Endpoint         | Description        |
| ------ | ---------------- | ------------------ |
| GET    | `/api/todos`     | Fetch all todos    |
| POST   | `/api/todos`     | Create a new todo  |
| PUT    | `/api/todos/:id` | Update todo status |
| DELETE | `/api/todos/:id` | Delete a todo      |

## How to Run the Application
1. Run Backend
   ```bash
    cd server
    npm install
    node server.js
    ```

2. Run Frontend
    ```bash
    cd client
    npm install
    npm run dev
    ```