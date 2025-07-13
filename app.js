// Import module HTTP bawaan Node.js
const http = require("http");
// Menentukan hostname berdasarkan NODE_ENV
const hostname =
  process.env.NODE_ENV !== "production" ? "localhost" : "dicoding.com";
// Menentukan port
const port = 3000;
// Handler untuk permintaan HTTP
const requestHandler = (req, res) => {
  res.statusCode = 200; // Menetapkan status kode HTTP
  res.setHeader("Content-Type", "text/plain"); // Mengatur jenis konten yang dikirim adalah teks biasa.
  res.end("Hello, dunia!\n"); // Menutup respons dan mengirimkan teks "Hello, dunia!\n" ke client.
};
// Membuat server
const server = http.createServer(requestHandler);
// Menjalankan server
server.listen(port, hostname, () => {
  console.log(`Server berjalan pada http://${hostname}:${port}/`);
});
