//Create a new collection.
db.createCollection("Assignment");

//Removes a collection from the database.
db.Assignment.drop();

//
db.Assignment.insertOne({
    name:"Sazzad Hossain Emon"
})

//Delete/remove a single document from the collection.
db.Assignment.deleteOne({
    name:"Sazzad Hossain Emon"
});