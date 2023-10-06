import ProtectedRoute from 'components/ProtectedRoute'
import React, { Suspense } from 'react'
import { MainLayoutProps } from './interface'
import { ScrollButton } from 'components/Button'

const ProtectedLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <Suspense fallback={null}>
      <ProtectedRoute>
        <ScrollButton />
        {children}
      </ProtectedRoute>
    </Suspense>
  )
}

export default ProtectedLayout