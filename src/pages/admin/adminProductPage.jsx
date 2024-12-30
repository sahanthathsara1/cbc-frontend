import axios from "axios";
import { useEffect, useState } from "react";
import { IoTrashBinSharp } from "react-icons/io5";
import { FaCartPlus } from "react-icons/fa";
import { GrEdit } from "react-icons/gr";
import { BsPlusLg } from "react-icons/bs";
import { Link } from "react-router-dom";



export default function AdminProductPage() {
  const [products, setproducts] = useState([
    {
      _id: "675858a63c4361dc27011096",
      productID: "COSM001",
      productName: "Radiant Glow Face Cream",
      altNames: ["Brightening Cream", "Skin Glow Moisturizer"],
      images: [
        "https://example.com/images/product1_main.jpg",
        "https://example.com/images/product1_side.jpg",
      ],
      price: 1500,
      lastPrice: 1200,
      stock: 50,
      description:
        "A premium face cream that brightens and hydrates your skin for a radiant glow.",
      __v: 0,
    },
    {
      _id: "6758590f3c4361dc27011098",
      productID: "COSM002",
      productName: "Velvet Matte Lipstick",
      altNames: ["Matte Lipstick", "Lip Color Velvet"],
      images: [
        "https://example.com/images/lipstick_main.jpg",
        "https://example.com/images/lipstick_open.jpg",
      ],
      price: 800,
      lastPrice: 700,
      stock: 100,
      description:
        "Long-lasting velvet matte lipstick available in vibrant colors.",
      __v: 0,
    },
  ]);

  useEffect(() => {
    // Fetch products from the API
    axios
      .get("http://localhost:3000/api/products")
      .then((response) => {
        setproducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  return (
    <div className="container mx-auto p-4">
      {/* Header */}
      <h1 className="text-left text-4xl font-extrabold text-gray-800 pb-4 mt-[-50px]">
        Admin Product Page
      </h1>
      <Link to = "/admin/products/addProduct" className=" absolute right-6 bottom-4 text-[75px] text-cyan-400 hover:cyan-600s">
      <BsPlusLg /></Link>

      {/* Table */}
      <div className="overflow-x-auto shadow-lg border border-gray-200 rounded-lg">
        <table className="min-w-full bg-white divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                Product ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                Product Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                Price
              </th>
              <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                Last Price
              </th>
              <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                Description
              </th>
              <th className="px-6 py-3 text-center text-xs font-bold text-gray-700 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {products.map((product) => (
              <tr key={product._id}>
                <td className="px-6 py-4 text-sm text-gray-800">
                  {product.productID}
                </td>
                <td className="px-6 py-4 text-sm text-gray-800">
                  {product.productName}
                </td>
                <td className="px-6 py-4 text-sm text-gray-800">
                  Rs. {product.price}
                </td>
                <td className="px-6 py-4 text-sm text-gray-800">
                  Rs. {product.lastPrice}
                </td>
                <td className="px-6 py-4 text-sm text-gray-800">
                  {product.description}
                </td>
                <td className="px-6 py-4 text-center">
                  <div className="flex justify-center space-x-2">
                    <button className="p-2 rounded-full bg-blue-100 hover:bg-blue-200 text-blue-600">
                      <GrEdit />
                    </button>
                    <button className="p-2 rounded-full bg-red-100 hover:bg-red-200 text-red-600">
                      <IoTrashBinSharp />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
