using Microsoft.AspNetCore.Mvc;
using Backend.Models;
using Backend.Services;

namespace Backend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WaterJugController : ControllerBase
    {
        private readonly IWaterJugService _service;

        public WaterJugController(IWaterJugService service)
        {
            _service = service;
        }

        [HttpGet("solve")]
        public IActionResult SolveGet([FromQuery] int x, [FromQuery] int y, [FromQuery] int z)
        {
            if (x <= 0 || y <= 0 || z <= 0)
                return BadRequest(new SolutionResponse
                {
                    SolutionFound = false,
                    Error = "Parameters 'x', 'y', and 'z' must be positive integers."
                });

            var (steps, solved) = _service.SolveWaterJug(x, y, z);

            if (!solved)
                return NotFound(new SolutionResponse
                {
                    SolutionFound = false,
                    Error = "No solution is possible."
                });

            if (steps.Count > 0)
                steps[^1].Status = "Solved";

            return Ok(new SolutionResponse
            {
                SolutionFound = true,
                Steps = steps
            });
        }

        [HttpPost("solve")]
        public IActionResult SolvePost([FromBody] RequestPayload req)
        {
            if (req.x_capacity <= 0 || req.y_capacity <= 0 || req.z_amount_wanted <= 0)
                return BadRequest(new SolutionResponse
                {
                    SolutionFound = false,
                    Error = "Capacity and target amount values must be greater than zero."
                });

            var (steps, solved) = _service.SolveWaterJug(
                req.x_capacity,
                req.y_capacity,
                req.z_amount_wanted
            );

            if (!solved)
                return NotFound(new SolutionResponse
                {
                    SolutionFound = false,
                    Error = "No solution is possible."
                });

            if (steps.Count > 0)
                steps[^1].Status = "Solved";

            return Ok(new SolutionResponse
            {
                SolutionFound = true,
                Steps = steps
            });
        }
    }
}
