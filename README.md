# Smart Todo Full Stack Application

### Demo link:
    - Github : https://github.com/ajayahara/zeuron
    - Smart Todo Backend : https://zeuron-bvqk.onrender.com/
    - Smart Todo Frontend : https://voluble-rolypoly-4f63c8.netlify.app/
    - Figma Design : https://exquisite-horse-dba884.netlify.app
    - Live Demo : https://drive.google.com/file/d/1LPtczytU0lJqVHPsxuoSNLIwl2mdWWTa/view?usp=drive_link

## Starting the Server Locally

To start the server locally, follow these steps:

1.  **Clone the Repository**: Clone the project repository from the GitHub repository.

    ```bash
    git clone https://github.com/ajayahara/zeuron
    ```

2.  **Install Dependencies** :Navigate into the project directory and install the dependencies using npm.
    ```bash
    cd smart_todo_backend
    npm install
    ```
3.  **Set Environment Variables** :Create a .env file in the root directory of the project and configure the required environment variables (e.g., database connection details, secret keys).
    ```bash
    PORT=8000
    SECRET=your_secret_key
    ```
4. **Start the Server**: Run the server using npm or yarn.

### Tech Stacks :

    - Express
    - Nodemon
    - Bcrypt
    - Jsonwebtoken
    - Sqlite3

## API

### Signup

- **URL:** `/api/users/signup`
- **Method:** `POST`
- **Description:** Create a new user account.
- **Request Body:**
  - `username` (string): The username for the new user.
  - `password` (string): The password for the new user.
- **Responses:**
  - `200 OK`: Successful signup. Returns a JSON object containing a JWT token.
  - `400 Bad Request`: Username already exists.

### Login

- **URL:** `/api/users/login`
- **Method:** `POST`
- **Description:** Authenticate and login a user.
- **Request Body:**
  - `username` (string): The username of the user.
  - `password` (string): The password of the user.
- **Responses:**
  - `200 OK`: Successful login. Returns a JSON object containing a JWT token.
  - `400 Bad Request`: Invalid username or password.

### Create a New Task

- **URL:** `/api/tasks/`
- **Method:** `POST`
- **Description:** Create a new task for the authenticated user.
- **Authentication:** Requires a valid JWT token in the request headers.
- **Request Body:**
  - `title` (string): The title of the task.
  - `description` (string): The description of the task.
  - `category` (string): The category of the task.
  - `priority` (string): The priority level of the task.
  - `deadline` (string): The deadline of the task (optional).
  - `completed` (boolean): The completion status of the task.
- **Responses:**
  - `200 OK`: Successful creation of the task. Returns a JSON object containing the details of the created task.
  - `500 Internal Server Error`: Failed to create the task due to a server error.

### Get All Tasks

- **URL:** `/api/tasks/`
- **Method:** `GET`
- **Description:** Get all tasks for the authenticated user.
- **Authentication:** Requires a valid JWT token in the request headers.
- **Query Parameters:**
  - `page` (integer, optional): The page number for pagination (default: 1).
  - `limit` (integer, optional): The maximum number of tasks per page (default: 10).
  - `priority` (string, optional): Filter tasks by priority level (optional).
- **Responses:**
  - `200 OK`: Successful retrieval of tasks. Returns a JSON array containing task objects.
  - `500 Internal Server Error`: Failed to retrieve tasks due to a server error.

### Update a Task

- **URL:** `/api/tasks/:id`
- **Method:** `PUT`
- **Description:** Update an existing task.
- **Authentication:** Requires a valid JWT token in the request headers.
- **Request Parameters:**
  - `id` (string): The ID of the task to update.
- **Request Body:**
  - `title` (string): The updated title of the task.
  - `description` (string): The updated description of the task.
  - `category` (string): The updated category of the task.
  - `priority` (string): The updated priority level of the task.
  - `deadline` (string): The updated deadline of the task.
  - `completed` (boolean): The updated completion status of the task.
- **Responses:**
  - `200 OK`: Successful update of the task. Returns a JSON object containing the updated task details.
  - `500 Internal Server Error`: Failed to update the task due to a server error.

### Delete a Task

- **URL:** `/api/tasks/:id`
- **Method:** `DELETE`
- **Description:** Delete an existing task.
- **Authentication:** Requires a valid JWT token in the request headers.
- **Request Parameters:**
  - `id` (string): The ID of the task to delete.
- **Responses:**
  - `204 No Content`: Successful deletion of the task.
  - `500 Internal Server Error`: Failed to delete the task due to a server error.

### Get Tomorrow's Task Notifications

- **URL:** `/api/notifications/`
- **Method:** `GET`
- **Description:** Get notifications for tasks with a deadline tomorrow for the authenticated user.
- **Authentication:** Requires a valid JWT token in the request headers.
- **Responses:**
  - `200 OK`: Successful retrieval of notifications. Returns a JSON array containing notification messages for tasks with a deadline tomorrow.
  - `500 Internal Server Error`: Failed to retrieve notifications due to a server error.


## Starting The Frontend Server Locally

To start the server locally, follow these steps:

1.  **Clone the Repository**: Clone the project repository from the GitHub repository.

    ```bash
    git clone https://github.com/ajayahara/zeuron
    ```

2.  **Install Dependencies** :Navigate into the project directory and install the dependencies using npm.
    ```bash
    cd smart_todo_frontend
    npm install
    ```
3. **Start the Server**: Run the server using npm or yarn.

### Tech Stacks :

    - React
    - Electron
    - Tailwind
    - React Router Dom