const { Schema } = require("mongoose");

module.exports = mongoose => {
    const Tutorial = mongoose.model(
        "tutorial",
        mongoose.Schema({
            title: String,
            description: String,
            published: Boolean
        }, { timestamps: true })
    );

    // mudar o nome da variaveis da Tabela
    Schema.method("toJSON", function() {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });


    const Tutorial = mongoose.model("tutorial", schema);
    return Tutorial;
};