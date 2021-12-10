import { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { setItemDetail } from '../store/actionCreators/items';

export default function MenuDetail() {
  const dispatch = useDispatch();
  const { itemDetail, isLoading: itemDetailLoading, error: itemDetailError } = useSelector(state => state.items);
  let params = useParams();

  useEffect(() => {
    dispatch(setItemDetail(params.id));
  }, []);

  if (itemDetailLoading) {
    return (
      <div className="max-w-2xl mx-auto py-8 px-4 sm:py-12 sm:px-6 lg:max-w-7xl lg:px-8">
        loading ...
      </div>
    )
  } else {
    return (
      <div class="max-w-2xl mx-auto py-8 px-4 sm:py-12 sm:px-6 lg:max-w-7xl lg:px-8">
        <div class="max-w-lg mx-auto rounded-lg shadow-lg overflow-hidden lg:max-w-none lg:flex justify-between">
          <div class="bg-white dark:bg-gray-800 px-6 py-8 lg:flex-shrink-1 lg:p-12">
            <h3 class="text-2xl leading-8 font-extrabold text-gray-900 sm:text-3xl sm:leading-9 dark:text-white">
              {itemDetail.name}
            </h3>
            <p class="mt-6 text-base leading-6 text-gray-500 dark:text-gray-200">
              {itemDetail.description}
            </p>
            <div class="mt-8">
              <div class="flex items-center">
                <h4 class="flex-shrink-0 pr-4 bg-white dark:bg-gray-800 text-sm leading-5 tracking-wider font-semibold uppercase text-indigo-600">
                  What&#x27;s INSIDE
                </h4>
                <div class="flex-1 border-t-2 border-gray-200">
                </div>
              </div>
              <ul class="mt-8 lg:grid lg:grid-cols-2 lg:col-gap-8 lg:row-gap-5">
                {itemDetail.Ingredients?.map((ingredient) => {
                  return (
                    <li class="flex items-start lg:col-span-1">
                      <div class="flex-shrink-0">
                        <svg class="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="#10b981" viewBox="0 0 1792 1792">
                          <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                          </path>
                        </svg>
                      </div>
                      <p class="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                        {ingredient.name}
                      </p>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
          <img src={itemDetail.imgUrl} alt={itemDetail.name} class="py-8 px-6 text-center bg-gray-50 dark:bg-gray-700 lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12 w-full lg:w-2/6" />
        </div>
      </div>
    )
  }
}
