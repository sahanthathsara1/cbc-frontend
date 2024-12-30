export default function AdminProductAdd() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-indigo-700">
      <div className="w-[600px] bg-white shadow-lg rounded-lg p-2">
        <h1 className="text-3xl font-extrabold text-indigo-600 text-center mb-6">
          Add New Product
        </h1>
        <form className="flex flex-col space-y-1">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Product ID
            </label>
            <input
              type="text"
              placeholder="Enter Product ID"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-black p-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Product Name
            </label>
            <input
              type="text"
              placeholder="Enter Product Name"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-black p-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Product Alt Names
            </label>
            <input
              type="text"
              placeholder="Enter Alternative Names"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-black p-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Product Stock
            </label>
            <input
              type="text"
              placeholder="Enter Stock Quantity"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-black p-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Product Image URLs
            </label>
            <input
              type="text"
              placeholder="Enter Image URLs"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-black p-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Product Description
            </label>
            <textarea
              placeholder="Enter Product Description"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-black p-2"
              rows="4"
            ></textarea>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Product Price
            </label>
            <input
              type="number"
              placeholder="Enter Product Price"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-black p-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Product Last Price
            </label>
            <input
              type="number"
              placeholder="Enter Previous Price"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-black p-2"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 rounded-lg shadow focus:ring-4 focus:ring-indigo-300"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
}
