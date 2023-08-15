# Version Control and Branch Management (Git)

1. VCS atau Version Control System adalah teknologi yang digunakan untuk mengelola perubahan pada file dari waktu ke waktu.

2. VCS dibagi menjadi tiga jenis, yaitu:
    - Single User Version Control System (SCCS dan RCS)
    - Centralized Version Control System (CVS, Perforce, SVN atau Subversion, dan Microsoft Team Foundation Server)
    - Distributed Version Control System (Git, Mercurial, dan Bazaar)

3. Git adalah salah satu DVCS yang paling populer saat ini. Git dikembangkan oleh Linus Torvalds pada tahun 2005.

4. Staging Area di Git dibagi menjadi tiga bagian, yaitu:
    - Working Directory (tempat menyimpan file yang akan di-commit)
    - Staging Area (tempat menyimpan file yang akan di-commit, dengan dilakukan git add untuk menambahkan file - file yang akan di-commit)
    - Repository (tempat menyimpan file yang sudah di-commit, dengan dilakukan git commit)

5. commit message sebaiknya dibuat dengan singkat dan jelas, dengan memaparkan secara tegas apa yang dilakukan setiap commitnya.

6. Git Diff adalah perintah untuk melihat perbedaan antara file yang ada di Working Directory dengan file yang ada di Staging Area. Sedangkan Git Stash adalah perintah untuk menyimpan perubahan yang belum di-commit.

7. File .gitignore digunakan untuk mengabaikan file atau folder yang tidak ingin di-track oleh Git.

8. Git Log adalah perintah untuk melihat riwayat commit yang telah dilakukan. --oneline adalah salah satu opsi yang dapat digunakan untuk menampilkan riwayat commit dalam satu baris.

9. Git Checkout adalah perintah untuk berpindah branch.

10. Git Reset digunakan untuk mengembalikan file yang ada di Staging Area ke Working Directory. --soft digunakan ketika ingin mengembalikan file yang ada di Staging Area ke Working Directory, dan --hard digunakan ketika ingin mengembalikan file yang ada di Staging Area ke Working Directory dan menghapus riwayat commit yang telah dilakukan.

11. Git Push adalah perintah untuk mengirimkan perubahan yang ada di lokal repository ke remote repository. Git Pull adalah perintah untuk mengambil perubahan yang ada di remote repository ke lokal repository. Git Fetch adalah perintah untuk mengambil perubahan yang ada di remote repository ke lokal repository, namun tidak menggabungkan perubahan tersebut ke branch yang aktif.

12. Git Branching adalah salah satu fitur yang dimiliki oleh Git untuk mengelola branch. Git Branch adalah perintah untuk melihat branch yang ada di lokal repository. Git Branch -a adalah perintah untuk melihat branch yang ada di lokal repository dan remote repository. Git Branch -D adalah perintah untuk menghapus branch yang ada di lokal repository, meskipun branch tersebut belum di-merge. Git Branch -m adalah perintah untuk mengubah nama branch yang ada di lokal repository.

13. Git Merge adalah perintah untuk menggabungkan branch yang ada di lokal repository.

14. Git Pull Request adalah salah satu fitur yang dimiliki oleh Git untuk menggabungkan branch yang ada di remote repository. Proses penggabungan branch yang ada di remote repository menggunakan Git Pull Request dibagi menjadi tiga tahap, yaitu:
    - Buat Branch Baru
    - Commit dan Push ke dalam Branch
    - Buat Pull Request