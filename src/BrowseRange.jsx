import React from 'react'

const FecthProducts = async () => {
    const response = await fetch('http://localhost:3000/ranges');
    const data = await response.json();
    return data;
}

const BrowseRange = () => {
    const [products, setProducts] = React.useState([]);
    React.useEffect(() => {
        FecthProducts().then(data => setProducts(data));
    }, [])
    const fontStyle = {
        fontFamily: 'Inter, sans-serif'
    };
  return (
    <section id="furniro-range" className='flex flex-col gap-1 justify-center items-center mt-5' style={fontStyle}>
        <div className="text-2xl font-bold">Browse The Range</div>
        <div className="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
        <div className="grid grid-cols-3 gap-4 mt-12">
            {products.map((product, index)=>(
                <div key={index} className='text-center'>
                    <div className="h-[400px] w-[300px] border-2 border-slate-200 rounded-lg">
                        <img key={index} src={product.thumbnail} alt="furnito" />
                    </div>
                    <p>{product.title}</p>
                </div>
                
            ))}
        </div>
    </section>
  )
}

export default BrowseRange