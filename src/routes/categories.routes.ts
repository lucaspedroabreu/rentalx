import { Router } from "express";

import { CategoriesRepository } from "../repositories/CategoriesRepository";
import { CreateCategoryService } from "../services/CreateCategoryService";

const routes = Router();
const categoriesRepository = new CategoriesRepository();

routes.post("/", (request, response) => {
    const { name, description } = request.body;

    const createCategoryService = new CreateCategoryService( categoriesRepository );
    createCategoryService.execute({ name, description });

    return response.status(201).send();
});

routes.get("/", (_request, response) => {
    const allCategories = categoriesRepository.listCategories();

    return response.json(allCategories);
});

export { routes as categoriesRoutes };
