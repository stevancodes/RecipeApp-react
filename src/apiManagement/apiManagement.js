import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = "https://62b71438491a19c97aee3be7.mockapi.io";

export const apiManagement = createApi({
  reducerPath: "apiManagement",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder) => ({
    getRecipes: builder.mutation({
      query: () => ({
        url: "/recipes",
        method: "GET",
      }),
    }),
    createRecipe: builder.mutation({
      query: (body) => ({
        url: "/recipes",
        method: "POST",
        body: body,
      }),
    }),
    editRecipe: builder.mutation({
      query: ({ id, ...rest }) => ({
        url: `/recipes/${id}`,
        method: "PUT",
        body: rest,
        headers: { "Content-Type": "aplication/json" },
      }),
    }),
    removeRecipe: builder.mutation({
      query: (id) => ({
        url: `/recipes/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useCreateRecipeMutation,
  useGetRecipesMutation,
  useEditRecipeMutation,
  useRemoveRecipeMutation,
} = apiManagement;
