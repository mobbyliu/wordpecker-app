import { useEffect } from 'react';

export function HealthCheck() {
  useEffect(() => {
    // 设置响应头，确保缓存控制
    document.title = 'Health Check';
  }, []);

  return (
    <div style={{ 
      padding: '20px', 
      textAlign: 'center',
      fontFamily: 'Arial, sans-serif',
      color: '#333'
    }}>
      <h1>Service Healthy</h1>
      <p>Frontend service is running normally</p>
      <p>Timestamp: {new Date().toISOString()}</p>
    </div>
  );
} 