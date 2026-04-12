const express = require('express');
const path = require('path');
const app = express();

// Sử dụng port của môi trường (Render sẽ tự cung cấp PORT)
const port = process.env.PORT || 3000;

// Phục vụ tất cả các file tĩnh (HTML, CSS, JS) trong thư mục hiện tại
app.use(express.static(path.join(__dirname)));

// Gửi index.html làm giao diện chính cho các request không phải là file
// Sử dụng regex để kiểm tra nếu đường dẫn không chứa dấu chấm (không phải file)
app.get(/^[^\.]*$/, (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Chạy server lắng nghe tại tất cả các IP (0.0.0.0)
app.listen(port, '0.0.0.0', () => {
  console.log(`Plannery server is running on port ${port}`);
});

