# MusicPich API 🎶

A simple **Node.js** API for managing music and artists data, developed to practice backend development with **Express**, **MongoDB**, and **Mongoose**. This API provides endpoints to interact with a music database containing information about songs, artists, and related metadata.

---

### **Features**
- Fetch all songs from the database.
- Fetch individual song details by ID.
- Fetch all artists and their associated information.
- Supports MongoDB for storing and managing data.
- API routes structured using RESTful principles.
- Basic error handling and validation.

---

### **Technologies Used**
- **Node.js**: For building the backend server.
- **Express.js**: A fast and lightweight web framework.
- **MongoDB**: For database management.
- **Mongoose**: For object data modeling (ODM) and database interaction.
- **Railway**: For deploying the API to a production-ready environment.

---

### **API Endpoints**
| Method | Endpoint                  | Description                |
|--------|---------------------------|----------------------------|
| `GET`  | `/api/music`              | Get all songs.             |
| `GET`  | `/api/music/:id`          | Get details of a song.     |
| `GET`  | `/api/artists`            | Get all artists.           |
| `GET`  | `/api/artists/:id`        | Get details of an artist.  |

---

### **Installation**
1. Clone the repository:
   ```bash
   git clone https://github.com/<your-username>/musicpich-api.git
   cd musicpich-api
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   - Create a `.env` file with the following:
     ```env
     MONGO_URI=<your-mongo-uri>
     PORT=5000
     ```

4. Run the server locally:
   ```bash
   npm run dev
   ```

5. Access the API at:
   ```
   http://localhost:5000
   ```

---

### **Deployment**
The API is deployed on **Railway** and accessible via the production URL:
```
<production-url>
```

---

### **License**
This project is open-source and available under the [MIT License](LICENSE).

