import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Filter from './components/Filter';
import ProductList from './components/ProductList';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [isFilterVisible, setFilterVisible] = useState(false);
  const [filters, setFilters] = useState({
    men: true,
    women: true,
    kids: true,
  });

  return (
    <div className="App">
      <Navbar />
      <Header />
      <Filter
        isFilterVisible={isFilterVisible}
        setFilterVisible={setFilterVisible}
        filters={filters}
        setFilters={setFilters}
      />
      <ProductList />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
