import React from 'react'

const FecthProducts = async () => {
    const response = await fetch('http://localhost:8000/products');
    const data = await response.json();
    return data;
}

const Products = (props) => {
    const [products, setProducts] = React.useState([]);
        React.useEffect(() => {
            FecthProducts().then(data => setProducts(data));
        }, [])
    const fontStyle = {
        fontFamily: 'Inter, sans-serif'
    };
  return (
    <section id="furniro-products" className='flex flex-col gap-1 justify-center items-center mt-8' style={fontStyle}>
        <div className="text-2xl font-bold">Our Products</div>
        <div className={`grid gap-4 mt-5 ${props.classes}`}>
            {products.map((product, index)=>(
                <div key={index}  className='flex flex-col items-start justify-start h-[400px] w-[250px] border-slate-200 rounded-lg bg-gray-200'>
                    <div  className="h-[300px] w-[250px] ">
                        <img  src={product.thumbnail} alt="furnito" />
                    </div>
                    <div className="p-5">
                        <p className=''>{product.title}</p>
                        <p className='text-slate-400'>{product.brand}</p>
                        <p className=''>Rs. {product.price}</p>
                    </div>
                </div>
                
            ))}
        </div>
        <div className="">
            <button className='text-[#b98e2e] px-20 py-2 mt-5 border-[1px] border-[#b98e2e]'>Show More</button>
        </div>
    </section>
  )
}

export default Products