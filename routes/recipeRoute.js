const express = require("express")
const recipeRouter = express.Router()

recipeRouter.post("/recipe", async (req, res) => {

    try {
        let product = await Recipe.create(req.body)
        res.status(200).send({ success: true, message: "Recipe Created", product: product })

    } catch (error) {
        res.status(400).send({ status: false, message: error.message })
    }


})

recipeRouter.get("/recipe", async (req, res) => {
    try {
        let recipes = await Recipe.find({});
        res.status(200).send({ status: true, message: "Recipes Listed", recipes: recipes });
    } catch (error) {
        res.status(400).send({ status: false, message: error.message });
    }
});




recipeRouter.get("/recipe/:id", async (req, res) => {
    try {
        const id = req.params.id
        let recipe = await Recipe.findById(id)
        res.status(200).send({ status: true, message: "Recipe", recipe: recipe })
    } catch (error) {
        res.status(400).send({ status: false, message: error.message });

    }
})

recipeRouter.put("/recipe/:id", async (req, res) => {
    try {
        const id = req.params.id;
        let recipe = await Recipe.findByIdAndUpdate(id, req.body, { new: true });
        if (!recipe) {
            return res.status(404).send({ status: false, message: "Recipe not found" });
        }
        res.status(200).send({ status: true, message: "Recipe Updated", recipe: recipe });
    } catch (error) {
        res.status(400).send({ status: false, message: error.message });
    }
});

recipeRouter.delete("/recipe", async (req, res) => {
    try {
        let { id } = req.body
        let recipe = await Recipe.findByIdAndDelete(id)
        if (!recipe) {
           return res.status(404).send({ status: false, message: "Recipe not found" })
        }
        res.status(200).send({ status: true, message: "Recipe Deleted" })

    } catch (error) {
        res.status(400).send({ status: false, message: error.message });

    }

})













module.exports = recipeRouter