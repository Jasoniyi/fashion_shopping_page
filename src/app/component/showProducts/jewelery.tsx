import React, { useEffect } from "react";
import { JewelryDataType } from "./ShowProducts";
import Card from "../Card/Card";

type JewelryProps = {
  jewelryData: JewelryDataType[];
};

const Jewelery = ({ jewelryData }: JewelryProps) => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 justify-items-center">
        {jewelryData.map((product, i) => (
          <Card
            title={product.title}
            price={product.price}
            image={product.image}
            width={250}
            height={50}
            key={`jewelery-${i}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Jewelery;
