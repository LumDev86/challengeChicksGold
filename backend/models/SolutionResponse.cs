namespace Backend.Models
{
    public class SolutionResponse
    {
        public bool SolutionFound { get; set; }
        public List<Step>? Steps { get; set; }
        public string? Error { get; set; }
    }
}
