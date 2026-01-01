import React from 'react';
import { UserButton } from "@clerk/clerk-react";

const DashboardPage = () => {
  return (
    <div style={{ padding: '20px', color: 'white', backgroundColor: '#242424', minHeight: '100vh' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #444', paddingBottom: '10px' }}>
        <h1>B2B Management Dashboard</h1>
        <UserButton afterSignOutUrl="/" />
      </header>
      
      <main style={{ marginTop: '30px' }}>
        <p>Welcome to your workspace!</p>
        <button style={{
          borderRadius: '8px',
          border: '1px solid #646cff',
          padding: '0.6em 1.2em',
          backgroundColor: '#1a1a1a',
          cursor: 'pointer',
          color: 'white'
        }}>
          New Task +
        </button>
      </main>
    </div>
  );
};

export default DashboardPage;