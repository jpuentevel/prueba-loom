// src/routes/api/hello/hello.route.js
module.exports = {
  async get (req, res) {
    console.log('[hello] hit');
    res.json({ message: 'Hello Link Loom!' });
  },
};
