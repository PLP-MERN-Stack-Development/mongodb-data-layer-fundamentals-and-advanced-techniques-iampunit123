# PLP Bookstore MongoDB Assignment

## 📚 Project Overview
This project demonstrates MongoDB fundamentals including database setup, CRUD operations, advanced queries, aggregation pipelines, and indexing for performance optimization.

## 🛠️ Setup Instructions

### Prerequisites
- MongoDB installed locally OR MongoDB Atlas account
- MongoDB Shell (mongosh) or MongoDB Compass

### Step 1: Database Setup
```bash
# Start MongoDB service (if using local installation)
mongod

# Connect to MongoDB shell
mongosh
```

### Step 2: Create Database and Collection
```javascript
// Switch to plp_bookstore database
use plp_bookstore

// Create books collection
db.createCollection("books")
```

### Step 3: Insert Sample Data
**Option A - MongoDB Shell:**
```bash
# Load the insert script
load("insert_books.js")
```

**Option B - MongoDB Compass:**
1. Open MongoDB Compass
2. Connect to your database
3. Navigate to plp_bookstore database
4. Open books collection
5. Click "Add Data" → "Insert Document"
6. Paste content from `insert_books.js`

**Option C - MongoDB Atlas:**
1. Go to your Atlas cluster
2. Click "Collections"
3. Select plp_bookstore database
4. Click "Insert Document" in books collection
5. Paste the documents from `insert_books.js`

### Step 4: Execute Queries
Run the queries from `queries.js` in your preferred MongoDB interface:

**MongoDB Shell:**
```bash
# Execute individual queries by copying from queries.js
# Or load the entire file
load("queries.js")
```

**MongoDB Compass/Atlas:**
- Copy and paste individual queries into the query bar
- Execute each query to see results

## 📁 File Structure
```
.
├── insert_books.js     # Sample book data insertion script
├── queries.js          # All MongoDB queries for the assignment
├── README.md           # This documentation file
└── screenshot.png      # Proof of database setup and sample data
```

## 📊 Query Categories

### Basic CRUD Operations
- Find books by genre, author, publication year
- Update book prices
- Delete books by title

### Advanced Queries
- Complex filtering with multiple conditions
- Field projection for optimized responses
- Sorting and pagination

### Aggregation Pipelines
- Average price calculation by genre
- Author with most books analysis
- Publication decade grouping

### Performance Optimization
- Single and compound indexes
- Query performance analysis with explain()

## 🎯 Learning Objectives
- ✅ MongoDB database and collection creation
- ✅ CRUD operations implementation
- ✅ Advanced querying with filtering and projection
- ✅ Aggregation pipeline development
- ✅ Indexing for performance optimization
- ✅ Query performance analysis

## 📝 Notes
- All queries are tested and working in MongoDB 6.0+
- Scripts are compatible with both local MongoDB and MongoDB Atlas
- Remember to take screenshots of your database with sample data for submission

## 🔧 Troubleshooting
- Ensure MongoDB service is running (for local installations)
- Check your connection string (for Atlas)
- Verify database and collection names match exactly
- Use `db.books.find()` to confirm data insertion

## 📞 Support
If you encounter any issues, please check:
1. MongoDB connection is active
2. Database and collection names are correct
3. All required fields are present in documents
4. Queries are properly formatted with correct syntax

---

**Happy Coding! 🚀** 