import multer from "multer";
import {Auth} from "../auth/auth.resolver";
import {KrlfOrdersResolver} from "../krlfOrders/krlf-orders-resolver.resolver";
import {KrlfProductsResolver} from "../krlfProducts/krlf-products-resolver.resolver";
import {Router} from "express";
import { KrlfCategoryResolver } from "../krlfCategorys/krlf-orders-resolver.resolver";

const routes = Router();
const upload = multer();

routes.get("/products", new KrlfProductsResolver().findMany);
routes.get("/product/:id", new KrlfProductsResolver().findUnique);
routes.post(
  "/products",
  upload.single("file"),
  new KrlfProductsResolver().create
);
routes.put("/productUpdate/:id", new KrlfProductsResolver().update);
routes.delete("/productDelete/:id", new KrlfProductsResolver().delete);

routes.get("/orders", new KrlfOrdersResolver().findMany);
routes.get("/order/:id", new KrlfOrdersResolver().findUnique);
routes.post("/orders", new KrlfOrdersResolver().create);
routes.put("/orderUpdate/:id", new KrlfOrdersResolver().update);
routes.delete("/orderDelete/:id", new KrlfOrdersResolver().delete);

routes.get("/categorys", new KrlfCategoryResolver().findMany);
routes.get("/category/:id", new KrlfCategoryResolver().findUnique);
routes.post("/categorys", new KrlfCategoryResolver().create);
routes.put("/categoryUpdate/:id", new KrlfCategoryResolver().update);
routes.delete("/categoryDelete/:id", new KrlfCategoryResolver().delete);

routes.post("/auth", new Auth().auth);
routes.post("/createUser", new Auth().createUser);
routes.get("/authVerify", new Auth().verifyToken);


export default routes;
