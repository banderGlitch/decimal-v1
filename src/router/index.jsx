import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React, { Suspense } from 'react'
import SiteLayout from '../components/SiteLayout'
import NotFound from '../pages/404'
import MarketPlace from '../pages/marketplace'
import IntentPage from '../pages/IntentPage'

export default function Routing() {
    
    return (
        <div>
            <Router>
                <Routes>
                    <Route
                        path='/'
                        element={
                            <SiteLayout>
                                <Suspense
                                    fallback={
                                        <div className='loading-loader-section'>
                                            Loading...
                                        </div>
                                    }
                                >
                                    <MarketPlace />
                                </Suspense>
                            </SiteLayout>
                        }
                    />
                    <Route
                        path='/create'
                        element={
                            <SiteLayout>
                                <Suspense
                                    fallback={
                                        <div className='loading-loader-section'>
                                            Loading...
                                        </div>
                                    }
                                >
                                    <IntentPage />
                                </Suspense>
                            </SiteLayout>
                        }
                    />
                    <Route
                        path='*'
                        element={
                            <SiteLayout>
                                <Suspense
                                    fallback={
                                        <div className='loading-loader-section'>
                                            Loading...
                                        </div>
                                    }
                                >
                                    <NotFound />
                                </Suspense>
                            </SiteLayout>
                        }
                    />
                </Routes>
            </Router>
        </div>
    )
}