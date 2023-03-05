import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { API_URL } from "../../utils/consts";
import { ILoginResponse, IWorkSpace } from '../../types/types';


export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
    prepareHeaders: (headers) => {
      if (localStorage.getItem('rv-token')) {
        headers.set('authorization', `Bearer ${localStorage.getItem('rv-token')}`)
      }
    },
    credentials: "include"
  }),
  endpoints: build => ({
    registration: build.mutation<ILoginResponse, any>({
      query: (body) => ({
        url: 'api/users/registration',
        method: 'POST',
        body,
      }),
      transformErrorResponse: (response: {status: number, data: {status: number; message: string}}) => response.data.message
    }),
    login: build.mutation<ILoginResponse, any>({
      query: (body) => ({
        url: 'api/users/login',
        method: 'POST',
        body
      }),
      transformErrorResponse: (response: {status: number, data: {status: string, message: string}}) => response.data.message
    }),
    auth: build.query<ILoginResponse, any>({
      query: () => ({
        url: 'api/users/refresh',
        method: 'GET'
      })
    }),
    logout: build.query({
      query: () => ({
        url: 'api/users/logout',
        method: 'POST'
      })
    }),
    fetchWorkSpaces: build.query<IWorkSpace[], any>({
      query: () => ({
        url:'api/workspaces',
        method: 'GET'
      })
    }),
    createWorkspace: build.mutation({
      query: (body) => ({
        url: 'api/workspaces/create',
        method: "POST",
        body
      })
    }),
    updateWorkspace: build.mutation({
      query: (data) => ({
        url: `api/workspaces/${data.id}`,
        method: 'PUT',
        body: data
      })
    }),
    updateName: build.mutation({
      query: (body) => ({
        url: `api/workspaces/name/${body.id}`,
        method: 'PUT',
        body
      })
    }),
    createTool:  build.mutation({
      query: (body) => ({
        url: 'api/workspaces/tool',
        method: 'POST',
        body
      })
    }),
    removeWorkspace: build.mutation({
      query: (workspaceId) => ({
        url: `api/workspaces/${workspaceId}`,
        method: 'DELETE',
      })
    }),
    createProject: build.mutation({
      query: (body) => ({
        url: 'api/workspaces/project',
        method: 'POST',
        body
      })
    })
  })
})

export const {
  useRegistrationMutation,
  useLoginMutation,
  useLazyAuthQuery,
  useLazyLogoutQuery,
  useLazyFetchWorkSpacesQuery,
  useCreateWorkspaceMutation,
  useUpdateWorkspaceMutation,
  useCreateToolMutation,
  useRemoveWorkspaceMutation,
  useCreateProjectMutation,
  useUpdateNameMutation,
} = api
