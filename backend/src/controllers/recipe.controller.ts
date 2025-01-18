import { FastifyReply, FastifyRequest } from "fastify";
import { prisma } from "../../prisma";
import { Recipe } from "../types/recipeTypedInstace";

export async function getRecipes(req: FastifyRequest, res: FastifyReply) {
  try {
    const recipes = await prisma.receitas.findMany();
    if (!recipes) {
      return res.status(404).send({ error: "Recipes not found" });
    }
    return res.status(200).send(recipes);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: error });
  }
}

export async function getRecipeByID(req: FastifyRequest, res: FastifyReply) {
  try {
    const { id } = req.params as { id: string };

    if (!id) {
      return res.status(400).send({ error: "Recipe ID is required." });
    }

    const recipe: Recipe | null = await prisma.receitas.findUnique({
      where: {
        id,
      },
    });

    if (!recipe) {
      return res.status(404).send({ error: "Recipe not found." });
    }

    return res.status(200).send(recipe);
  } catch (error) {
    console.error("Error fetching recipe:", error);
    return res
      .status(500)
      .send({ error: "An error occurred while fetching the recipe." });
  }
}

export async function createRecipe(req: FastifyRequest, res: FastifyReply) {
  const { name, ingredients, instructions } = req.body as Recipe;

  if (!name || !ingredients || !instructions) {
    return res
      .status(400)
      .send({ error: "name, ingredients and instructions are required" });
  }

  try {
    const recipe = await prisma.receitas.create({
      data: {
        name,
        ingredients,
        instructions,
      },
    });
    // console.log("recipe created successfully: ", recipe);
    return res.status(201).send(recipe);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: error });
  }
}
