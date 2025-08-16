package controllers

import (
	"net/http"
	"strconv"
	"water-jug-challenge/models"
	"water-jug-challenge/services"

	"github.com/gin-gonic/gin"
)

// SolveGetHandler handles GET requests with URL parameters.
func SolveGetHandler(c *gin.Context) {
	xStr := c.Query("x")
	yStr := c.Query("y")
	zStr := c.Query("z")

	x, errX := strconv.Atoi(xStr)
	y, errY := strconv.Atoi(yStr)
	z, errZ := strconv.Atoi(zStr)

	if errX != nil || errY != nil || errZ != nil || x <= 0 || y <= 0 || z <= 0 {
		c.JSON(http.StatusBadRequest, models.SolutionResponse{
			SolutionFound: false,
			Error:         "Parameters 'x', 'y', and 'z' must be positive integers.",
		})
		return
	}

	solveAndRespond(c, x, y, z)
}

// SolvePostHandler handles POST requests with a JSON body.
func SolvePostHandler(c *gin.Context) {
	var req models.RequestPayload
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, models.SolutionResponse{
			SolutionFound: false,
			Error:         "Invalid request body. Ensure 'x_capacity', 'y_capacity', and 'z_amount_wanted' fields are integers.",
		})
		return
	}

	// Validate that the values are positive
	if req.XCapacity <= 0 || req.YCapacity <= 0 || req.ZAmount <= 0 {
		c.JSON(http.StatusBadRequest, models.SolutionResponse{
			SolutionFound: false,
			Error:         "Capacity and target amount values must be greater than zero.",
		})
		return
	}

	solveAndRespond(c, req.XCapacity, req.YCapacity, req.ZAmount)
}

// solveAndRespond contains the common logic for both handlers,
// calling the service and building the JSON response.
func solveAndRespond(c *gin.Context, x, y, z int) {
	steps, solved := services.SolveWaterJug(x, y, z)
	if !solved {
		c.JSON(http.StatusNotFound, models.SolutionResponse{
			SolutionFound: false,
			Error:         "No solution is possible.",
		})
		return
	}

	if len(steps) > 0 {
		steps[len(steps)-1].Status = "Solved"
	}

	c.JSON(http.StatusOK, models.SolutionResponse{
		SolutionFound: true,
		Steps:         steps,
	})
}
