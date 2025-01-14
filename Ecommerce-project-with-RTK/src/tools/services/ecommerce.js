import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const ecommerceApi = createApi({
    reducerPath: "ecommerceApi",
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://matrixacademylessonapi.webluna.org', prepareHeaders: (headers) => {
            headers.set("lesson-access", "bd859cade3ac0dd3165f793b641e40cd");
            return headers;
        }
    }),
    endpoints: (bulider) => ({
        getProduct: bulider.query({
            query: () => 'product'
        }),
        getCategory:bulider.query({
            query:()=>'category'
        }),
        getProductByCat:bulider.query({
            query: (cat) => `product/cat/${cat}`
        })
    })

});


export const { useGetProductQuery, useGetProductByCatQuery, useGetCategoryQuery } = ecommerceApi;