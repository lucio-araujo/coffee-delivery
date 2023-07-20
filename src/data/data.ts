import uuid from 'react-uuid'

export interface ICoffee {
  id: string;
  imgURL: string;
  characteristic: string[];
  type: string;
  description: string;
  price: number;
  quantity?: number;
}

export const data: ICoffee[] = [
  {
    id: uuid(),
    imgURL: "src/assets/expresso-tradicional.png",
    characteristic: ["Tradicional"],
    type: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    price: 9.9,
  },
  {
    id: uuid(),
    imgURL: "src/assets/expresso-americano.png",
    characteristic: ["Tradicional"],
    type: "Expresso Americano",
    description: "Expresso diluído, menos intenso que o tradicional",
    price: 9.9,
  },
  {
    id: uuid(),
    imgURL: "src/assets/expresso-cremoso.png",
    characteristic: ["Tradicional"],
    type: "Expresso Cremoso",
    description: "Café expresso tradicional com espuma cremosa",
    price: 9.9,
  },
  {
    id: uuid(),
    imgURL: "src/assets/expresso-gelado.png",
    characteristic: ["Tradicional", "Gelado"],
    type: "Expresso Gelado",
    description: "Bebida preparada com café expresso e cubos de gelo",
    price: 9.9,
  },
  {
    id: uuid(),
    imgURL: "src/assets/cafe-com-leite.png",
    characteristic: ["Tradicional", "Com Leite"],
    type: "Café com Leite",
    description: "Meio a meio de expresso tradicional com leite vaporizado",
    price: 9.9,
  },
  {
    id: uuid(),
    imgURL: "src/assets/latte.png",
    characteristic: ["Tradicional", "Com Leite"],
    type: "Latte",
    description:
      "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    price: 9.9,
  },
  {
    id: uuid(),
    imgURL: "src/assets/capuccino.png",
    characteristic: ["Tradicional", "Com Leite"],
    type: "Capuccino",
    description:
      "Bebida com canela feita de doses iguais de café, leite e espuma",
    price: 9.9,
  },
  {
    id: uuid(),
    imgURL: "src/assets/machiato.png",
    characteristic: ["Tradicional", "Com Leite"],
    type: "Machiato",
    description:
      "Café expresso misturado com um pouco de leite quente e espuma",
    price: 9.9,
  },
  {
    id: uuid(),
    imgURL: "src/assets/mocaccino.png",
    characteristic: ["Tradicional", "Com Leite"],
    type: "Mocaccino",
    description: "Café expresso com calda de chocolate, pouco leite e espuma",
    price: 9.9,
  },
  {
    id: uuid(),
    imgURL: "src/assets/chocolate-quente.png",
    characteristic: ["Especial", "Com Leite"],
    type: "Chocolate Quente",
    description: "Bebida feita com chocolate dissolvido no leite quente e café",
    price: 9.9,
  },
  {
    id: uuid(),
    imgURL: "src/assets/cubano.png",
    characteristic: ["Especial", "Alcoólico", "Gelado"],
    type: "Cubano",
    description:
      "Drink gelado de café expresso com rum, creme de leite e hortelã",
    price: 9.9,
  },
  {
    id: uuid(),
    imgURL: "src/assets/havaiano.png",
    characteristic: ["Especial"],
    type: "Havaiano",
    description: "Bebida adocicada preparada com café e leite de côco",
    price: 9.9,
  },
  {
    id: uuid(),
    imgURL: "src/assets/arabe.png",
    characteristic: ["Especial"],
    type: "Árabe",
    description: "Bebida preparada com grãos de café árabe e especiarias",
    price: 9.9,
  },
  {
    id: uuid(),
    imgURL: "src/assets/irlandes.png",
    characteristic: ["Especial", "Alcoólico"],
    type: "Irlandês",
    description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    price: 9.9,
  },
];
