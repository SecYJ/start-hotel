/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as ProtectedRouteImport } from './routes/_protected/route'
import { Route as AuthRouteImport } from './routes/_auth/route'
import { Route as IndexRouteImport } from './routes/index/route'
import { Route as ProtectedRoomsImport } from './routes/_protected/rooms'
import { Route as ProtectedProfileImport } from './routes/_protected/profile'
import { Route as ProtectedCheckoutImport } from './routes/_protected/checkout'
import { Route as AuthRegisterImport } from './routes/_auth/register'
import { Route as AuthLoginImport } from './routes/_auth/login'
import { Route as ProtectedRoomsIdImport } from './routes/_protected/rooms.$id'
import { Route as ProtectedProfileMyBookingImport } from './routes/_protected/profile.my-booking'

// Create/Update Routes

const ProtectedRouteRoute = ProtectedRouteImport.update({
  id: '/_protected',
  getParentRoute: () => rootRoute,
} as any)

const AuthRouteRoute = AuthRouteImport.update({
  id: '/_auth',
  getParentRoute: () => rootRoute,
} as any)

const IndexRouteRoute = IndexRouteImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const ProtectedRoomsRoute = ProtectedRoomsImport.update({
  id: '/rooms',
  path: '/rooms',
  getParentRoute: () => ProtectedRouteRoute,
} as any)

const ProtectedProfileRoute = ProtectedProfileImport.update({
  id: '/profile',
  path: '/profile',
  getParentRoute: () => ProtectedRouteRoute,
} as any)

const ProtectedCheckoutRoute = ProtectedCheckoutImport.update({
  id: '/checkout',
  path: '/checkout',
  getParentRoute: () => ProtectedRouteRoute,
} as any)

const AuthRegisterRoute = AuthRegisterImport.update({
  id: '/register',
  path: '/register',
  getParentRoute: () => AuthRouteRoute,
} as any)

const AuthLoginRoute = AuthLoginImport.update({
  id: '/login',
  path: '/login',
  getParentRoute: () => AuthRouteRoute,
} as any)

const ProtectedRoomsIdRoute = ProtectedRoomsIdImport.update({
  id: '/$id',
  path: '/$id',
  getParentRoute: () => ProtectedRoomsRoute,
} as any)

const ProtectedProfileMyBookingRoute = ProtectedProfileMyBookingImport.update({
  id: '/my-booking',
  path: '/my-booking',
  getParentRoute: () => ProtectedProfileRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexRouteImport
      parentRoute: typeof rootRoute
    }
    '/_auth': {
      id: '/_auth'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof AuthRouteImport
      parentRoute: typeof rootRoute
    }
    '/_protected': {
      id: '/_protected'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof ProtectedRouteImport
      parentRoute: typeof rootRoute
    }
    '/_auth/login': {
      id: '/_auth/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof AuthLoginImport
      parentRoute: typeof AuthRouteImport
    }
    '/_auth/register': {
      id: '/_auth/register'
      path: '/register'
      fullPath: '/register'
      preLoaderRoute: typeof AuthRegisterImport
      parentRoute: typeof AuthRouteImport
    }
    '/_protected/checkout': {
      id: '/_protected/checkout'
      path: '/checkout'
      fullPath: '/checkout'
      preLoaderRoute: typeof ProtectedCheckoutImport
      parentRoute: typeof ProtectedRouteImport
    }
    '/_protected/profile': {
      id: '/_protected/profile'
      path: '/profile'
      fullPath: '/profile'
      preLoaderRoute: typeof ProtectedProfileImport
      parentRoute: typeof ProtectedRouteImport
    }
    '/_protected/rooms': {
      id: '/_protected/rooms'
      path: '/rooms'
      fullPath: '/rooms'
      preLoaderRoute: typeof ProtectedRoomsImport
      parentRoute: typeof ProtectedRouteImport
    }
    '/_protected/profile/my-booking': {
      id: '/_protected/profile/my-booking'
      path: '/my-booking'
      fullPath: '/profile/my-booking'
      preLoaderRoute: typeof ProtectedProfileMyBookingImport
      parentRoute: typeof ProtectedProfileImport
    }
    '/_protected/rooms/$id': {
      id: '/_protected/rooms/$id'
      path: '/$id'
      fullPath: '/rooms/$id'
      preLoaderRoute: typeof ProtectedRoomsIdImport
      parentRoute: typeof ProtectedRoomsImport
    }
  }
}

// Create and export the route tree

interface AuthRouteRouteChildren {
  AuthLoginRoute: typeof AuthLoginRoute
  AuthRegisterRoute: typeof AuthRegisterRoute
}

const AuthRouteRouteChildren: AuthRouteRouteChildren = {
  AuthLoginRoute: AuthLoginRoute,
  AuthRegisterRoute: AuthRegisterRoute,
}

const AuthRouteRouteWithChildren = AuthRouteRoute._addFileChildren(
  AuthRouteRouteChildren,
)

interface ProtectedProfileRouteChildren {
  ProtectedProfileMyBookingRoute: typeof ProtectedProfileMyBookingRoute
}

const ProtectedProfileRouteChildren: ProtectedProfileRouteChildren = {
  ProtectedProfileMyBookingRoute: ProtectedProfileMyBookingRoute,
}

const ProtectedProfileRouteWithChildren =
  ProtectedProfileRoute._addFileChildren(ProtectedProfileRouteChildren)

interface ProtectedRoomsRouteChildren {
  ProtectedRoomsIdRoute: typeof ProtectedRoomsIdRoute
}

