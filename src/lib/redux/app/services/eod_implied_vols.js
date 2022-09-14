
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
// import { NodeBuilderFlags } from 'typescript';

import axios from 'axios'
//const staggeredBaseQuery = retry(fetchBaseQuery({ baseUrl: '/' }), { maxRetries: 5 });

// const axiosBaseQuery = ({ baseUrl } = { baseUrl: '' }) =>
//   async ({ url, method, data, params }) => {

//     console.log("baseUrl + url")

//     try {

//       const {result} = await axios({ url: baseUrl + url, method, data, params })
//       console.log(result)
//       //const data = await result.json()
//       return { data: result  }
//     } catch (axiosError) {
//       let err = axiosError
//       return {
//         error: {
//           status: err.response?.status,
//           data: err.response?.data || err.message,
//         },
//       }
//     }
//   }

//   export const volsAPI = createApi({
//     reducerPath: "volsAPI",

//     baseQuery: axiosBaseQuery({baseUrl: "http://192.168.1.104:8000",
//   }),
//     endpoints: (build) => ({
//       getVols: build.query({
//         query: () => ({ url: '/vol', method: 'get' }),
//     }),
//     // endpoints(build){
//     //   return {
//     //     getVols: build.query({ 
//     //       query: () => ({ url: '/vol', method: 'get' }),
//     //       //validateStatus:(response, result) => {return response.status==-200 &&!result.isError} ,
//     //       transformResponse:(response)=>{return response}
//     //     }),
//         // mutation: build.mutation({
//         //   query: () => ({ url: '/mutation', method: 'post' }),
//         // }),
//       };
//   }
// });


export const volsAPI = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'http://192.168.1.104:8000/' }),
  endpoints: (builder) => ({
    getVols: builder.query({
  
      query: () => 'vol', // Will make a request like https://pokeapi.co/api/v2/pokemon/bulbasaur
    }),
    // updatePokemon: builder.mutation({
    //   query: ({ name, patch }) => ({
    //     url: `pokemon/${name}`,
    //     method: 'PATCH',
    //     body: patch, // fetchBaseQuery automatically adds `content-type: application/json` to the Headers and calls `JSON.stringify(patch)`
    //   }),
    // }),
  }),
})


// const axiosBaseQuery =
//   ({ baseUrl } = { baseUrl: '' }) =>
//   async ({ url, method, data, params }) => {
//     try {
//       const result = await axios({ url: baseUrl + url, method, data, params })
//       return result //{ data: result.data }
//     } catch (axiosError) {
//       let err = axiosError
//       return {
//         error: {
//           status: err.response?.status,
//           data: err.response?.data || err.message,
//         },
//       }
//     }
//   }

// export const volsAPI = createApi({
//   reducerPath:'volsAPI',
//   baseQuery: axiosBaseQuery({
//     baseUrl: 'http://192.168.1.104:8000',
//   }),
//   endpoints(build) {
//     return {
//       getVols: build.query({ query: () => ({ url: '/vol', method: 'get' }) }),
//       //mutation: build.mutation({ query: () => ({ url: '/mutation', method: 'post' }) }),
//       //transformResponse:(response)=>{return response.data},
//     }
//   },
// })

export const {useGetVolsQuery} = volsAPI;


// export const volsAPI = createApi({
//   reducerPath: "vols",
//   baseQuery: fetchBaseQuery({
//     baseUrl: "http://192.168.1.104:8000"
//   }),
//   endpoints:(builder)  => ({
//     getVols: builder.query({
//       query: () => 'vol',
//     }),
//   }),

// });



// import axios from 'axios';
// export async function getServerSideProps() {
//   const { data } = await axios.get(`${process.env.API_ENDPOINT}/04/users`);

//   return {
//     props: {
//       users: data,
//     },
//   };
// // }


// export async function getServerSideProps(context) {
//     const { data } = await axios.get(`http://192.168.1.104:8000/vol`)
//     //const { res } = await fetch(`http://192.168.1.104:8000/vol`)
//     //const data = await res.json()

//     //var id = context.query.itmid;
    
//     //console.log(data);

//     if (!data) {
//       return {
//         notFound: true,
//       }
//     }
  
//     return {
//       props: { data }, // will be passed to the page component as props
//     }
//   }