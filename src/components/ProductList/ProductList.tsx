import "./ProductList.css"
import ProductCard from "../ProductCard/ProductCard";

interface Products {
  id: number;
  name: string;
  price: number;
  category: string;
} 
interface ProductsProps{
  products: Products[];
  onDelete: (id: number)=> void; 
}

function ProductList( {products, onDelete} : ProductsProps) {
  
  return (
    <div className="productList">
      {/* <h1>Mahsulotlar ro'yhati</h1> */}
    {
      products.length > 0
        ? products.map(product => (
          <div key={product.id}>
            <ProductCard  {...product} onDelete = {() => onDelete(product.id)}/>
          </div>
      ))
      : <h3>Malumotlar mavjud emas</h3>
    }
    </div>
    
    
  )
}

export default ProductList