const ProtectedRoomsRouteChildren: ProtectedRoomsRouteChildren = {
  ProtectedRoomsIdRoute: ProtectedRoomsIdRoute,
}

const ProtectedRoomsRouteWithChildren = ProtectedRoomsRoute._addFileChildren(
  ProtectedRoomsRouteChildren,
)

interface ProtectedRouteRouteChildren {
  ProtectedCheckoutRoute: typeof ProtectedCheckoutRoute
  ProtectedProfileRoute: typeof ProtectedProfileRouteWithChildren
  ProtectedRoomsRoute: typeof ProtectedRoomsRouteWithChildren
}

const ProtectedRouteRouteChildren: ProtectedRouteRouteChildren = {
  ProtectedCheckoutRoute: ProtectedCheckoutRoute,
  ProtectedProfileRoute: ProtectedProfileRouteWithChildren,
  ProtectedRoomsRoute: ProtectedRoomsRouteWithChildren,
}

const ProtectedRouteRouteWithChildren = ProtectedRouteRoute._addFileChildren(
  ProtectedRouteRouteChildren,
)

export interface FileRoutesByFullPath {
  '/': typeof IndexRouteRoute
  '': typeof ProtectedRouteRouteWithChildren
  '/login': typeof AuthLoginRoute
  '/register': typeof AuthRegisterRoute
  '/checkout': typeof ProtectedCheckoutRoute
  '/profile': typeof ProtectedProfileRouteWithChildren
  '/rooms': typeof ProtectedRoomsRouteWithChildren
  '/profile/my-booking': typeof ProtectedProfileMyBookingRoute
  '/rooms/$id': typeof ProtectedRoomsIdRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRouteRoute
  '': typeof ProtectedRouteRouteWithChildren
  '/login': typeof AuthLoginRoute
  '/register': typeof AuthRegisterRoute
  '/checkout': typeof ProtectedCheckoutRoute
  '/profile': typeof ProtectedProfileRouteWithChildren
  '/rooms': typeof ProtectedRoomsRouteWithChildren
  '/profile/my-booking': typeof ProtectedProfileMyBookingRoute
  '/rooms/$id': typeof ProtectedRoomsIdRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRouteRoute
  '/_auth': typeof AuthRouteRouteWithChildren
  '/_protected': typeof ProtectedRouteRouteWithChildren
  '/_auth/login': typeof AuthLoginRoute
  '/_auth/register': typeof AuthRegisterRoute
  '/_protected/checkout': typeof ProtectedCheckoutRoute
  '/_protected/profile': typeof ProtectedProfileRouteWithChildren
  '/_protected/rooms': typeof ProtectedRoomsRouteWithChildren
  '/_protected/profile/my-booking': typeof ProtectedProfileMyBookingRoute
  '/_protected/rooms/$id': typeof ProtectedRoomsIdRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | ''
    | '/login'
    | '/register'
    | '/checkout'
    | '/profile'
    | '/rooms'
    | '/profile/my-booking'
    | '/rooms/$id'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | ''
    | '/login'
    | '/register'
    | '/checkout'
    | '/profile'
    | '/rooms'
    | '/profile/my-booking'
    | '/rooms/$id'
  id:
    | '__root__'
    | '/'
    | '/_auth'
    | '/_protected'
    | '/_auth/login'
    | '/_auth/register'
    | '/_protected/checkout'
    | '/_protected/profile'
    | '/_protected/rooms'
    | '/_protected/profile/my-booking'
    | '/_protected/rooms/$id'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRouteRoute: typeof IndexRouteRoute
  AuthRouteRoute: typeof AuthRouteRouteWithChildren
  ProtectedRouteRoute: typeof ProtectedRouteRouteWithChildren
}

const rootRouteChildren: RootRouteChildren = {
  IndexRouteRoute: IndexRouteRoute,
  AuthRouteRoute: AuthRouteRouteWithChildren,
  ProtectedRouteRoute: ProtectedRouteRouteWithChildren,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/_auth",
        "/_protected"
      ]
    },
    "/": {
      "filePath": "index/route.tsx"
    },
    "/_auth": {
      "filePath": "_auth/route.tsx",
      "children": [
        "/_auth/login",
        "/_auth/register"
      ]
    },
    "/_protected": {
      "filePath": "_protected/route.tsx",
      "children": [
        "/_protected/checkout",
        "/_protected/profile",
        "/_protected/rooms"
      ]
    },
    "/_auth/login": {
      "filePath": "_auth/login.tsx",
      "parent": "/_auth"
    },
    "/_auth/register": {
      "filePath": "_auth/register.tsx",
      "parent": "/_auth"
    },
    "/_protected/checkout": {
      "filePath": "_protected/checkout.tsx",
      "parent": "/_protected"
    },
    "/_protected/profile": {
      "filePath": "_protected/profile.tsx",
      "parent": "/_protected",
      "children": [
        "/_protected/profile/my-booking"
      ]
    },
    "/_protected/rooms": {
      "filePath": "_protected/rooms.tsx",
      "parent": "/_protected",
      "children": [
        "/_protected/rooms/$id"
      ]
    },
    "/_protected/profile/my-booking": {
      "filePath": "_protected/profile.my-booking.tsx",
      "parent": "/_protected/profile"
    },
    "/_protected/rooms/$id": {
      "filePath": "_protected/rooms.$id.tsx",
      "parent": "/_protected/rooms"
    }
  }
}
ROUTE_MANIFEST_END */
