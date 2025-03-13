import "./ProductCard.css"

interface ProductsProps {
  name: string;
  price: number;
  category: string;
  onDelete: ()=> void;
}

function ProductCard({name, price, category, onDelete} : ProductsProps) {
  return (
    <div className='card'>
      <img src="https://www.shutterstock.com/image-vector/circle-line-simple-design-logo-600nw-2174926871.jpg" alt="#" className="img"/>
      <h2 className="productName">   {name}</h2>
      <p className="productPrice">Narxi: {price} $</p>
      <p className="productCategory"> Kategoriyasi: {category}</p>
      <button onClick={onDelete}>O'chirish </button>
    </div>
  )
}

export default ProductCard