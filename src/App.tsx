import { useState } from 'react'
import { products as productData  } from '../public/data/data.ts'
import ProductList from './components/ProductList/ProductList.tsx'
import "./App.css"
import "./index.css"

function App() {
  const [products, setProduct] = useState(productData)
  const [newProduct, setNewProduct] = useState({ title: '', price: '', category: '' })
  const [filteredProducts, setFilteredProducts] =useState('All')

  const onDelete = (id: number) => {
    setProduct(products.filter(product => product.id !== id))
    }
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setNewProduct({...newProduct, [name]: value })
    // const { title, price, category } = newProduct
    // const newProduct = { id: products.length + 1, title, price, category }
    // setPrtoduct([...products, newProduct])
    // setNewProduct({ title: '', price: 0, category: '' })
  }  

  const addProduct = () => {
    const newId = products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1;
    setProduct([...products, { id: newId, ...newProduct }]);
    setNewProduct({ title: '', price: '', category: '' }); 
}



  const filterProduct = filteredProducts === "All" ?  products : products.filter(product => product.category === filteredProducts)

  return (
    <div>
      <input 
      placeholder='Nomini kiriting...'
      name='title'
      value={newProduct.title}
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
        <option value="Laptop">Phone</option>
        <option value="Phone">Phone</option>
        <option value="Tablet">Tablet</option>
        <option value="Accessories">Accessories</option>
      </select>

      <ProductList products = {filterProduct} onDelete = {onDelete}/>
    </div>
  )
}

export default App