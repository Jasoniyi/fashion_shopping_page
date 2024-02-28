import React from "react";
import { UseShop } from "../../context/ShopContext";
import Card from "../Card/Card";

const showMobileProducts = () => {
  const { currentPage, currentProducts, productsPerPage, paginate } = UseShop();
  return (
    <div>
      <div className="grid grid-cols-1 gap-y-8 justify-items-center">
        {currentProducts !== undefined
          ? currentProducts.map((pdct, i) => (
              <Card
                image={`${pdct.image}`}
                title={pdct.title}
                price={pdct.price}
                key={`showProducts-${i}`}
                showWishlist={true}
                width={350}
                height={150}
                loaderWidth="md:w-[22em] w-[100%] "
              />
            ))
          : null}
      </div>
    </div>
  );
};

export default showMobileProducts;
