import { DataSource } from "typeorm";
import { Seeder, SeederFactoryManager } from "typeorm-extension";
import Pizza from "../Entities/Pizza";

export class PizzaSeeder implements Seeder {
 async run(dataSource: DataSource, factoryManager: SeederFactoryManager): Promise<void> {
    const pizzaRepository = dataSource.getRepository(Pizza);

    const pizzaData = [
      {
        flavor: 'Quatro Queijos',
        type: 'Savory',
        price: 29.00,
        ingredients: ['Queijo', 'requeijão', 'gorgonzola', 'oregano', 'parmesão ralado'],
        img: ''
      },
      {
        flavor: 'Calabresa',
        type: 'Savory',
        price: 29.00,
        ingredients: ['Queijo', 'calabresa', 'cebola', 'oregano'],
        img: ''
      },
      {
        flavor: 'Pepperoni',
        type: 'Savory',
        price: 29.00,
        ingredients: ['Queijo', 'oregano', 'pepperoni'],
        img: ''
      },
      {
        flavor: 'Napolitana',
        type: 'Savory',
        price: 29.00,
        ingredients: ['Queijo', 'tomate', 'oregano', 'parmesão', 'ralado'],
        img: ''
      },
      {
        flavor: 'Prestigio',
        type: 'Sweet',
        price: 29.00,
        ingredients: ['chocolate','coco Ralado', 'leite Condensado', 'cerejas'],
        img: ''
      },
      {
        flavor: 'Chocolate',
        type: 'Sweet',
        price: 29.00,
        ingredients: ['chocolate artesanal','morango', 'leite Condensado'],
        img: ''
      },
      {
        flavor: 'Sonho de valsa',
        type: 'Sweet',
        price: 29.00,
        ingredients: ['Muçarela', 'Chocolate ao leite', 'pedaços de bombom Sonho de Valsa'],
        img: ''
      },
      {
        flavor: 'Banana com canela',
        type: 'Sweet',
        price: 29.00,
        ingredients: ['banana', 'canela', 'licor de cacau'],
        img: ''
      },
    ]


   await pizzaRepository
    .createQueryBuilder()
    .insert()
    .into(Pizza)
    .values(pizzaData)
    .execute()

    await pizzaRepository.save(pizzaData) 
  }
 
}