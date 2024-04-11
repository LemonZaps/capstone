import React from "react";

const Card = () => {
    const food = [
        {
            name: "Greek Salad",
            description: "The famous Greek salad of crispy lettuce, peppers, olives, and our Chicago style feta cheese garnished with crunchy garlic and rosemary croutons",
            price: "12.99",
            image: '/greekSalad.jpg',  // Referenced directly from the public folder
            id: 1,
        },
        {
            name: "Bruschetta",
            description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil",
            price: "5.99",
            image: '/bruschetta.jpg',  // Referenced directly from the public folder
            id: 2,
        },
        {
            name: "Lemon Dessert",
            description: "This comes straight from grandma's recipe book. Every last ingredient has been sourced and is as authentic as can be imagined.",
            price: "5.00",
            image: '/lemonDessert.jpg',  // Referenced directly from the public folder
            id: 3,
        }
    ];

    return (
        <div id="card-group">
            {food.map(item => (
                <div id="card" key={item.id}>
                    <img id="card-image" src={item.image} alt={item.name} />
                    <h3>{item.name}</h3>
                    <p className="description-text">{item.description}</p>
                    <p>Price: ${item.price}</p>

                </div>
            ))}
        </div>
    );
}

export default Card;
