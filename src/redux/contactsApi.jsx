// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// export const contactsApi = createApi({
//   reducerPath: 'contacts',
//   baseQuery: fetchBaseQuery({
//     baseUrl: 'https://6405e0ec40597b65de43d053.mockapi.io/',
//   }),
//   endpoints: builder => ({
//     getContacts: builder.query({
//       query: () => `contacts/`,
//       providesTags: ['Material'],
//     }),
//     addContact: builder.mutation({
//       query: contact => ({
//         url: `contacts/`,
//         method: 'POST',
//         body: contact,
//       }),
//       invalidatesTags: ['Material'],
//     }),
//     deleteContact: builder.mutation({
//       query: id => ({
//         url: `contacts/${id}`,
//         method: 'DELETE',
//       }),
//       invalidatesTags: ['Material'],
//     }),
//   }),
// });

// export const {
//   useGetContactsQuery,
//   useAddContactMutation,
//   useDeleteContactMutation,
// } = contactsApi;