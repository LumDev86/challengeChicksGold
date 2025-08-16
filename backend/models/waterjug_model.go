package models

type RequestPayload struct {
	XCapacity int `json:"x_capacity"`
	YCapacity int `json:"y_capacity"`
	ZAmount   int `json:"z_amount_wanted"`
}

type Step struct {
	Step    int    `json:"step"`
	BucketX int    `json:"bucketX"`
	BucketY int    `json:"bucketY"`
	Action  string `json:"action"`
	Status  string `json:"status,omitempty"`
}

type SolutionResponse struct {
	SolutionFound bool   `json:"solution_found"`
	Steps         []Step `json:"steps,omitempty"`
	Error         string `json:"error,omitempty"`
}
