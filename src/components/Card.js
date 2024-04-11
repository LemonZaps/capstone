import React from "react";

const Card = () => {
    const food = [{
        name: "Greek Salad",
        description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese garnished with crunchy garlic and rosemary croutons",
        price: "12.99",
        id: 1,
    },
    {
        name: "Bruschetta",
        description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil",
        price: "5.99",
        id: 2,
    },
    {
        name: "Lemon Dessert",
        description: "This comes straight from grandmas recipe book. every last ingredient has been sourced and is authentic as can be imagined.",
        price: "5.00",
        id: 3,
    }];

    return (
//add photos and map over objects to create the info for the cards

        <p>{food[0].name}</p>
    );
}

export default Card;
