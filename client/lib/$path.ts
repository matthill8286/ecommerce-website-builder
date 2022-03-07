/* eslint-disable */
// prettier-ignore
import { OptionalQuery as OptionalQuery0 } from '../pages/account/login'
// prettier-ignore
import { OptionalQuery as OptionalQuery1 } from '../pages/product/[slug]'
// prettier-ignore
import { OptionalQuery as OptionalQuery2 } from '../pages/products'

// prettier-ignore
export const pagesPath = {
  account: {
    addressBook: {
      $url: (url?: { hash?: string }) => ({ pathname: '/account/addressBook' as const, hash: url?.hash })
    },
    login: {
      $url: (url?: { query?: OptionalQuery0, hash?: string }) => ({ pathname: '/account/login' as const, query: url?.query, hash: url?.hash })
    },
    orders: {
      $url: (url?: { hash?: string }) => ({ pathname: '/account/orders' as const, hash: url?.hash }),
      _token: (token: string | number) => ({
        $url: (url?: { hash?: string }) => ({ pathname: '/account/orders/[token]' as const, query: { token }, hash: url?.hash })
      })
    },
    preferences: {
      $url: (url?: { hash?: string }) => ({ pathname: '/account/preferences' as const, hash: url?.hash })
    },
    register: {
      $url: (url?: { hash?: string }) => ({ pathname: '/account/register' as const, hash: url?.hash })
    },
    $url: (url?: { hash?: string }) => ({ pathname: '/account' as const, hash: url?.hash })
  },
  cart: {
    $url: (url?: { hash?: string }) => ({ pathname: '/cart' as const, hash: url?.hash })
  },
  categories: {
    $url: (url?: { hash?: string }) => ({ pathname: '/categories' as const, hash: url?.hash })
  },
  category: {
    _slug: (slug: string | number) => ({
      $url: (url?: { hash?: string }) => ({ pathname: '/category/[slug]' as const, query: { slug }, hash: url?.hash })
    })
  },
  checkout: {
    $url: (url?: { hash?: string }) => ({ pathname: '/checkout' as const, hash: url?.hash })
  },
  collection: {
    _slug: (slug: string | number) => ({
      $url: (url?: { hash?: string }) => ({ pathname: '/collection/[slug]' as const, query: { slug }, hash: url?.hash })
    })
  },
  collections: {
    $url: (url?: { hash?: string }) => ({ pathname: '/collections' as const, hash: url?.hash })
  },
  order: {
    $url: (url?: { hash?: string }) => ({ pathname: '/order' as const, hash: url?.hash })
  },
  page: {
    _slug: (slug: string | number) => ({
      $url: (url?: { hash?: string }) => ({ pathname: '/page/[slug]' as const, query: { slug }, hash: url?.hash })
    })
  },
  product: {
    _slug: (slug: string | number) => ({
      $url: (url?: { query?: OptionalQuery1, hash?: string }) => ({ pathname: '/product/[slug]' as const, query: { slug, ...url?.query }, hash: url?.hash })
    })
  },
  products: {
    $url: (url?: { query?: OptionalQuery2, hash?: string }) => ({ pathname: '/products' as const, query: url?.query, hash: url?.hash })
  },
  search: {
    $url: (url?: { hash?: string }) => ({ pathname: '/search' as const, hash: url?.hash })
  },
  $url: (url?: { hash?: string }) => ({ pathname: '/' as const, hash: url?.hash })
}

// prettier-ignore
export type PagesPath = typeof pagesPath
