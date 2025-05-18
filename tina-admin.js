const { execSync } = require('child_process');
const express = require('express');
const path = require('path');
const fs = require('fs');
const matter = require('gray-matter');

// Start the admin server
const app = express();
const port = 3001;

// Serve the admin UI
app.use(express.static(path.join(__dirname, 'public', 'admin')));

// API endpoint to get page content
app.get('/api/content/:type/:slug', (req, res) => {
  const { type, slug } = req.params;
  const filePath = path.join(__dirname, 'content', type, `${slug}.mdx`);
  
  try {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContent);
    res.json({ data, content });
  } catch (error) {
    res.status(404).json({ error: 'File not found' });
  }
});

// API endpoint to update page content
app.put('/api/content/:type/:slug', express.json(), (req, res) => {
  const { type, slug } = req.params;
  const { data } = req.body;
  const filePath = path.join(__dirname, 'content', type, `${slug}.mdx`);
  
  try {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { content } = matter(fileContent);
    
    // Create new frontmatter
    const newContent = matter.stringify(content, data);
    fs.writeFileSync(filePath, newContent);
    
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`TinaCMS Admin running at http://localhost:${port}/admin/`);
  console.log(`Edit your content at http://localhost:${port}/admin/index.html#/collections/page/content/pages/home`);
});

// Start the Next.js development server
try {
  console.log('Starting Next.js development server...');
  execSync('npm run next-dev', { stdio: 'inherit' });
} catch (error) {
  console.error('Failed to start Next.js server:', error);
}
