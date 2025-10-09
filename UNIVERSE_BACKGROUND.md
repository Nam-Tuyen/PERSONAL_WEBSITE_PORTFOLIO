# Universe Background Design - Header, Body, Footer

## 🌌 Tổng Quan

Website đã được thiết kế lại với background vũ trụ chuyển động đẹp mắt, bao phủ toàn bộ header, body và footer với các hiệu ứng động phong phú.

## 🎨 Cấu Trúc Background

### **1. UniverseBackground Component**
- **Vị trí**: `app/components/UniverseBackground.tsx`
- **Chức năng**: Quản lý tất cả hiệu ứng vũ trụ chính
- **Hiệu ứng**:
  - 5 tầng Nebula clouds với màu sắc khác nhau
  - 250+ ngôi sao với 3 kích thước khác nhau
  - 5 sao băng chuyển động
  - 30 hạt bụi vũ trụ
  - 3 vòng xoay galaxy arms
  - 3 hành tinh quay quanh quỹ đạo
  - 3 sóng năng lượng xung động
  - 2 chòm sao chuyển động

### **2. Header Background**
- **Hiệu ứng**: 
  - 15 ngôi sao nhỏ lấp lánh
  - 2 tầng nebula nhẹ
  - Background trong suốt với blur effect
- **Màu sắc**: Tinh tế, không che khuất nội dung

### **3. Body Background**
- **Hiệu ứng**:
  - 30 ngôi sao bổ sung
  - 3 chòm sao chuyển động với màu sắc khác nhau
  - 3 sóng năng lượng xung động
- **Màu sắc**: Hài hòa với nội dung chính

### **4. Footer Background**
- **Hiệu ứng**:
  - 25 ngôi sao lấp lánh
  - 4 tầng nebula với màu sắc đa dạng
  - 2 sao băng chuyển động
  - 10 hạt bụi vũ trụ
- **Màu sắc**: Tạo điểm nhấn cuối trang

## 🎭 Hiệu Ứng Animation

### **Nebula Float**
```css
@keyframes nebula-float {
  0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.3; }
  25% { transform: translate(20px, -30px) scale(1.1); opacity: 0.5; }
  50% { transform: translate(-15px, 20px) scale(0.9); opacity: 0.4; }
  75% { transform: translate(30px, 10px) scale(1.05); opacity: 0.6; }
}
```

### **Galaxy Rotate**
```css
@keyframes galaxy-rotate {
  0% { transform: translate(-50%, -50%) rotate(0deg); }
  100% { transform: translate(-50%, -50%) rotate(360deg); }
}
```

### **Planet Orbit**
```css
@keyframes planet-orbit {
  0% { transform: translate(0, 0) rotate(0deg); }
  25% { transform: translate(50px, -30px) rotate(90deg); }
  50% { transform: translate(0, -60px) rotate(180deg); }
  75% { transform: translate(-50px, -30px) rotate(270deg); }
  100% { transform: translate(0, 0) rotate(360deg); }
}
```

### **Constellation Float**
```css
@keyframes constellation-float {
  0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.6; }
  50% { transform: translateY(-20px) rotate(180deg); opacity: 1; }
}
```

### **Shooting Star**
```css
@keyframes shooting-star {
  0% { transform: translateX(-100px) translateY(0px); opacity: 0; }
  10% { opacity: 1; }
  90% { opacity: 1; }
  100% { transform: translateX(100vw) translateY(-50px); opacity: 0; }
}
```

## 🎨 Bảng Màu Vũ Trụ

### **Nebula Colors**
- **Purple**: `rgba(147, 51, 234, 0.4)` - Tạo độ sâu
- **Blue**: `rgba(59, 130, 246, 0.4)` - Tạo không gian
- **Cyan**: `rgba(6, 182, 212, 0.3)` - Tạo sự sống động
- **Pink**: `rgba(236, 72, 153, 0.25)` - Tạo điểm nhấn
- **Yellow**: `rgba(234, 179, 8, 0.25)` - Tạo ấm áp

### **Star Colors**
- **White**: `#ffffff` - Ngôi sao chính
- **Cyan**: `#22d3ee` - Sao băng
- **Purple**: `#a855f7` - Sao đặc biệt
- **Pink**: `#ec4899` - Sao năng lượng

### **Energy Colors**
- **Green**: `#00ff88` - Năng lượng chính
- **Cyan**: `#00d4ff` - Năng lượng phụ
- **Purple**: `#7c3aed` - Năng lượng đặc biệt

## ⚡ Tối Ưu Performance

### **1. CSS Animations**
- Sử dụng `transform` và `opacity` cho hiệu suất tốt
- Tránh `width`, `height`, `top`, `left` trong animations
- Sử dụng `will-change` cho các element động

### **2. Layering**
- Background cố định với `fixed` positioning
- Z-index được quản lý cẩn thận
- `pointer-events: none` cho tất cả background elements

### **3. Randomization**
- Sử dụng `Math.random()` cho vị trí và timing
- Animation delays khác nhau để tránh đồng bộ
- Số lượng elements được tối ưu

## 📱 Responsive Design

### **Mobile (< 640px)**
- Giảm số lượng stars và effects
- Tăng opacity cho visibility
- Đơn giản hóa animations

### **Tablet (640px - 1024px)**
- Số lượng effects vừa phải
- Cân bằng giữa performance và visual

### **Desktop (> 1024px)**
- Full effects với tất cả animations
- Tối đa hóa visual impact
- Smooth 60fps animations

## 🔧 Cách Tùy Chỉnh

### **Thêm Hiệu Ứng Mới**
1. Thêm keyframes vào `globals.css`
2. Tạo animation class
3. Áp dụng vào component tương ứng

### **Thay Đổi Màu Sắc**
1. Cập nhật color values trong components
2. Điều chỉnh opacity cho phù hợp
3. Test trên các thiết bị khác nhau

### **Tối Ưu Performance**
1. Giảm số lượng elements nếu cần
2. Tăng animation duration
3. Sử dụng `transform3d` cho hardware acceleration

## ✅ Kết Quả

Với background vũ trụ mới:
- **Trải nghiệm thị giác**: Sống động và hấp dẫn
- **Tính nhất quán**: Hiệu ứng đồng bộ trên toàn website
- **Performance**: Tối ưu cho mọi thiết bị
- **Responsive**: Hoạt động mượt mà trên mobile
- **Professional**: Tạo ấn tượng mạnh mẽ

Background vũ trụ giờ đây tạo ra một trải nghiệm hoàn chỉnh, từ header đến footer, với các hiệu ứng chuyển động mượt mà và màu sắc hài hòa!
