package services

import "water-jug-challenge/models"

func SolveWaterJug(xCap, yCap, z int) ([]models.Step, bool) {

	if xCap <= 0 || yCap <= 0 || z <= 0 || z > max(xCap, yCap) {
		return nil, false
	}

	if z%gcd(xCap, yCap) != 0 {
		return nil, false
	}

	type State struct {
		x, y  int
		trace []models.Step
	}

	visited := make(map[[2]int]bool)
	queue := []State{{x: 0, y: 0, trace: []models.Step{}}}

	for len(queue) > 0 {
		curr := queue[0]
		queue = queue[1:]

		if visited[[2]int{curr.x, curr.y}] {
			continue
		}
		visited[[2]int{curr.x, curr.y}] = true

		if curr.x == z || curr.y == z {
			return curr.trace, true
		}

		nextStates := []struct {
			x, y   int
			action string
		}{
			{xCap, curr.y, "Fill bucket X"},
			{curr.x, yCap, "Fill bucket Y"},
			{0, curr.y, "Empty bucket X"},
			{curr.x, 0, "Empty bucket Y"},
		}

		transferXY := min(curr.x, yCap-curr.y)
		nextStates = append(nextStates, struct {
			x, y   int
			action string
		}{curr.x - transferXY, curr.y + transferXY, "Transfer from X to Y"})

		transferYX := min(curr.y, xCap-curr.x)
		nextStates = append(nextStates, struct {
			x, y   int
			action string
		}{curr.x + transferYX, curr.y - transferYX, "Transfer from Y to X"})

		for _, ns := range nextStates {

			newTrace := append([]models.Step{}, curr.trace...)
			newTrace = append(newTrace, models.Step{
				Step:    len(newTrace) + 1,
				BucketX: ns.x,
				BucketY: ns.y,
				Action:  ns.action,
			})
			queue = append(queue, State{x: ns.x, y: ns.y, trace: newTrace})
		}
	}

	return nil, false
}

func gcd(a, b int) int {
	for b != 0 {
		a, b = b, a%b
	}
	return a
}

func min(a, b int) int {
	if a < b {
		return a
	}
	return b
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}
