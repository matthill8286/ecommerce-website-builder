/* eslint-disable */
// prettier-ignore
import { OptionalQuery as OptionalQuery0 } from '../pages/[locale]/account/login'
// prettier-ignore
import { OptionalQuery as OptionalQuery1 } from '../pages/[locale]/products/[slug]'

// prettier-ignore
export const pagesPath = {
  _locale: (locale: string | number) => ({
    account: {
      addressBook: {
        $url: (url?: { hash?: string }) => ({ pathname: '/[locale]/account/addressBook' as const, query: { locale }, hash: url?.hash })
      },
      login: {
        $url: (url?: { query?: OptionalQuery0, hash?: string }) => ({ pathname: '/[locale]/account/login' as const, query: { locale, ...url?.query }, hash: url?.hash })
      },
      orders: {
        $url: (url?: { hash?: string }) => ({ pathname: '/[locale]/account/orders' as const, query: { locale }, hash: url?.hash }),
        _token: (token: string | number) => ({
          $url: (url?: { hash?: string }) => ({ pathname: '/[locale]/account/orders/[token]' as const, query: { locale, token }, hash: url?.hash })
        })
      },
      preferences: {
        $url: (url?: { hash?: string }) => ({ pathname: '/[locale]/account/preferences' as const, query: { locale }, hash: url?.hash })
      },
      register: {
        $url: (url?: { hash?: string }) => ({ pathname: '/[locale]/account/register' as const, query: { locale }, hash: url?.hash })
      },
      $url: (url?: { hash?: string }) => ({ pathname: '/[locale]/account' as const, query: { locale }, hash: url?.hash })
    },
    cart: {
      $url: (url?: { hash?: string }) => ({ pathname: '/[locale]/cart' as const, query: { locale }, hash: url?.hash })
    },
    category: {
      _slug: (slug: string | number) => ({
        $url: (url?: { hash?: string }) => ({ pathname: '/[locale]/category/[slug]' as const, query: { locale, slug }, hash: url?.hash })
      })
    },
    checkout: {
      $url: (url?: { hash?: string }) => ({ pathname: '/[locale]/checkout' as const, query: { locale }, hash: url?.hash })
    },
    collection: {
      _slug: (slug: string | number) => ({
        $url: (url?: { hash?: string }) => ({ pathname: '/[locale]/collection/[slug]' as const, query: { locale, slug }, hash: url?.hash })
      })
    },
    order: {
      $url: (url?: { hash?: string }) => ({ pathname: '/[locale]/order' as const, query: { locale }, hash: url?.hash })
    },
    page: {
      _slug: (slug: string | number) => ({
        $url: (url?: { hash?: string }) => ({ pathname: '/[locale]/page/[slug]' as const, query: { locale, slug }, hash: url?.hash })
      })
    },
    products: {
      _slug: (slug: string | number) => ({
        $url: (url?: { query?: OptionalQuery1, hash?: string }) => ({ pathname: '/[locale]/products/[slug]' as const, query: { locale, slug, ...url?.query }, hash: url?.hash })
      })
    },
    search: {
      $url: (url?: { hash?: string }) => ({ pathname: '/[locale]/search' as const, query: { locale }, hash: url?.hash })
    },
    $url: (url?: { hash?: string }) => ({ pathname: '/[locale]' as const, query: { locale }, hash: url?.hash })
  })
}

// prettier-ignore
export type PagesPath = typeof pagesPath