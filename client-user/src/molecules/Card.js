import { useNavigate } from 'react-router';

export default function Card({ item }) {
  let navigate = useNavigate();
  
  return (
    <div 
      onClick={() => navigate(`/detail/${item.id}`)}
      className="group relative">
      <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 group-hover:shadow-md lg:h-80 lg:aspect-none">
        <img
          src={item.imgUrl}
          alt={item.name}
          className="w-full h-full object-center object-cover lg:w-full lg:h-full"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            <span aria-hidden="true" className="absolute inset-0" />
            {item.name}
          </h3>
          <p className="mt-1 text-sm text-gray-500">{item.Category?.name}</p>
        </div>
        <p className="text-sm font-medium text-gray-900">{item.price}</p>
      </div>
    </div>
  );
};
