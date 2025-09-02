import React from 'react';

function Dashboard() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Top Bar / Header */}
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px', background: '#222', color: '#fff' }}>
        <div style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>
          <img src="/logo.png" alt="Logo" style={{ height: 32, verticalAlign: 'middle', marginRight: 8 }} />
          Transilk Admin Dashboard
        </div>
        <div>
          <button style={{ marginRight: 16 }}>🔔 Notifications</button>
          <span style={{ marginRight: 16 }}>Admin Name</span>
          <button style={{ marginRight: 8 }}>Settings</button>
          <button>Logout</button>
        </div>
      </header>

      <div style={{ display: 'flex', flex: 1 }}>
        {/* Sidebar Navigation */}
        <nav style={{ width: 220, background: '#f5f5f5', padding: '24px 0', borderRight: '1px solid #ddd' }}>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ padding: '12px 24px', fontWeight: 'bold' }}>Dashboard Overview</li>
            <li style={{ padding: '12px 24px' }}>Product Management</li>
            <li style={{ padding: '12px 24px' }}>Categories</li>
            <li style={{ padding: '12px 24px' }}>Subcategories</li>
            <li style={{ padding: '12px 24px' }}>Add / Edit Products</li>
            <li style={{ padding: '12px 24px' }}>Orders</li>
            <li style={{ padding: '12px 24px' }}>Users / Customers</li>
            <li style={{ padding: '12px 24px' }}>Analytics / Reports</li>
            <li style={{ padding: '12px 24px' }}>Settings</li>
          </ul>
        </nav>

        {/* Main Content Area */}
        <main style={{ flex: 1, padding: '32px' }}>
          {/* Summary Cards */}
          <div style={{ display: 'flex', gap: 24, marginBottom: 32 }}>
            <div style={{ background: '#fff', padding: 24, borderRadius: 8, boxShadow: '0 1px 4px #ccc', flex: 1 }}>
              <div>Total Products</div>
              <div style={{ fontSize: 24, fontWeight: 'bold' }}>120</div>
            </div>
            <div style={{ background: '#fff', padding: 24, borderRadius: 8, boxShadow: '0 1px 4px #ccc', flex: 1 }}>
              <div>Total Orders</div>
              <div style={{ fontSize: 24, fontWeight: 'bold' }}>350</div>
            </div>
            <div style={{ background: '#fff', padding: 24, borderRadius: 8, boxShadow: '0 1px 4px #ccc', flex: 1 }}>
              <div>Total Revenue</div>
              <div style={{ fontSize: 24, fontWeight: 'bold' }}>$25,000</div>
            </div>
            <div style={{ background: '#fff', padding: 24, borderRadius: 8, boxShadow: '0 1px 4px #ccc', flex: 1 }}>
              <div>Pending Orders</div>
              <div style={{ fontSize: 24, fontWeight: 'bold' }}>15</div>
            </div>
          </div>

          {/* Charts / Graphs Section */}
          <div style={{ display: 'flex', gap: 24, marginBottom: 32 }}>
            <div style={{ background: '#fff', padding: 24, borderRadius: 8, boxShadow: '0 1px 4px #ccc', flex: 2 }}>
              <div style={{ fontWeight: 'bold', marginBottom: 8 }}>Sales Trends</div>
              <div style={{ height: 180, background: '#eee', borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {/* Replace with chart library */}
                [Line Chart Placeholder]
              </div>
            </div>
            <div style={{ background: '#fff', padding: 24, borderRadius: 8, boxShadow: '0 1px 4px #ccc', flex: 1 }}>
              <div style={{ fontWeight: 'bold', marginBottom: 8 }}>Category-wise Product Stock</div>
              <div style={{ height: 180, background: '#eee', borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {/* Replace with chart library */}
                [Bar/Pie Chart Placeholder]
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div style={{ display: 'flex', gap: 16 }}>
            <button style={{ padding: '12px 24px', borderRadius: 6, background: '#1976d2', color: '#fff', border: 'none' }}>Add New Product</button>
            <button style={{ padding: '12px 24px', borderRadius: 6, background: '#ffa726', color: '#fff', border: 'none' }}>View Pending Orders</button>
            <button style={{ padding: '12px 24px', borderRadius: 6, background: '#388e3c', color: '#fff', border: 'none' }}>Generate Report</button>
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer style={{ textAlign: 'center', padding: '12px', background: '#f5f5f5', fontSize: '0.9rem', color: '#888' }}>
        Version 1.0.0 | © 2025 Transilk Admin
      </footer>
    </div>
  );
}

export default Dashboard;