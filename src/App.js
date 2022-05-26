import { lazy, Suspense } from 'react';
import { Route, Routes} from 'react-router-dom';


const HomePage = lazy(() => import('./pages/HomePage'))
const Navigation = lazy(() => import('./pages/Navigation'))
const MoviesPage = lazy(() => import('./pages/MoviesPage'))
const MovieDetailsPage = lazy(() => import('./pages/MovieDetailsPage'))
const Cast = lazy(() => import('./pages/Cast'))
const Reviews = lazy(() => import('./pages/Reviews'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'))

export default function Movies () {

    return (
        <>
        <Suspense fallback={<h2>Loading...</h2>}>
            <Navigation/>
            
            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/movies' element={<MoviesPage/>}/>
                <Route path='/movies/:movieId' element={<MovieDetailsPage/>}>
                    <Route path='cast' element={<Cast/>}/>
                    <Route path='reviews' element={<Reviews/>}/>
                </Route>
                <Route path='*' element={<NotFoundPage/>}/>
            </Routes>
        </Suspense>
        </>
    )
}