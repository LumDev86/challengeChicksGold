using Backend.Models;

namespace Backend.Services
{
    public class WaterJugService : IWaterJugService
    {
        public (List<Step> Steps, bool Solved) SolveWaterJug(int xCap, int yCap, int z)
        {
            if (xCap <= 0 || yCap <= 0 || z <= 0 || z > Math.Max(xCap, yCap))
                return (new List<Step>(), false);

            if (z % Gcd(xCap, yCap) != 0)
                return (new List<Step>(), false);

            var visited = new HashSet<(int, int)>();
            var queue = new Queue<(int x, int y, List<Step> trace)>();
            queue.Enqueue((0, 0, new List<Step>()));

            while (queue.Count > 0)
            {
                var (x, y, trace) = queue.Dequeue();

                if (visited.Contains((x, y))) continue;
                visited.Add((x, y));

                if (x == z || y == z)
                    return (trace, true);

                var nextStates = new List<(int, int, string)>
                {
                    (xCap, y, "Fill bucket X"),
                    (x, yCap, "Fill bucket Y"),
                    (0, y, "Empty bucket X"),
                    (x, 0, "Empty bucket Y")
                };

                int transferXY = Math.Min(x, yCap - y);
                nextStates.Add((x - transferXY, y + transferXY, "Transfer from X to Y"));

                int transferYX = Math.Min(y, xCap - x);
                nextStates.Add((x + transferYX, y - transferYX, "Transfer from Y to X"));

                foreach (var ns in nextStates)
                {
                    var newTrace = new List<Step>(trace); // copiar pasos previos

                    newTrace.Add(new Step
                    {
                        StepNumber = newTrace.Count + 1,
                        BucketX = ns.Item1,
                        BucketY = ns.Item2,
                        Action = ns.Item3
                    });

                    queue.Enqueue((ns.Item1, ns.Item2, newTrace));
                }
            }

            return (new List<Step>(), false);
        }

        private int Gcd(int a, int b)
        {
            while (b != 0)
            {
                int temp = b;
                b = a % b;
                a = temp;
            }
            return a;
        }
    }
}

