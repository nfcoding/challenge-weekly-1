# Challenge Weekly 1

Dalam chalenge ini anda di tuntut untuk belajar membaca kode dan merubah kode yang ada sesuai spesifikasi yang diberikan

### Hanya Ubah file berikut

1. InputPasswordChalenge.jsx
2. MouseEnterLeaveChalenge.jsx
3. InputTextChalenge.jsx

> ### Soal terdapat di masing-masing file


### Petunjuk

1. Dalam ```ComponentBackgroundColor.jsx``` ada beberapa contoh penggunaan yang bisa di pelajari
2. Attribute dengan nilai string wajib menggunakan kutip 2
    ```js
    <Component attribute="nilai" />
    ```
3. Attribute dengan nilai Boolean true hanya cukup ditulis attribute nya saja tanpa nilai
    ```js
    <Component attribute />
    ```
4. Selain 2 jenis di atas gunakan kurung kurawal tanpa kutip
    ```js
    <Component attribute={variable} />
    ```

### Ketentuan

1. clone repo
    ```sh
        git clone https://github.com/sendi-caio/challenge-weekly-1.git
    ```
2. buat branch dengan nama panggilan kalian
    ```sh
        git checkout -b "nama_panggilan"
    ```
3. buat repository di account github dengan nama `challenge-weekly-1`
4. tambah remote dengan nama **copy** jangan lupa sesuaikan nama akun
   ```sh
        git remote add copy https://github.com/[NAMA_AKUN]/challenge-weekly-1.git
   ```
5. add commit dan push hasil pekerjaan anda ke dalam git remote tersebut terhadap branch di langkah ke 2
   ```sh
        git add .
        git commit -m challenge_solution
        git push -u copy HEAD
   ```