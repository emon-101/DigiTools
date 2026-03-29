import React, { use } from "react";
import Card from "./Card";

const Cards = ({ productsPromise }) => {
  const productsData = use(productsPromise);
  return (
    <div className="w-4/5 mx-auto my-10">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {
            productsData.map(card => <Card key={card.id} card={card} />)
        }
      </div>
    </div>
  );
};

export default Cards;
