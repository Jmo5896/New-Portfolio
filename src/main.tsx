import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css'

import App from './App.tsx'
import AboutMe from './pages/AboutMe.tsx'
import Contact from './pages/Contact.tsx'
import Error from './pages/Error.tsx'
import Landing from './pages/Landing.tsx'
import Projects from './pages/Projects.tsx'
import Resume from './pages/Resume.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />
      },
      {
        path: '/aboutme',
        element: <AboutMe />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/projects',
        element: <Projects />
      },
      {
        path: 'resume',
        element: <Resume />
      }
    ]
  }
])

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(<RouterProvider router={router} />);
}
