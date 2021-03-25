import { Router } from "express";

import { CategoriesRepository } from "../repositories/CategoriesRepository";

const categoriesRoutes = Router();

const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (request, response) => {
  const { name, description } = request.body;

  console.log(request.body.name, request.body.description);

  categoriesRepository.create({ name, description });

  return response.status(201).send();
});

categoriesRoutes.get("/", (request, response) => {
  const all = categoriesRepository.list();

  return response.json(all);
});

export { categoriesRoutes };
