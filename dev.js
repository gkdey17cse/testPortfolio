const express = require('express');
const path = require('path');
const app = require('./api/index').default || require('./api/index'); // ⬅️ fallback for local

if (typeof app.listen === 'function') {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`🚀 Local server running at http://localhost:${PORT}`);
  });
}
