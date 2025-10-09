import React from "react";
import "./searchCard.scss";

function SearchCard({ filteredProducts }) {
 
  return (
    <div className="search-card">
      {filteredProducts.map((product) => (
        <div key={product.id} className="search-item">
          <div>
            <h6>{product.title}</h6>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SearchCard;
