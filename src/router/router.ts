import {KrlfProductsResolver} from "../krlfProducts/krlf-products-resolver.resolver";
import {Router} from "express";

const routes = Router();

routes.get("/products", new KrlfProductsResolver().findMany);

export default routes;
