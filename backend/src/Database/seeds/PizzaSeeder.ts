import "dotenv/config";

import { DataSource } from "typeorm";
import { Seeder, SeederFactoryManager } from "typeorm-extension";
import Pizza from "../Entities/Pizza";

const { BASE_URL = "http://localhost:3001" } = process.env;

export class PizzaSeeder implements Seeder {
  async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager
  ): Promise<void> {
    const pizzaRepository = dataSource.getRepository(Pizza);

    const pizzaData = [
      {
        flavor: "Four Cheese Deluxe",
        type: "Savory",
        price: 29.50,
        ingredients: [
          "Mozzarella Cheese",
          "Cream Cheese",
          "Gorgonzola",
          "Oregano",
          "Grated Parmesan",
        ],
        img: "https://user-images.githubusercontent.com/99993116/236544304-ff0c773f-dbd7-44c8-81a4-85497d5ccb54.jpg",
      },
      {
        flavor: "Pepperoni Feast",
        type: "Savory",
        price: 30.00,
        ingredients: ["Cheese", "Spicy Pepperoni", "Onions", "Oregano"],
        img: "https://user-images.githubusercontent.com/99993116/236544471-fe3c3da3-fff2-4e94-a365-01fedc27dfc8.jpg",
      },
      {
        flavor: "Classic Pepperoni",
        type: "Savory",
        price: 29.90,
        ingredients: ["Cheese", "Oregano", "Pepperoni"],
        img: "https://user-images.githubusercontent.com/99993116/236544602-c4ea81bd-ac4f-45f6-9a93-d84781c355b9.jpg",
      },
      {
        flavor: "Supreme Veggie & Egg Special",
        type: "Savory",
        price: 33.90,
        ingredients: ["Tomato Sauce", "Mozzarella", "Ham", "Eggs", "Onions", "Olives", "Bell Peppers"],
        img: "https://user-images.githubusercontent.com/99993116/236544754-fcee4f76-8ce6-4401-8585-bc41c0713756.png",
      },
      {
        flavor: "Chicken Tikka Special",
        type: "Savory",
        price: 31.90,
        ingredients: ["Shredded Chicken", "Creamy Cheese", "Onions", "Sweet Corn"],
        img: "https://user-images.githubusercontent.com/99993116/236544904-37e65c3f-6fa9-4336-8838-9559929414ff.png",
      },
      {
        flavor: "Classic Margherita",
        type: "Savory",
        price: 28.90,
        ingredients: ["Cheese", "Fresh Tomato", "Oregano", "Grated Parmesan"],
        img: "https://user-images.githubusercontent.com/99993116/236545036-4866e4af-de60-4b8b-8ecd-6477452adc93.jpg",
      },
      {
        flavor: "Chocolate Coconut Delight",
        type: "Sweet",
        price: 30.50,
        ingredients: [
          "Rich Chocolate",
          "Shredded Coconut",
          "Condensed Milk",
          "Cherries",
        ],
        img: "https://user-images.githubusercontent.com/99993116/236545424-582342ac-b285-4648-a4f6-b0e681d6be44.jpg",
      },
      {
        flavor: "Choco Strawberry Supreme",
        type: "Sweet",
        price: 29.00,
        ingredients: ["Artisan Chocolate", "Fresh Strawberries", "Condensed Milk"],
        img: "https://user-images.githubusercontent.com/99993116/236545643-59cd6cc4-c19c-4865-bc3b-5486f5b93fdd.jpg",
      },
      {
        flavor: "Chocolate Truffle Crunch",
        type: "Sweet",
        price: 31.90,
        ingredients: [
          "Mozzarella",
          "Milk Chocolate",
          "Chocolate Truffle Chunks",
        ],
        img: "https://user-images.githubusercontent.com/99993116/236545841-84ee5fa3-42f6-4b5c-b795-5ac64c519c97.jpg",
      },
    ];

    await pizzaRepository
      .createQueryBuilder()
      .insert()
      .into(Pizza)
      .values(pizzaData)
      .execute();

    await pizzaRepository.save(pizzaData);
  }
}
