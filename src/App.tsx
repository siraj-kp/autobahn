import React from 'react';
import './App.css';
import { Navigate, BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout';
// Routes
import DashboardView from './pages/dashboard-view';
import EditPost from './pages/edit-post';
import PostView from './pages/view-post';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="post/new" element={<EditPost />} />
          <Route path="post/edit/:id" element={<EditPost />} />
          <Route path="post/edit" element={<EditPost />} />
          <Route path="post/:id" element={<PostView />} />
          <Route path="dashboard" element={<DashboardView />} />
          <Route index element={<Navigate to="dashboard" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
