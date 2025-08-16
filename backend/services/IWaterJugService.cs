using Backend.Models;

namespace Backend.Services
{
    public interface IWaterJugService
    {
        (List<Step> Steps, bool Solved) SolveWaterJug(int xCap, int yCap, int z);
    }
}
