# 📄 Terabox API Documentation

## 🔗 Base URL

```
https://terabox.sonzaix.xyz/api
```

---

## 🔐 Authentication

Semua request harus menyertakan parameter query `key`.

| Parameter | Tipe   | Wajib | Keterangan                          |
|-----------|--------|-------|-------------------------------------|
| `key`     | string | ✅     | API key ambil [Disini](https://t.me/November2kLab)   |

---

## 📥 Endpoint

### 📘 1. Get File Info & Direct Download Links

Mendapatkan informasi file dari URL Terabox serta link download langsung dan thumbnail.

#### ▶️ Endpoint

```
GET /api
```

#### 🧾 Query Parameters

| Parameter | Tipe   | Wajib | Contoh                                                                 |
|-----------|--------|-------|------------------------------------------------------------------------|
| `key`     | string | ✅     | `rahasia`                                                             |
| `url`     | string | ✅     | `https://1024terabox.com/s/...` |

#### 🧪 Contoh cURL

```bash
curl 'https://terabox.sonzaix.xyz/api?key=rahasia&url=https://1024terabox.com/s/...'
```

---

## ✅ Contoh Response Berhasil

```json
{
  "status": "success",
  "total": 2,
  "files": [
    {
      "filename": "Video A.mp4",
      "size": "123456789",
      "download_url": "https://dlink.example.com/file...",
      "thumbnail": "https://thumb.example.com/file.jpg"
    },
    {
      "filename": "Video B.mp4",
      "size": "987654321",
      "download_url": "https://dlink.example.com/file...",
      "thumbnail": null
    }
  ]
}
```

---

## ❌ Contoh Response Gagal

```json
{
  "status": "error",
  "message": "Unauthorized"
}
```

```json
{
  "status": "error",
  "message": "No files found"
}
```

---

## 🚧 Error Codes

| Code | Penjelasan                                 |
|------|--------------------------------------------|
| 400  | Parameter kurang / URL tidak valid         |
| 401  | API key salah atau tidak disertakan        |
| 404  | Endpoint tidak ditemukan                   |
| 502  | Gagal komunikasi ke server Terabox         |

---  

## 📬 Kontak

Untuk pertanyaan atau support, hubungi: [Sonzai X シ](https://t.me/November2k)
