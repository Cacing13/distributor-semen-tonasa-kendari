# Design Reference — Website Distributor Semen Tonasa Kendari

Sumber: screenshot landing page "Creatifix" (referensi visual, bukan untuk ditiru kata-katanya — hanya gaya desain: layout, warna, tipografi, komponen).

---

## 1. Palet Warna

| Token | Hex (perkiraan) | Penggunaan |
|---|---|---|
| `--color-primary` | `#2F6FED` | Tombol utama, link aktif, ikon aksen, underline tab aktif |
| `--color-primary-dark` | `#1E2A4A` | Badge/overlay gelap (mis. kotak statistik), aksen kontras |
| `--color-bg` | `#FFFFFF` | Latar section utama (fitur, "cara pesan", footer) |
| `--color-bg-soft` | `#EEF1FA` | Latar section hero & CTA (lavender-abu sangat muda) |
| `--color-icon-badge` | `#E7EEFF` | Latar kotak ikon kecil pada card |
| `--color-text-heading` | `#16181D` | Judul, headline |
| `--color-text-body` | `#6B7280` | Paragraf, deskripsi |
| `--color-border` | `#ECECEC` | Garis pemisah tipis (mis. di atas footer) |

Catatan: palet dasar hanya 4–6 warna inti (biru sebagai satu-satunya warna aksen, sisanya netral). Untuk Semen Tonasa, aksen biru ini bisa dipertahankan atau diganti merah (mengikuti identitas warna Semen Tonasa) — sisanya (putih, abu netral, navy gelap untuk badge) tetap relevan.

## 2. Tipografi

- Satu keluarga font sans-serif modern/geometris (gaya mirip Inter, DM Sans, atau Plus Jakarta Sans) dipakai untuk headline maupun body — tidak ada campuran serif.
- Skala tipe:
  - H1 / Hero headline: besar, bold, leading rapat (±1.1), 2–3 baris, satu frasa diberi warna aksen biru (bukan italic/bold berlebihan).
  - H2 Section heading: medium-bold, ukuran sedang.
  - H3 Card title: bold, ukuran kecil-sedang.
  - Body: regular weight, warna abu (`--color-text-body`), line-height agak longgar.
  - Nav & link kecil: medium weight, ukuran kecil.
- Tidak ada teks all-caps untuk label; tidak ada eyebrow label bertitik-titik di atas heading.
- Lebar baris paragraf dijaga pendek (idealnya < 80 karakter) agar mudah dibaca.

## 3. Layout & Grid

- Container terpusat dengan max-width, padding kiri-kanan konsisten.
- Pola dominan: split 2 kolom asimetris (teks di satu sisi, visual/gambar di sisi lain), berganti arah antar section untuk variasi ritme (zig-zag).
- Navbar: logo kiri, menu horizontal tengah/kanan, tanpa tombol CTA di navbar (CTA ada di hero).
- Grid card produk/fitur: 3–4 kolom di desktop, collapse ke 1 kolom di mobile.
- Section "Our Property": heading center-aligned + tab filter horizontal di atas grid card.
- Jarak vertikal antar section cukup lega (generous whitespace), tidak padat.

```
[ Logo ]        [ Nav items ]
--------------------------------
[ Headline + CTA ]   [ Visual besar ]      <- hero, bg soft, rounded
--------------------------------
[ Heading kiri ]      [ deskripsi kanan ]
[ Card ] [ Card ] [ Card ]                 <- 3 kolom
--------------------------------
   [ Heading center ]
   [ Tab filter: Popular | Kategori A | B | C ]
   [ Card ][ Card ][ Card ][ Card ]         <- 4 kolom gambar
--------------------------------
[ Teks + CTA ]        [ Gambar + badge ]   <- bg soft, rounded container
--------------------------------
[ Teks + link ]        [ 2 small card ]
--------------------------------
[ Foto + badge ]        [ Teks + link ]
--------------------------------
[ Footer: CTA kecil | kolom link | sosmed ]
```

## 4. Spacing & Radius

- Border-radius konsisten medium (±12–16px) untuk card, tombol, dan gambar — bukan 0 (tajam) dan bukan full-pill di semua tempat.
- Card memakai shadow lembut (`box-shadow: 0 4px 20px rgba(0,0,0,0.06)`), bukan border tebal.
- Padding internal card cukup lega; jarak antar card konsisten (grid gap seragam).
- Section hero & CTA dibungkus container dengan radius besar dan background soft, memberi kesan "blok" yang jelas dari section putih di sekitarnya.

## 5. Komponen

- **Tombol primer**: solid biru, teks putih, radius medium, tanpa ikon panah berlebihan — contoh "Join for free".
- **Tombol sekunder/link**: teks biru polos tanpa background, kadang disertai panah kecil untuk link "Learn more".
- **Card fitur**: ikon kecil dalam kotak badge warna muda di pojok atas, judul bold, deskripsi singkat, link "Read more" di bawah.
- **Card produk/properti**: gambar penuh di atas (rounded), judul + deskripsi singkat + link "See More" di bawah gambar.
- **Tab filter**: horizontal, item aktif ditandai warna biru + underline tipis, item nonaktif abu-abu.
- **Badge statistik**: kotak gelap (navy) dengan angka besar + label kecil, diletakkan menumpuk di atas gambar (overlay).
- **Navbar**: flat, tanpa background solid mencolok, cukup logo + menu teks.
- **Footer**: sederhana, 3 kolom link + baris bawah berisi legal links & ikon sosial dalam lingkaran biru kecil.

## 6. Gaya Gambar/Ikon

- Gambar hero: ilustrasi/render 3D abstrak sebagai elemen visual dramatis (bukan foto produk) — untuk Semen Tonasa bisa diganti foto nyata: tumpukan sak semen atau proses pengiriman, tetap dengan komposisi "gambar besar mengisi sisi kanan hero".
- Gambar produk/galeri: foto nyata, warna natural, rounded corner, tanpa filter berlebihan.
- Ikon: line/solid sederhana, ukuran kecil, selalu dalam kotak badge berwarna muda — bukan ikon besar berdiri sendiri.
- Elemen dekoratif (garis putus-putus melingkar di foto testimoni) dipakai sangat terbatas, hanya di satu titik sebagai aksen, bukan diulang di semua section.

## 7. Interaksi/Motion

- Minim animasi; hanya perubahan warna/underline halus saat hover pada link dan tab aktif.
- Tidak ada efek fade-slide-up massal di setiap section — kesan keseluruhan tenang dan statis, fokus ke kejelasan konten.

## 8. Catatan Adaptasi untuk Distributor Semen Tonasa Kendari

- Ganti aksen biru → bisa dipertahankan (netral, profesional) atau diselaraskan dengan merah khas Semen Tonasa; navy gelap tetap dipakai untuk elemen kontras (mis. badge/CTA akhir).
- Hero: ganti ilustrasi abstrak dengan foto nyata sak semen/truk pengiriman, pertahankan proporsi "teks headline kiri + visual besar kanan".
- Section "Our Property" (grid 4 kolom + tab) diadaptasi menjadi section "Produk" (hanya 2 item: PCC 40kg & 50kg) — cukup pakai 2 card besar, bukan grid 4 kolom, karena jumlah produk sedikit.
- Section testimoni CEO bisa diadaptasi jadi testimoni pelanggan (toko bangunan/kontraktor) atau dihilangkan jika belum ada data asli.
- Semua tombol CTA ("Join for free", "Learn more") pada referensi ini diganti menjadi CTA WhatsApp ("Chat WhatsApp Sekarang", "Pesan via WhatsApp") sesuai kebutuhan proyek.
