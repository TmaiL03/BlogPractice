const mongoose = require("mongoose");
const marked = require("marked");
const slugify = require("slugify");

const articleSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true
    },

    description: {
        type: String
    },

    markdown: {
        type: String,
        required: true
    },

    createdAt: {
        type: Date,
        default: Date.now()
    },

    slug: {
        type: String,
        required: true,
        // Ensures that each slug (URL extension) is unique.
        unique: true
    }

});

// Runs the following validation prior to rendering any CRUD operations.
articleSchema.pre("validate", function() {

    if(this.title) {

        // lower specifies that the slug will be lowercase,
        // strict specifies that the slug will not contain any special/invalid characters
        this.slug = slugify(this.title, {lower: true, strict: true})
    }

})

// Exports the model schema.
module.exports = mongoose.model("Article", articleSchema);