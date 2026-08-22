# Trilogy Elementary

Repository pembelajaran dasar **HTML, CSS, dan JavaScript** dari nol melalui kumpulan contoh kecil yang dapat dibuka dan dipelajari satu per satu di browser.

Nama **Trilogy Elementary** menggambarkan tiga fondasi utama web development yang dipelajari dalam repository ini:

1. **HTML** untuk menyusun struktur dan makna konten.
2. **CSS** untuk mengatur tampilan serta layout halaman.
3. **JavaScript** untuk menambahkan logika dan interaksi.

Repository ini merupakan dokumentasi perjalanan belajar, bukan satu aplikasi production. Setiap file umumnya berfokus pada satu konsep agar mudah dibaca, dicoba, dan dimodifikasi.

## Materi yang Dipelajari

- Elemen dan struktur dasar HTML
- Semantic HTML, multimedia, tabel, link, dan gambar
- Form, input, validasi, dan berbagai tipe kontrol
- CSS selector, cascade, box model, background, font, dan filter
- Layout dengan position, float, Flexbox, dan Grid
- Dasar JavaScript, tipe data, operator, percabangan, dan perulangan
- Function, closure, destructuring, object, dan error handling
- Object-Oriented Programming dengan JavaScript
- Standard library JavaScript
- ECMAScript Modules
- Document Object Model dan browser events
- Promise, Fetch API, AJAX, async/await, dan Web Worker
- Mini-project Todo List interaktif

## Struktur Repository

| Direktori | Materi |
| --- | --- |
| `project-html/` | Dasar HTML, semantic elements, multimedia, tabel, link, dan struktur halaman |
| `html-form/` | Form HTML serta berbagai jenis input dan kontrol |
| `css-dasar/` | Selector, cascade, box model, warna, font, background, gradient, dan styling dasar |
| `css-layout/` | Positioning, float, Flexbox, Grid, dan responsive layout |
| `belajar-js-dasar/` | Sintaks dan konsep dasar JavaScript |
| `js-oop/` | Object, prototype, class, inheritance, field, method, dan error handling |
| `js-lib/` | Standard object seperti Array, Date, JSON, Map, Set, RegExp, Math, dan Proxy |
| `js-modul/` | Export, import, alias, default export, aggregate, dan dynamic module |
| `js-dom/` | Manipulasi DOM, event, form, node, element, dan browser API |
| `js-async/` | Callback, Promise, AJAX, Fetch API, async/await, dan Web Worker |
| `to-do-list-js/` | Mini-project Todo List menggunakan HTML dan JavaScript |

## Prasyarat

Project ini tidak memerlukan framework atau package manager. Peralatan yang disarankan:

