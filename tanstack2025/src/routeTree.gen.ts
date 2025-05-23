/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as DonutsRouteImport } from './routes/donuts/route'
import { Route as IndexImport } from './routes/index'
import { Route as DonutsIndexImport } from './routes/donuts/index'

// Create/Update Routes

const DonutsRouteRoute = DonutsRouteImport.update({
  id: '/donuts',
  path: '/donuts',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const DonutsIndexRoute = DonutsIndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => DonutsRouteRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/donuts': {
      id: '/donuts'
      path: '/donuts'
      fullPath: '/donuts'
      preLoaderRoute: typeof DonutsRouteImport
      parentRoute: typeof rootRoute
    }
    '/donuts/': {
      id: '/donuts/'
      path: '/'
      fullPath: '/donuts/'
      preLoaderRoute: typeof DonutsIndexImport
      parentRoute: typeof DonutsRouteImport
    }
  }
}

// Create and export the route tree

interface DonutsRouteRouteChildren {
  DonutsIndexRoute: typeof DonutsIndexRoute
}

const DonutsRouteRouteChildren: DonutsRouteRouteChildren = {
  DonutsIndexRoute: DonutsIndexRoute,
}

const DonutsRouteRouteWithChildren = DonutsRouteRoute._addFileChildren(
  DonutsRouteRouteChildren,
)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/donuts': typeof DonutsRouteRouteWithChildren
  '/donuts/': typeof DonutsIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/donuts': typeof DonutsIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/donuts': typeof DonutsRouteRouteWithChildren
  '/donuts/': typeof DonutsIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/donuts' | '/donuts/'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/donuts'
  id: '__root__' | '/' | '/donuts' | '/donuts/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  DonutsRouteRoute: typeof DonutsRouteRouteWithChildren
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  DonutsRouteRoute: DonutsRouteRouteWithChildren,
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
        "/donuts"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/donuts": {
      "filePath": "donuts/route.tsx",
      "children": [
        "/donuts/"
      ]
    },
    "/donuts/": {
      "filePath": "donuts/index.tsx",
      "parent": "/donuts"
    }
  }
}
ROUTE_MANIFEST_END */
