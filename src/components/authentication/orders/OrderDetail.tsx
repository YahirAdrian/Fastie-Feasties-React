
import type { Order } from "../../../services/orderAPI";



interface OrderDetailProps{
    key: number;
    order: Order;
}


const OrderDetail : React.FC<OrderDetailProps> = ({order})=>{

    // Destructuring of order data
    const { id, status, updated_at,  products } = order
    const serverURL = import.meta.env.VITE_API_SERVER_URL

    let orderTotal = 0

    function formatOrderDate (orderDate : string) : string{
        const date = new Date(orderDate);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        return `${day}-${month}-${year}`;
    }
    return(
        <div className="oder-preview border rounded-lg shadow-md p-6 my-6 bg-white relative">
            
            <h3 className="font-bold text-2xl mb-4">Orden #{id}</h3>
            {/* Status Label and Delete Button */}
            <div className="flex items-center justify-between mb-4">
            
                <div className="flex">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${status === "Pendiente" ? 'text-amber-600 bg-amber-100' : 'text-green-700 bg-green-100'}  mr-2`}>
                    {status}
                    </span>
                    <p className="text-gray-500 italic">
                        {formatOrderDate(updated_at)}
                    </p>
                    
                </div>
                <button
                className="px-3 py-1 bg-red-500 text-white text-xs font-bold rounded hover:bg-red-700 transition cursor-pointer"
                title="Eliminar orden"
                // Add onClick handler as needed for deletion
                >
                Eliminar
                </button>
            </div>
            <div className="space-y-4">
                {/* Product Item */}
                {products.map(product =>{
                    
                    const { name, image, price, pivot } = product
                    const { quantity, subtotal} = pivot

                    orderTotal += parseInt(subtotal)

                    return (

                    <div className="flex items-center border-b pb-4">
                        <img 
                        src={`${serverURL}/product-images/${image}`}
                        alt={`Imágen producto: ${name}`}
                        className="w-20 h-20 object-cover rounded mr-4"
                        />
                        <div className="flex-1">
                        <div className="font-bold text-lg">{name}</div>
                        <div className="text-gray-600">Cantidad: <span className="font-semibold">{quantity}</span></div>
                        </div>
                        <div className="text-right">
                        <div className="text-gray-700">Precio: <span className="font-semibold">${price}</span></div>
                        <div className="text-gray-700">Subtotal: <span className="font-bold">${subtotal}</span></div>
                        </div>
                    </div>
                    )
                })}
                <div className="mt-6 flex justify-end">
                    <div className="text-xl font-bold">Total orden: ${orderTotal}</div>
                </div>
            </div>
        </div>
    )
}

export default OrderDetail