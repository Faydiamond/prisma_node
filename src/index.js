import  express  from 'express'
import productsRoutes from "./routes/products.routes.js";
import categorisRoutes from "./routes/categories.routes.js";

const app = express()
app.use(express.json())





app.use("/api", productsRoutes);
app.use("/api", categorisRoutes);

app.listen(3001)
console.log("Corriendo por el server ",3001);
