import React, { useState } from "react";
import productsData from "./services/products";
import categoriesData from "./services/categories";
import ProductList from "./components/ProductList";
import SearchBar from "./components/SearchBar";
import CategoryFilter from "./components/CategoryFilter";

// Import CSS
import './App.css';

const App = () => {
  const [filteredProducts, setFilteredProducts] = useState(productsData);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
    filterProducts(query, selectedCategory);
  };

  const handleFilter = (category) => {
    setSelectedCategory(category);
    filterProducts(searchQuery, category);
  };

  const filterProducts = (query, category) => {
    let products = productsData;

    // Filter by search query
    if (query) {
      products = products.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase())
      );
    }

    // Filter by category
    if (category) {
      products = products.filter((product) => product.category === category);
    }

    setFilteredProducts(products);
  };

  return (
    <div>
      <h1>HP Store</h1>
      <SearchBar onSearch={handleSearch} />
      <CategoryFilter categories={categoriesData} onFilter={handleFilter} />
      <ProductList products={filteredProducts} />
    </div>
  );
};

export default App;
