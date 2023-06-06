import { useParams } from "react-router-dom";

const EditPage = () => {

    let { id } = useParams();

    return (
        <div className="max-w-lg bg-white shadow-lg mx-auto p-7 rounded mt-6">
            <h2 className="font-semibold text-2xl mb-4 block text-center">
                Edit a Product {id}
            </h2>
            <form>
                <div className="space-y-2">
                    <div>
                        <label className="text-gray-600 mb-2 block font-semibold">Name</label>
                        <input type="text" className="w-full block border p-3 text-gray-600  rounded focus:outline-none focus:shadow-outline focus:border-blue-200 placeholder-gray-400" placeholder="Name" />
                    </div>
                    <div>
                        <label className="text-gray-600 mb-2 block font-semibold">Quantity</label>
                        <input type="text" className="w-full block border p-3 text-gray-600  rounded focus:outline-none focus:shadow-outline focus:border-blue-200 placeholder-gray-400" placeholder="Quantity" />
                    </div>
                    <div>
                        <label className="text-gray-600 mb-2 block font-semibold">Price</label>
                        <input type="text" className="w-full block border p-3 text-gray-600  rounded focus:outline-none focus:shadow-outline focus:border-blue-200 placeholder-gray-400" placeholder="Price" />
                    </div>
                    <div>
                        <label className="text-gray-600 mb-2 block font-semibold">Image URL</label>
                        <input type="text" className="w-full block border p-3 text-gray-600  rounded focus:outline-none focus:shadow-outline focus:border-blue-200 placeholder-gray-400" placeholder="Image URL" />
                    </div>
                    <div>
                        <button className="block w-full mt-6 bg-blue-700 text-white rounded-sm px-4 py-2 font-bold hover:bg-blue-600 hover:cursor-pointer">Save</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default EditPage;
