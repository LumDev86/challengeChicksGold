# Water Jug Puzzle Challenge

# 🌊 Water Jug API

RESTful API developed in **.NET Core 9** that solves the classic water jug problem. It calculates the sequence of steps needed to measure an exact amount of water `z_amount_wanted` using two jugs with specific capacities (`x_capacity` and `y_capacity`).

---

## 🚀 How to Run the Server

### 1) Clone the repository
```bash
git clone https://github.com/user/repository-name.git
cd backend
```

### 2) Restore .NET Dependencies
```bash
dotnet restore
```

### 3) Run the server
```bash
dotnet run
```

The server will start at: `http://localhost:5144`.

---

## 🧠 Algorithmic Approach
The solution is based on a **Breadth-First Search (BFS)** algorithm. This approach models the problem as a graph, where each node represents a state (the amount of water in each jug) and the edges are the possible actions (**fill, empty, or transfer**). BFS guarantees that the solution found is the one that requires the **minimum number of steps**.

To optimize performance, the algorithm includes an early validation using the **Greatest Common Divisor (GCD)** of the jug capacities. If the target amount (Z) is **not divisible** by the GCD of X and Y, it is immediately determined that **no solution exists**, saving valuable processing time.

---
## Structure organization of files and folders

```
📦backend
 ┣ 📂controllers
 ┃  ┗ 📜WaterJugController.cs
 ┣ 📂services
 ┃  ┣ 📜IWaterJugService.cs
 ┃  ┗ 📜WaterJugService.cs
 ┣ 📂models
 ┃  ┣ 📜RequestPayload.cs
 ┃  ┣ 📜SolutionResponse.cs
 ┃  ┗ 📜Step.cs
 ┣ 📂router
 ┃  ┗ 📜WaterJugRouter.cs
 ┗  Program.cs

```

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
curl "http://localhost:5144/WaterJug/solve?x=5&y=2&z=4"
```

**Example Successful Response (HTTP 200 OK):**
```json
{
    "solutionFound": true,
    "steps": [
        {
            "stepNumber": 1,
            "bucketX": 0,
            "bucketY": 2,
            "action": "Fill bucket Y",
            "status": null
        },
        {
            "stepNumber": 2,
            "bucketX": 2,
            "bucketY": 0,
            "action": "Transfer from Y to X",
            "status": null
        },
        {
            "stepNumber": 3,
            "bucketX": 2,
            "bucketY": 2,
            "action": "Fill bucket Y",
            "status": null
        },
        {
            "stepNumber": 4,
            "bucketX": 4,
            "bucketY": 0,
            "action": "Transfer from Y to X",
            "status": "Solved"
        }
    ],
    "error": null
}
```
**Common errors:**

- Invalid parameters (≤0) → 400 Bad Request

- No possible solution → 404 Not Found

**Response error no solution**
```json
{
    "solutionFound": false,
    "steps": null,
    "error": "No solution is possible."
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
  http://localhost:5144/WaterJug/solve
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
  "solutionFound": false,
  "steps": null,
  "error": "No solution is possible."
}
```

---