- Browser modern seperti Chrome, Firefox, Edge, atau Safari
- Text editor seperti [Visual Studio Code](https://code.visualstudio.com/)
- Git untuk mengambil repository
- Local development server, khususnya untuk contoh module, Fetch API, AJAX, dan Web Worker

## Memulai

Clone repository:

```bash
git clone https://github.com/mjmokhtar/trilogy-elementary.git
cd trilogy-elementary
```

Untuk contoh HTML sederhana, file dapat dibuka langsung melalui browser. Sebagai contoh:

```text
project-html/hello-world.html
css-dasar/hello.html
belajar-js-dasar/hello-world.html
```

Anda juga dapat menggunakan ekstensi **Live Server** di Visual Studio Code.

## Menjalankan dengan Local Server

Penggunaan local server lebih disarankan karena beberapa browser membatasi module dan request asynchronous ketika halaman dibuka melalui protokol `file://`.

Jika Python tersedia:

```bash
python -m http.server 8000
```

Kemudian buka:

```text
http://localhost:8000
```

Contoh alamat materi:

```text
http://localhost:8000/project-html/hello-world.html
http://localhost:8000/css-layout/flexbox.html
http://localhost:8000/js-modul/index.html
http://localhost:8000/to-do-list-js/todolist.html
```

## HTML

Materi HTML dibagi menjadi dua kelompok utama.

### Dasar HTML

Direktori `project-html` mencakup contoh:

- Heading, paragraph, line break, dan formatting
- Link, bookmark, image, picture, audio, dan video
- List, table, `div`, `span`, ID, dan menu
- `iframe`, favicon, responsive meta tag, dan reserved characters
- Semantic elements seperti `header`, `nav`, `section`, `article`, dan `footer`

### Form HTML

Direktori `html-form` mencakup:

- `form`, `label`, `input`, `textarea`, dan `button`
- Checkbox, radio button, select, dan data list
- Input email, number, date, time, month, week, URL, file, dan color
- Hidden input, fieldset, multiple select, serta form validation

## CSS

### CSS Dasar

Direktori `css-dasar` digunakan untuk mempelajari:

- Inline, internal, dan external CSS
- Element, class, ID, attribute, universal, dan pseudo selector
- Cascade, inheritance, specificity, dan combinator
- Box model, border, padding, margin, width, dan height
- Font, text, background, gradient, opacity, filter, counter, dan transform

### CSS Layout

Direktori `css-layout` berisi eksperimen mengenai:

- `display`, float, positioning, dan z-index
- Flexbox: direction, wrap, order, grow, shrink, basis, gap, dan alignment
- Grid: column, row, area, gap, fraction unit, dan alignment
- Responsive layout dan media query

## JavaScript

### JavaScript Dasar

Direktori `belajar-js-dasar` berisi contoh kecil mengenai:

- Variable, tipe data, operator, dan template string
- Array dan object
- `if`, `switch`, ternary operator, serta nullish coalescing
- `for`, `while`, `do while`, `for in`, dan `for of`
- Function, parameter, return value, arrow function, generator, dan recursion
- Scope, closure, destructuring, getter/setter, dan optional chaining
- Error, strict mode, debugger, serta penggunaan console

### Object-Oriented Programming

Direktori `js-oop` membahas:

- Object, constructor function, dan prototype
- Class, constructor, property, dan method
- Public/private field dan private method
- Inheritance, `super`, static field, serta static method
- Operator `instanceof`, iterable, iterator, dan error class

### Standard Library

Direktori `js-lib` berisi eksperimen terhadap object bawaan JavaScript seperti:

`Array`, `Object`, `String`, `Number`, `BigInt`, `Boolean`, `Date`, `Math`, `RegExp`, `JSON`, `Map`, `Set`, `Symbol`, `Proxy`, dan `Reflect`.

### JavaScript Module

Direktori `js-modul` memperlihatkan penggunaan `type="module"`, termasuk:

- Named dan default export
- Import alias
- Multiple dan aggregate export
- Export function, variable, class, dan object
- Dynamic import

Jalankan bagian ini melalui local server agar proses import module tidak terhambat kebijakan keamanan browser.

### DOM dan Browser Events

Direktori `js-dom` berisi latihan mengenai:

- Document, element, node, attribute, dan text node
- Membuat, membaca, mengubah, serta menghapus element
- Event, event target, dan event global
- Form, table, style, class list, dan `innerHTML`
- Location, history, navigator, screen, timer, serta Web Storage

### Asynchronous JavaScript

Direktori `js-async` membahas:

- Callback
- Promise dan Promise static methods
- Fetch API dan AJAX
- Pengiriman query parameter, JSON, form, dan file
- `async` dan `await`
- Web Worker

Beberapa contoh menggunakan API eksternal atau endpoint latihan. Jika endpoint tersebut sudah tidak aktif, contoh masih dapat digunakan untuk mempelajari struktur request, tetapi responsnya mungkin gagal.

## Mini-project Todo List

File `to-do-list-js/todolist.html` merupakan latihan menggabungkan HTML, DOM, event, array, dan function dalam satu halaman.

Fitur yang tersedia:

- Menampilkan daftar kegiatan
- Menambahkan todo baru
- Menghapus todo dengan tombol **Done**
- Mencari atau memfilter todo secara langsung

Jalankan melalui:

```text
http://localhost:8000/to-do-list-js/todolist.html
```

Data Todo hanya tersimpan di memory browser dan akan kembali ke data awal saat halaman dimuat ulang.

## Urutan Belajar yang Disarankan

1. `project-html`
2. `html-form`
3. `css-dasar`
4. `css-layout`
5. `belajar-js-dasar`
6. `js-lib`
7. `js-oop`
8. `js-modul`
9. `js-dom`
10. `js-async`
11. `to-do-list-js`

## Cara Menggunakan Repository Ini

Untuk setiap materi:

1. Buka satu file dan baca source code-nya.
2. Jalankan file di browser.
3. Buka Developer Tools melalui tombol `F12`.
4. Periksa tab **Console**, **Elements**, dan **Network**.
5. Ubah nilai atau logika kecil, lalu amati hasilnya.
6. Tulis ulang contoh tanpa melihat source code untuk menguji pemahaman.

## Catatan

- Setiap file sengaja dibuat kecil dan berfokus pada satu konsep.
- Sebagian besar CSS dan JavaScript ditulis langsung di dalam file HTML untuk mempermudah proses belajar.
- Project ini tidak menggunakan build tool, framework, atau dependency npm.
- Contoh ditujukan untuk eksplorasi dan belum menerapkan seluruh standar aplikasi production.

the rest of the time learning HTML CSS and JS from zero

## Author

**MJ Mokhtar**

- GitHub: [@mjmokhtar](https://github.com/mjmokhtar)
- Website: [mjmokhtar.netlify.app](https://mjmokhtar.netlify.app)

## Lisensi

Repository ini belum memiliki file lisensi. Tambahkan file `LICENSE` jika source code akan digunakan atau didistribusikan dengan ketentuan lisensi tertentu.
