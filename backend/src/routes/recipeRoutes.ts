import z, { string } from "zod";
import { FastifyTypedInstance } from "../types/fastifyTypedInstance";
import { randomUUID } from "node:crypto";
import { Recipe } from "../types/recipeTypedInstace";
import {
  createRecipe,
  getRecipeByID,
  getRecipes,
} from "../controllers/recipe.controller";

const recipe: Recipe[] = [];

export async function recipeRoutes(app: FastifyTypedInstance) {
  app.get(
    "/recipe",
    {
      schema: {
        tags: ["recipe"],
        description: "Get a list of all recipes",
        response: {
          200: z.array(
            z.object({
              id: z.string(),
              name: z.string(),
              ingredients: z.array(z.string()),
              instructions: z.string(),
            })
          ),
        },
      },
    },
    getRecipes
  );
  app.get(
    "/recipe/:id",
    {
      schema: {
        tags: ["recipe"],
        description: "List recipe filtered by id",
        response: {
          200: z
            .object({
              id: z.string(),
              name: z.string(),
              ingredients: z.array(z.string()),
              instructions: z.string(),
            })
            .describe("Recipe found"),
        },
      },
    },
    getRecipeByID
  );
  app.post(
    "/recipe",
    {
      schema: {
        tags: ["recipe"],
        description: "Create/Post a recipe",
        body: z.object({
          name: z.string(),
          instructions: z.string(),
          ingredients: z.array(z.string()),
        }),
        response: {
          201: z
            .object({
              id: z.string(),
              name: z.string(),
              ingredients: z.array(z.string()),
              instructions: z.string(),
            })
            .describe("Recipe created successfully"),
        },
      },
    },
    createRecipe
  );
}
