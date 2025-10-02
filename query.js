//  Find all books in a specific genre
db.books.find({ genre: "Fantasy" })

// Find books published after a certain year
db.books.find({ published_year: { $gt: 2000 } })

//  Find books by a specific author
db.books.find({ author: "Stephen King" })

// Update the price of a specific book
db.books.updateOne(
  { title: "The Great Gatsby" },
  { $set: { price: 13.99 } }
)

// . Delete a book by its title
db.books.deleteOne({ title: "The Da Vinci Code" })

// advanced queries


//  Find books in stock AND published after 2010
db.books.find({ 
  in_stock: true, 
  published_year: { $gt: 2010 } 
})

//  Use projection to return only specific fields
db.books.find(
  { genre: "Fantasy" },
  { title: 1, author: 1, price: 1, _id: 0 }
)

//  Sorting - Ascending price
db.books.find().sort({ price: 1 })

//  Sorting - Descending price  
db.books.find().sort({ price: -1 })

//  Pagination - Page 1 (books 1-5)
db.books.find().skip(0).limit(5)


// Aggregation Pipeline
//  1. Average price by genre
db.books.aggregate([
  {
    $group: {
      _id: "$genre",
      averagePrice: { $avg: "$price" }
    }
  }
])

// 2. Author with most books
db.books.aggregate([
  {
    $group: {
      _id: "$author",
      bookCount: { $sum: 1 }
    }
  },
  {
    $sort: { bookCount: -1 }
  },
  {
    $limit: 1
  }
])

// 3. Books by publication decade
db.books.aggregate([
  {
    $group: {
      _id: {
        $subtract: [
          "$published_year",
          { $mod: ["$published_year", 10] }
        ]
      },
      bookCount: { $sum: 1 }
    }
  },
  {
    $sort: { _id: 1 }
  }
])

// indexing

// 1. Single index on title
db.books.createIndex({ title: 1 })

// 2. Compound index on author and published_year
db.books.createIndex({ author: 1, published_year: -1 })

// 3. Performance comparison with explain()

// Without index (if no relevant index exists)
db.books.find({ title: "The Hobbit" }).explain("executionStats")

// With index
db.books.find({ title: "The Hobbit" }).explain("executionStats")
