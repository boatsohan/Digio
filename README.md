# Digio
ระบบรันโดย NodeJs และใช้ database เป็น  MariaDB mysql
## Getting Started 
  ติดตั้ง [NodeJs](https://nodejs.org/en/) และ databaseใช้xampp [mysql](https://www.apachefriends.org/index.html)
  
 # Start database server  
   เปิดโปรแกรม xampp start apache และ MySQL
   
เข้าหน้า phpmysql
  สร้าง ฐานข้อมูลชื่อ tic_tac_toe
  สร้าง Table 
  
  Code SQL คือ
  ```
CREATE TABLE `history` (
id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
date timestamp NOT NULL DEFAULT current_timestamp(),
user_o varchar(200) COLLATE utf8_unicode_ci NOT NULL,
user_x varchar(200) COLLATE utf8_unicode_ci NOT NULL,
result varchar(10) COLLATE utf8_unicode_ci NOT NULL,
size int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci
```
# Start server 
```
$ git clone https://github.com/boatsohan/Digio.git
$ cd Digio
$ npm i
$ node Run.js
```
# Run.js แก้ไขค่าสำหรับเชื่อมต่อ database

let url = "localhost";

let db_name = "tic_tac_toe";

let user = 'root';

let password = '';

