export type ProductStatusEN = "In Stock" | "Out of Stock";
export type ProductStatusES = "En stock" | "Agotado";

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  stock: number;
  status: ProductStatusEN | ProductStatusES;
  rating: number;
  trending: boolean;
}

const mockProducts: Product[] = [
  {
    id: "1",
    name: "Premium Arabica Coffee Beans",
    category: "Beverages",
    price: 28.99,
    stock: 150,
    status: "In Stock",
    rating: 4.8,
    trending: true,
  },
  {
    id: "2",
    name: "Organic Basmati Rice",
    category: "Grains",
    price: 15.5,
    stock: 25,
    status: "In Stock",
    rating: 4.6,
    trending: false,
  },
  {
    id: "3",
    name: "Fresh Seasonal Vegetables Bundle",
    category: "Produce",
    price: 22.75,
    stock: 0,
    status: "Out of Stock",
    rating: 4.4,
    trending: true,
  },
  {
    id: "4",
    name: "Premium Wheat Flour",
    category: "Grains",
    price: 12.99,
    stock: 200,
    status: "In Stock",
    rating: 4.7,
    trending: false,
  },
  {
    id: "6",
    name: "Premium Canned Tomatoes",
    category: "Preserved",
    price: 4.25,
    stock: 100,
    status: "In Stock",
    rating: 4.3,
    trending: false,
  },
];

const mockProductsES: Product[] = [
  {
    id: "1",
    name: "Granos de Café Arábica Premium",
    category: "Bebidas",
    price: 28.99,
    stock: 150,
    status: "En stock",
    rating: 4.8,
    trending: true,
  },
  {
    id: "2",
    name: "Arroz Basmati Orgánico",
    category: "Granos",
    price: 15.5,
    stock: 25,
    status: "En stock",
    rating: 4.6,
    trending: false,
  },
  {
    id: "3",
    name: "Paquete de Verduras de Temporada Frescas",
    category: "Productos frescos",
    price: 22.75,
    stock: 0,
    status: "Agotado",
    rating: 4.4,
    trending: true,
  },
  {
    id: "4",
    name: "Harina de Trigo Premium",
    category: "Granos",
    price: 12.99,
    stock: 200,
    status: "En stock",
    rating: 4.7,
    trending: false,
  },
  {
    id: "6",
    name: "Tomates Enlatados Premium",
    category: "Conservas",
    price: 4.25,
    stock: 100,
    status: "En stock",
    rating: 4.3,
    trending: false,
  },
];

// Categories for English and Spanish, matching the products categories exactly
const categories = [
  "All",
  "Beverages",
  "Grains",
  "Produce",
  "Preserved",
];

const categoriesES = [
  "Todos",
  "Bebidas",
  "Granos",
  "Productos frescos",
  "Conservas",
];

export { mockProducts, categories, mockProductsES, categoriesES };
