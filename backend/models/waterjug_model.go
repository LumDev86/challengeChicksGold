package models

// RequestPayload defines the structure for the input data
// of a POST request.
type RequestPayload struct {
	XCapacity int `json:"x_capacity"`
	YCapacity int `json:"y_capacity"`
	ZAmount   int `json:"z_amount_wanted"`
}

// Step represents a step in the puzzle solution.
type Step struct {
	Step    int    `json:"step"`
	BucketX int    `json:"bucketX"`
	BucketY int    `json:"bucketY"`
	Action  string `json:"action"`
	Status  string `json:"status,omitempty"`
}

// SolutionResponse defines the structure of the JSON response for the client.
type SolutionResponse struct {
	SolutionFound bool   `json:"solution_found"`
	Steps         []Step `json:"steps,omitempty"`
	Error         string `json:"error,omitempty"`
}
