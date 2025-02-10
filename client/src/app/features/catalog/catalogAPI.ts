import { createApi } from "@reduxjs/toolkit/query/react";
import { Product } from "../../models/product";
import { baseQuerywithErrorHandling } from "../../api/baseApi";

export const catalogAPI = createApi({
    reducerPath: 'catalogAPI',
    baseQuery: baseQuerywithErrorHandling,
    endpoints:(builder) =>({
        fetchProducts : builder.query<Product[],void>({
            query: () => ({url:'products'})
        }),
        fetchProductDetails : builder.query<Product,number>({
            query: (productId) => `products/${productId}`
        })
    })
})

export const {useFetchProductsQuery,useFetchProductDetailsQuery} = catalogAPI;