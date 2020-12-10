import mongoose from "mongoose";

mongoose.connect('mongodb://localhost:/react-graphql', {
    useNewUrlParser:true,
    useFindAndModify: true,
    useUnifiedTopology:true
}). then(() => {
    console.log(`Mongodb is on`)
}).catch((err) => {
    console.error(err);
});   