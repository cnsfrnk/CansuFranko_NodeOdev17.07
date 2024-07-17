const { default: mongoose } = require("mongoose")

const recipeSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, "Name is required!"],
    },
    ingredients: {
        type: String,
        required: [true, "Ingredients are required!"],
    },
    recipe: {
        type: String,
        required: [true, "Recipe is required!"],
    },
    servings: {
        type: Number,
        required: [true, "Serving size is required!"],
    },
    image: {
        type: String,
        required: [true, "Image URL is required!"],
    },
})

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe 
