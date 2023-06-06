import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <div>
        <Link
          to="/create"
          className="inline-block mt-4 shadow-md bg-blue-700 text-white rounded-sm px-4 py-2 font-bold hover:bg-blue-600 hover:cursor-pointer"
        >
          Create a Product
        </Link>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-5">
        <div className="bg-white rounded shadow-lg overflow-hidden">
          <img
            src="https://cdn.pixabay.com/photo/2023/05/29/17/01/hamburger-8026582_1280.jpg"
            className="w-full h-28 object-cover"
          />
          <div className="px-4 pt-2 pb-4">
            <h2 className="text font-semibold">Burger</h2>
            <div className="text-sm">Quantiy: 30</div>
            <div className="text-sm">Price: $2.50</div>

            <div className="mt-2 flex gap-4">
              <Link
                to="/edit/1"
                className="inline-block w-full text-center shadow-md text-sm bg-gray-700 text-white rounded-sm px-4 py-1 font-bold hover:bg-gray-600 hover:cursor-pointer"
              >
                Edit
              </Link>
              <Link
                to="/create"
                className="inline-block w-full text-center shadow-md text-sm bg-red-700 text-white rounded-sm px-4 py-1 font-bold hover:bg-red-600 hover:cursor-pointer"
              >
                Delete
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default HomePage;
