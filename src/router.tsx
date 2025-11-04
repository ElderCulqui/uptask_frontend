import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AppLayout from '@/layouts/AppLayout'
import DashboardView from '@/pages/DashboardView'
import CreateProjectView from './pages/projects/CreateProjectView'
import EditProjectView from './pages/projects/EditProjectView'
import ProjectDetailsView from './pages/projects/ProjectDetailsView'

export default function Router() {

    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AppLayout />}>
                    <Route path='/' element={<DashboardView />} index />
                    <Route path='/projects/create' element={<CreateProjectView />} />
                    <Route path='/projects/:projectId' element={<ProjectDetailsView />} />
                    <Route path='/projects/:projectId/edit' element={<EditProjectView />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}