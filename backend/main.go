package main

import (
	"log"
	"water-jug-challenge/controllers"

	"github.com/gin-gonic/gin"
)

func setupRouter() *gin.Engine {
	r := gin.Default()

	// Ruta GET (con parámetros de consulta)
	r.GET("/solve", controllers.SolveGetHandler)

	// Ruta POST (con cuerpo JSON)
	r.POST("/solve", controllers.SolvePostHandler)

	return r
}

func main() {
	r := setupRouter()
	log.Println("🚀 Servidor corriendo en http://localhost:8080")
	r.Run(":8080")
}
