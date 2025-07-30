import { Trash2 } from "lucide-react"
import { useDispatch } from "react-redux";
import { remove } from "../redux/slices/CartSlicee";
import { toast } from "react-hot-toast";

const CartItem = ({item, itemIndex}) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  }

  return (
    <div className="flex items-center p-6 justify-between border-b border-gray-100 last:border-b-0">
      <div className="flex flex-col md:flex-row gap-6 items-start md:items-center flex-1">
        <div className="w-24 h-24 bg-gray-50 rounded-2xl p-3 flex-shrink-0">
          <img 
            className="w-full h-full object-contain" 
            src={item.image} 
            alt={item.title}
            onError={(e) => {
              e.target.src = `https://via.placeholder.com/100x100/f3f4f6/9ca3af?text=${encodeURIComponent(item.category)}`;
            }}
            loading="lazy"
          />
        </div>
        
        <div className="flex-1 space-y-3">
          <h3 className="text-lg font-medium text-gray-900 leading-tight">{item.title}</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            {item.description.split(" ").slice(0,15).join(" ") + "..."}
          </p>
          <div className="flex items-center justify-between">
            <p className="text-2xl font-light text-gray-900">${item.price}</p>
            <button 
              className="flex items-center space-x-2 px-4 py-2 text-red-600 hover:bg-red-50 rounded-full transition-colors duration-200"
              onClick={removeFromCart}
            >
              <Trash2 className="w-4 h-4"/>
              <span className="text-sm font-medium">Remove</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;