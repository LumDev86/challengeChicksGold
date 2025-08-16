package services

import (
	"reflect"
	"testing"
	"water-jug-challenge/models"
)

func TestSolveWaterJug(t *testing.T) {

	testCases := []struct {
		name     string
		xCap     int
		yCap     int
		z        int
		expected []models.Step
		solved   bool
	}{
		{
			name: "Success case 1",
			xCap: 3,
			yCap: 5,
			z:    4,
			expected: []models.Step{
				{Step: 1, BucketX: 0, BucketY: 5, Action: "Fill bucket Y"},
				{Step: 2, BucketX: 3, BucketY: 2, Action: "Transfer from Y to X"},
				{Step: 3, BucketX: 0, BucketY: 2, Action: "Empty bucket X"},
				{Step: 4, BucketX: 2, BucketY: 0, Action: "Transfer from Y to X"},
				{Step: 5, BucketX: 2, BucketY: 5, Action: "Fill bucket Y"},
				{Step: 6, BucketX: 3, BucketY: 4, Action: "Transfer from Y to X"},
			},
			solved: true,
		},
		{
			name: "Success case 2",
			xCap: 2,
			yCap: 10,
			z:    4,
			expected: []models.Step{
				{Step: 1, BucketX: 2, BucketY: 0, Action: "Fill bucket X"},
				{Step: 2, BucketX: 0, BucketY: 2, Action: "Transfer from X to Y"},
				{Step: 3, BucketX: 2, BucketY: 2, Action: "Fill bucket X"},
				{Step: 4, BucketX: 0, BucketY: 4, Action: "Transfer from X to Y"},
			},
			solved: true,
		},
		{
			name:     "No solution - Z is not divisible by GCD(X,Y)",
			xCap:     6,
			yCap:     8,
			z:        5,
			expected: nil,
			solved:   false,
		},
		{
			name:     "No solution - Z is greater than the bucket capacity",
			xCap:     3,
			yCap:     5,
			z:        6,
			expected: nil,
			solved:   false,
		},
		{
			name:     "Zero input values",
			xCap:     0,
			yCap:     5,
			z:        4,
			expected: nil,
			solved:   false,
		},
		{
			name:     "Negative input values",
			xCap:     -3,
			yCap:     5,
			z:        4,
			expected: nil,
			solved:   false,
		},
	}

	for _, tc := range testCases {
		t.Run(tc.name, func(t *testing.T) {
			steps, solved := SolveWaterJug(tc.xCap, tc.yCap, tc.z)

			if solved != tc.solved {
				t.Errorf("For capacities (%d, %d) and target %d, 'solved' was expected to be %v, but got %v", tc.xCap, tc.yCap, tc.z, tc.solved, solved)
			}
			if solved && !reflect.DeepEqual(steps, tc.expected) {
				t.Errorf("For capacities (%d, %d) and target %d, the step sequence %v was expected, but got %v", tc.xCap, tc.yCap, tc.z, tc.expected, steps)
			}
		})
	}
}
