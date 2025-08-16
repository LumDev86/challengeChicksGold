# Challenge Documentation: My Solution

This document summarizes my approach and implementation for the software engineering challenge, which consisted of solving the Water Jug Puzzle (Backend) and building a frontend layout based on a provided design.

---

## 1. My Backend Solution: The Water Jug Puzzle

For the backend portion, I designed and developed a RESTful API in Go that solves the puzzle. My goal was to create a solution that was not only correct, but also efficient and well-structured, demonstrating my ability to tackle complex problems and translate them into a robust backend architecture.

**My Algorithmic Approach:**

The core of my solution is a Breadth-First Search (BFS) algorithm, which I implemented in the services package. I chose BFS because it guarantees that the returned solution will always have the minimum number of steps. Additionally, I applied a key optimization: an early validation using the Greatest Common Divisor (GCD). If the target amount (Z) is not a multiple of the GCD of the jug capacities (X and Y), the API returns an error immediately, optimizing performance for unsolvable cases.

**API Design:**
My API is flexible, offering two endpoints for the same functionality:

- GET /solve: Uses query parameters, ideal for simple requests and easily shareable URLs.

- POST /solve: Accepts a JSON request body, which demonstrates proper handling of structured data and is a more robust option for complex requests.

I implemented robust error handling within the controllers package, ensuring that responses are clear and use the appropriate HTTP status codes (400 Bad Request for invalid inputs, 404 Not Found for cases with no solution).

**Testing:**
To ensure code quality and reliability, I wrote both unit tests to verify the correctness of the algorithm in the services package and integration tests to validate the behavior of the API in the controllers package.

---

## 1. My Frontend Approach: Layout and Design

Although the challenge focuses on the backend, the frontend PDF allowed me to understand the complete context of the test. The frontend challenge highlighted the importance of:

- CSS Mastery: The requirement to use pure CSS for the layout demonstrates the value of foundational web development skills.

- Responsive Design: Adapting the design to different screen sizes, ensuring a consistent user experience, is a key aspect of modern development.

- Code Organization: Clean code and a well-structured project are just as crucial in the frontend as in the backend.

**Conclusion**

In summary, my solution for this challenge reflects my approach as a developer. It is based on a modular architecture, clean and tested code, and a deep understanding of both backend and frontend principles. This allows me to not only solve the problem effectively but also deliver a high-quality and maintainable final product.

---

# 🧑‍💻 Author

**Lucas Matias segovia**
📧 lms.segovia86@gmail.com
