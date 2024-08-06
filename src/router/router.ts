import {KrlfProductsResolver} from "../krlfProducts/krlf-products-resolver.resolver";
import {Router} from "express";

const routes = Router();

routes.get("/products", new KrlfProductsResolver().findMany);
routes.get("/product/:id", new KrlfProductsResolver().findUnique);
routes.post("/products", new KrlfProductsResolver().create);
routes.put("/productUpdate/:id", new KrlfProductsResolver().update);
routes.delete("/productDelete/:id", new KrlfProductsResolver().delete);

export default routes;
