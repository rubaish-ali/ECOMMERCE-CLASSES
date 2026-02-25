
import Header from "../components/Header";

export default function AllProducts() {
  return (
    <div className="ml-64 p-6 bg-gray-100 min-h-screen">
      <Header />

      <div className="bg-white p-6 rounded shadow mt-6">
        <h2 className="text-lg font-semibold mb-4">All Products</h2>

        <table className="w-full border">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2 border">Name</th>
              <th className="p-2 border">Price</th>
              <th className="p-2 border">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 border">Product 1</td>
              <td className="p-2 border">$100</td>
              <td className="p-2 border">
                <button className="bg-red-500 text-white px-3 py-1 rounded">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}