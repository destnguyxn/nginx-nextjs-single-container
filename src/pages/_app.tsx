import '@/config/global.scss'

import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'
import { SWRConfig } from 'swr'

import { AppLayout } from '@/components/AppLayout/AppLayout'
import ErrorBoundary from '@/components/ErrorBoundary/ErrorBoundary'
import AppThemeProvider from '@/config/theme'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <SWRConfig>
    <AppThemeProvider>
      <ErrorBoundary>
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </ErrorBoundary>
    </AppThemeProvider>
  </SWRConfig>
)

export default appWithTranslation(MyApp)
