import { useState } from 'react'
import { products as productData  } from './data/data.ts';
import ProductList from './components/ProductList/ProductList.tsx'
import "./App.css"
import "./index.css"

function App() {
  const [products, setProduct] = useState(productData)
  const [newProduct, setNewProduct] = useState({ name: '', price: 0, category: '' })
  const [filteredProducts, setFilteredProducts] =useState('All')

  const onDelete = (id: number) => {
    setProduct(products.filter(product => product.id !== id))
    }
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setNewProduct({...newProduct, [name]: value })
    //     const { name, price, category } = newProduct
    // const newProduct = { id: products.length + 1, name, price, category }
    // setProduct([...products, newProduct])
    // setNewProduct({ name: '', price: 0, category: '' })

  }  

  const addProduct = () => {
    const newId = products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1;
    setProduct([...products, { id: newId, ...newProduct }]);
    setNewProduct({ name: '', price: 0, category: '' });

  };
  const filterProduct = filteredProducts === "All" ?  products : products.filter(product => product.category === filteredProducts)

  return (
    <div className='general'>
      <div className='header'>
      <input 
      placeholder='Nomini kiriting...'
      name='name'
      value={newProduct.name}
      onChange={handleChange}
      type="text" 
      />
      <input 
      placeholder='Narxini kiriting...'
      name='price'
      value={newProduct.price}
      onChange={handleChange}
      type="number" 
      />
      <input 
      placeholder='categoriyani kiriting...'
      name='category'
      value={newProduct.category}
      onChange={handleChange}
      type="text" 
      />
      <button onClick={addProduct} className='addBtn'>Qo'shish</button>

      <select value={filteredProducts} 
      onChange={(e) => setFilteredProducts(e.target.value) }>
        <option value="All">All</option>
        <option value="Laptop">Laptop</option>
        <option value="Phone">Phone</option>
        <option value="Tablet">Tablet</option>
        <option value="Accessories">Accessories</option>
      </select>
      </div>
      <h1>Mahsulotlar katalogi</h1>
        
          <ProductList products = {filterProduct} onDelete = {onDelete}/>
       
    </div>
    
  )
}


export default App 
