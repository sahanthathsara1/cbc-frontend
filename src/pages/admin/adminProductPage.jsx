import axios from "axios";
import { useEffect, useState } from "react";

export default function AdminProductPage() {



    const [products,setproducts] = useState([
        
            {
                "_id": "675858a63c4361dc27011096",
                "productID": "COSM001",
                "productName": "Radiant Glow Face Cream",
                "altNames": [
                    "Brightening Cream",
                    "Skin Glow Moisturizer"
                ],
                "images": [
                    "https://example.com/images/product1_main.jpg",
                    "https://example.com/images/product1_side.jpg"
                ],
                "price": 1500,
                "lastPrice": 1200,
                "stock": 50,
                "description": "A premium face cream that brightens and hydrates your skin for a radiant glow.",
                "__v": 0
            },
            {
                "_id": "6758590f3c4361dc27011098",
                "productID": "COSM002",
                "productName": "Velvet Matte Lipstick",
                "altNames": [
                    "Matte Lipstick",
                    "Lip Color Velvet"
                ],
                "images": [
                    "https://example.com/images/lipstick_main.jpg",
                    "https://example.com/images/lipstick_open.jpg"
                ],
                "price": 800,
                "lastPrice": 700,
                "stock": 100,
                "description": "Long-lasting velvet matte lipstick available in vibrant colors.",
                "__v": 0
            },
            {
                "_id": "675859473c4361dc2701109a",
                "productID": "COSM003",
                "productName": "Gentle Foaming Face Wash",
                "altNames": [
                    "Foaming Cleanser",
                    "Face Foam"
                ],
                "images": [
                    "https://example.com/images/facewash_main.jpg",
                    "https://example.com/images/facewash_back.jpg"
                ],
                "price": 1200,
                "lastPrice": 1000,
                "stock": 75,
                "description": "A mild foaming face wash that deeply cleanses and refreshes your skin.",
                "__v": 0
            },
            {
                "_id": "6758595a3c4361dc2701109e",
                "productID": "COSM004",
                "productName": "Floral Bloom Perfume",
                "altNames": [
                    "Floral Fragrance",
                    "Bloom Scent"
                ],
                "images": [
                    "https://example.com/images/perfume_main.jpg",
                    "https://example.com/images/perfume_box.jpg"
                ],
                "price": 3500,
                "lastPrice": 3000,
                "stock": 20,
                "description": "A luxurious perfume with a blend of floral and fruity notes.",
                "__v": 0
            },
            {
                "_id": "675859623c4361dc270110a0",
                "productID": "COSM005",
                "productName": "Hydrating Daily Moisturizer",
                "altNames": [
                    "Daily Moisturizer",
                    "Skin Hydration Cream"
                ],
                "images": [
                    "https://example.com/images/moisturizer_main.jpg",
                    "https://example.com/images/moisturizer_side.jpg"
                ],
                "price": 2000,
                "lastPrice": 1800,
                "stock": 40,
                "description": "A daily moisturizer that keeps your skin hydrated for 24 hours.",
                "__v": 0
            }
        
    ]);
    console.log(products);

useEffect(() => {
    // Fetch products from the API
    axios.get('http://localhost:3000/api/products')
      .then(response => {
         //setproducts(res.data)//(mehema dammoth meka call wenwa wade ek nisa mehema daanne na api call bara ganaka yanwa hosting krnn amrui)
    //me nisa thmi useeffect pawicci krnne
    console.log(res)
        setproducts(response.data);


      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);

    
        
       
    


    return (
        <div>
            <h1>Admin Product Page</h1>
            {
                products.map(
                    (product)=>{
                        return (
                            <div key={product.productID} className="flex flex-col">
                                <h1>{product.productName}</h1>
                                <h2>{product.price}</h2>
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">add to cart</button>
                            </div>
                        )
                    }
                )
            }
        </div>
    );
}
