import {Auth} from "../auth/auth.resolver";
import {KrlfOrdersResolver} from "../krlfOrders/krlf-orders-resolver.resolver";
import {KrlfProductsResolver} from "../krlfProducts/krlf-products-resolver.resolver";
import {Router} from "express";

const routes = Router();

routes.get("/products", new KrlfProductsResolver().findMany);
routes.get("/product/:id", new KrlfProductsResolver().findUnique);
routes.post("/products", new KrlfProductsResolver().create);
routes.put("/productUpdate/:id", new KrlfProductsResolver().update);
routes.delete("/productDelete/:id", new KrlfProductsResolver().delete);

routes.get("/orders", new KrlfOrdersResolver().findMany);
routes.get("/order/:id", new KrlfOrdersResolver().findUnique);
routes.post("/orders", new KrlfOrdersResolver().create);
routes.put("/orderUpdate/:id", new KrlfOrdersResolver().update);
routes.delete("/orderDelete/:id", new KrlfOrdersResolver().delete);

routes.post("/auth", new Auth().auth);

export default routes;
