/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const TableProduct = ({ products }) => {
  return (
    <div className="mt-6 overflow-auto">
      <table className="table-auto mx-auto bg-white">
        <thead className="bg-gray-200">
          <tr>
            <th className="text-left px-4 py-2">Name</th>
            <th className="text-left px-4 py-2">Price</th>
            <th className="text-left px-4 py-2">Quantity</th>
            <th className="w-20 px-4 py-2">Image</th>
            <th className="text-left px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => {
            return (
              <tr key={index}>
                <td className="p-4 border-b ">{product.name}</td>
                <td className="p-4 border-b ">{product.quantity}</td>
                <td className="p-4 border-b ">${product.price}</td>
                <td className="p-4 border-b ">
                    <img src={product.image} className="w-full"/>
                </td>
                <td className="p-4 border-b ">
                  <div className="flex gap-2">
                    <Link  to={`/edit/${product._id}`} className="inline-block text-sm font-semibold text-white px-2 py-1 bg-blue-500 rounded hover:bg-blue-600">Edit</Link>
                    <button className="inline-block text-sm font-semibold text-white px-2 py-1 bg-red-500 rounded hover:bg-red-600">Delete</button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TableProduct;
