# Week 3 (MongoDB Queries)

:::tip

Last week we considered how we could use NodeJS and the packages Express and ejs to construct the view layer of a data driven application. This week we will be continuing our journey by moving on to explore, the powers of the MongoDB data model.

[To assist us in gaining a better understanding of the powers of MongoDB, we are going to revisit our wine tasting dataset](https://www.kaggle.com/zynicide/wine-reviews).

For those of you that have explored this data set you would have observed some interesting properties. First, there are around 20k tastings with no attributed taster. Second, although there are ~130k records, there are only ~20 wine tasters - they've been busy! Observations such as this can be helpful in determining the utility of a data set.
:::

### Task 0 - Windows Path Setting

If you are using windows, now is a good time to add the MongoDB folder as an environment variable. Further to this, you should also install the MongoDB Tools.

- [There is a good stack overflow answer that you can read here](https://stackoverflow.com/questions/31055637/getting-mongoimport-is-not-recognized-as-an-internal-or-external-command-ope)

- You will need to download [MongoDB Tools](https://www.mongodb.com/try/download/database-tools)
- Extract the zip file and move the contents to `C:\Program Files\MongoDB\Server\4.4\bin\`

<!-- ## Importing Data

When it comes to importing data we have a few options here.

### The MongoDB command line importer

The mongoimport command line tool is distributed with MongoDB and allows us to import data into our local MongoDB instance. The command looks like this:


```js
mongoimport --db=wine  --collection=tastings --file="wine.json" --jsonArray
```
The above command is fairly self explanatory; however, it is worth noting, if the database, "wine", does not exist it will automatically be created for us. Furthermore, the --jsonArray flag is needed as the the wine.json file contains and array of JSON elements. Finally, notice how we have used a singular name for the database and a plural for the collection - this is a common naming convention. -->

## Task 1 - Setting Up our Sample Application

For the rest of this unit, I will be providing you with a sample application which builds on our wine tasting dataset. I intend to ensure you are all starting with the same code base and will provide you with an up-to-date version the application each week. To get started this week: `git clone  https://github.com/joeappleton18/db-starter-project`

- [Check the README.md instructions on the starter project to get started. This will tell you how to set everything up this week](https://github.com/joeappleton18/db-starter-project).

- You'll notice, in the `README.md` instructions, you will need to seed the database and rename the ".env.example" file to ".env". Further to this, you will also need to run the database seeder.

- You should take a look at the seeder.js file and ensure you have an idea how it works. Using a small side utility to seed a database is common.

## Considering the Current Data Shape

Currently each document in our "tastings" collection looks, along the lines of, this:

```json
{
  "_id": ObjectId("5f88b504513221bee048d3dd"),
  "points": "87",
  "title": "Nicosia 2013 Vulkà Bianco  (Etna)",
  "description": "Aromas include tropical fruit, broom, brimstone and dried herb. The palate isn't overly expressive, offering unripened apple, citrus and dried sage alongside brisk acidity.",
  "taster_name": "Kerin O’Keefe",
  "taster_twitter_handle": "@kerinokeefe",
  "price": null,
  "designation": "Vulkà Bianco",
  "variety": "White Blend",
  "region_1": "Etna",
  "region_2": null,
  "province": "Sicily & Sardinia",
  "country": "Italy",
  "winery": "Nicosia"
}
```

> > A single document from the tastings collection. Notice how MongoDB takes care of auto generating an ID for us.

## Read

To get you all started, let's explore some basic read operations that we might want to run on our collection.

Access on of the following: 

- The MongoDB command line (for your home computer)
- The query runner that is in your starter project (`query-runner.js `)
- A MongoDB for VSCode Playground (recommend for university computers)
  


Run the following:

```js
use wine
```

```js
db.tastings.find({});
```

Running the above command will return the first 20 records that match the query and a cursor to the remaining records. You'll notice in the command shell it will prompt you to 'type "it"' for more records.

### Further refining our query

Notice, above, how we passed into find what appears to be an empty object literal - `{}`. We can add name value pairings to this object to filter our results. Here are some basic examples:

- **`db.tastings.find({country: "Italy" })`** returns all wine tastings from Italy
- **`db.tastings.find({country: "Italy", price: {$lt:10}})`** returns all wine tastings from Italy where the price of the wine is less than 10

For a full list of operations you should read the [documentation](https://docs.mongodb.com/manual/reference/operator/query/). However, here is a slightly more interesting example:

**`db.tastings.find({$or: [{country: 'France'}, {country: 'Italy'}]})`** returns all wine tastings from Italy **or** France. We can also use the logical operators **`$not, $and, $nor`**.

### Mongo allows us to append further operations to a given query

As mentioned, when we execute a query MongoDb returns a cursor. A cursor has a whole suite of methods that we can run to further refine our data.

Below are some useful methods, for a complete list of, what are know as cursor methods, [check the documentation](https://docs.mongodb.com/manual/reference/method/js-cursor/):

- **`db.tastings.find({}).count()`** returns the total number of records matching that query

- **`db.tastings.find({}).limit(1)`** limits the amount of records contained in the cursor's result set

- **`db.tastings.find({}).pretty()`** displays the results in an easy to read format

- **`db.tastings.find({price: {$ne: null}}).sort({price: 1})`** Sorts the results in price order. `price: 1` tells MongoDB to display the results in ascending (increasing) order by price. `price: -1`, if you are feeling flush, displays the results in descending price order.

## Task 2 - Reading Data

Use the notes above, and the [MongoDB documentation](https://docs.mongodb.com/) to answer the following questions (you should aim to do so efficiently as possible):

- How many records, in total, are there in the entire tastings collection?

- How many wine records exist that originated from Italy where the price is greater than 80?

  - List the results in descending order, so you can see the most expensive bottle of wine first.

- How many wine records exist that originated from France or Italy, where the price is greater than 60?

**Did you fly through these tasks! Here are some more advanced, optional, questions**

- Can you use the [aggregation pipeline](https://docs.mongodb.com/manual/reference/operator/aggregation/group/#pipe._S_group) to determine the name of each wine taster and the count of the total tastings they have conducted?

- How many different regions are there?

- Can you work out the wine which has been tasted the most? I think it is "Gloria Ferrer NV Sonoma Brut Sparkling (Sonoma County)" which has been tasted 11 times.

## Updating and Writing Data

Updating and writing data is very simple. For instance, we can simply run the following operation:

```js
db.tastings.insertOne({
  title: "Toro Loco",
  taster_name: "Joe Appleton",
  taster_twitter_handle: "@joeappleton18",
  price: 10,
  designation: "Vulkà Bianco",
  variety: "White Blend",
  region_1: "Etna",
});
```

> > FYI, Toro Loco is a very affordable wine from Aldi - I recommend it!

Let's assume the price changes on our bottle of Toro Loco to 20. We could update the record using the following command:

```js
db.tastings.updateOne({ title: "Toro Loco" }, [{ $set: { price: 20 } }]);
```

The first part of the above command is our query - `{title: "Toro Loco"}`. The second, is the operations that we want to run on the record that our query returns - `[{ $set: { price: 20 } }]`

The above command will update the first record it finds! However, what if there are lots of tastings of ToroLoco. This means our data, while usable, is not exactly optimised. Data optimisation is something that we will look at later. For now, you just need to know that you can update multiple records:

```js
db.tastings.updateMany({ title: "Toro Loco" }, [{ $set: { price: 20 } }]);
```

We can also unset document properties:

```js
db.tastings.updateMany({ title: "Toro Loco" }, { $unset: { price: "" } });
```

The above query removes the price property from our Toro Loco documents.

A further useful operation is constructing new properties using other properties on the existing record:

```js
db.tastings.updateMany({ title: "Toro Loco" }, [
  { $set: { oldPrice: "$price", price: 30 } },
]);
```

The above query sets the value of the current to "oldPrice", then updates the price to 30.

## Task 3 - Updating Data

This, final task, starts off by getting you to perform simple update operations and moves on to more complex ones. We can use update operations to clean our data.

- Can you update the price "Gloria Ferrer NV Sonoma Brut Sparkling (Sonoma County)" to 11?

- Can you figure out how to to move regions to an embedded array on each document in the tastings collection. After completion, you records should all look like this:

```js
{
    title: 'Toro Loco',
    regions: ['Etna', 'France']
}
```

## Advanced Tasks

- Can you figure out how to use the [aggregation pipeline](https://docs.mongodb.com/manual/reference/operator/aggregation/group/#pipe._S_group) to output the details of each wine taster (e.g. name, twitter handle and number of tastings) to a new collection called tasters - this will take a little bit of research.

- Finally, continue to explore our data set and run some more advanced queries that will further clean the data
