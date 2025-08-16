# Water Jug Puzzle Challenge

## 📝 Project Description
This project is a RESTful API developed in Go that solves the classic water jug puzzle. The API calculates the sequence of steps needed to measure an exact amount of water (Z) using two jugs with specific capacities (X and Y). The objective of this challenge is to demonstrate the ability to design an efficient and well-documented backend solution.

---

## 🚀 How to Run the Server

### 1) Clone the repository
```bash
git clone https://github.com/LumDev86/challengeChicksGold.git
cd [your-repository-name]
```

### 2) Run the server
```bash
go run main.go
```

The server will start at: `http://localhost:8080`.

---

## 🧠 Algorithmic Approach
The solution is based on a **Breadth-First Search (BFS)** algorithm. This approach models the problem as a graph, where each node represents a state (the amount of water in each jug) and the edges are the possible actions (**fill, empty, or transfer**). BFS guarantees that the solution found is the one that requires the **minimum number of steps**.

To optimize performance, the algorithm includes an early validation using the **Greatest Common Divisor (GCD)** of the jug capacities. If the target amount (Z) is **not divisible** by the GCD of X and Y, it is immediately determined that **no solution exists**, saving valuable processing time.

---

## 📖 API Endpoints
The API offers two endpoints to solve the puzzle, providing flexibility to the client.

### 1) `GET /solve`
**Description:** Solves the puzzle by sending the parameters in the URL.  
**Method:** `GET`

**Query Parameters:**
- `x`: Capacity of the first jug (positive integer).
- `y`: Capacity of the second jug (positive integer).
- `z`: Target amount of water (positive integer).

**Example Request:**
```bash
curl "http://localhost:8080/solve?x=3&y=5&z=4"
```

**Example Successful Response (HTTP 200 OK):**
```json
{
  "solution_found": true,
  "steps": [
    {
      "step": 1,
      "bucketX": 0,
      "bucketY": 5,
      "action": "Llenar cubo Y"
    },
    {
      "step": 2,
      "bucketX": 3,
      "bucketY": 2,
      "action": "Transferir de Y a X"
    },
    {
      "step": 3,
      "bucketX": 0,
      "bucketY": 2,
      "action": "Vaciar cubo X"
    },
    {
      "step": 4,
      "bucketX": 2,
      "bucketY": 0,
      "action": "Transferir de Y a X"
    },
    {
      "step": 5,
      "bucketX": 2,
      "bucketY": 5,
      "action": "Llenar cubo Y"
    },
    {
      "step": 6,
      "bucketX": 3,
      "bucketY": 4,
      "action": "Transferir de Y a X",
      "status": "Solved"
    }
  ]
}
```

---

### 2) `POST /solve`
**Description:** Solves the puzzle by sending the parameters in the JSON request body.  
**Method:** `POST`

**Request Body (JSON):**
```json
{
  "x_capacity": 3,
  "y_capacity": 5,
  "z_amount_wanted": 4
}
```

**Example Request:**
```bash
curl -X POST \
  -H "Content-Type: application/json" \
  -d '{"x_capacity": 3, "y_capacity": 5, "z_amount_wanted": 4}' \
  http://localhost:8080/solve
```

**Example Error Response (HTTP 400 Bad Request):**
```json
{
  "solution_found": false,
  "error": "Invalid request body. Ensure 'x_capacity', 'y_capacity', and 'z_amount_wanted' fields are integers."
}
```

**Example No-Solution Response (HTTP 404 Not Found):**
```json
{
  "solution_found": false,
  "error": "No solution is possible."
}
```

---

# 🧑‍💻 Author

**Lucas Matias segovia**
📧 lms.segovia86@gmail.com