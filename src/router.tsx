import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AppLayout from '@/layouts/AppLayout'
import DashboardView from '@/pages/DashboardView'
import CreateProjectView from './pages/projects/CreateProjectView'

export default function Router() {

    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AppLayout />}>
                    <Route path='/' element={<DashboardView />} index />
                    <Route path='/projects/create' element={<CreateProjectView />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}