# TaskFlow API

TaskFlow API, görev ve proje yönetimi için geliştirilmiş basit bir REST API projesidir. Bu proje Node.js ve Express.js kullanılarak geliştirilmiştir.

API üzerinden görev oluşturma, görevleri listeleme, belirli bir görevin detayını görüntüleme, görev güncelleme ve görev silme işlemleri gerçekleştirilebilir.

## Kullanılan Teknolojiler

- Node.js
- Express.js
- JavaScript
- Postman

## Proje Özellikleri

TaskFlow API aşağıdaki temel özellikleri içermektedir:

- Yeni görev oluşturma
- Tüm görevleri listeleme
- Belirli bir görevin detayını görüntüleme
- Görev güncelleme
- Görev silme
- Gelen API isteklerini Logger Middleware ile terminale kaydetme

## Proje Klasör Yapısı

```text
taskflow-api/
│
├── screenshots/
│   ├── 01-create-task.png
│   ├── 02-list-tasks.png
│   ├── 03-get-task-by-id.png
│   ├── 04-update-task.png
│   └── 05-delete-task.png
│
├── src/
│   ├── controllers/
│   │   └── taskController.js
│   ├── data/
│   │   └── tasks.js
│   ├── middleware/
│   │   └── logger.js
│   ├── routes/
│   │   └── taskRoutes.js
│   └── app.js
│
├── .gitignore
├── package-lock.json
├── package.json
├── PROJE-TANITIM.md
├── README.md
└── server.js
```

## Kurulum

Projeyi bilgisayarınıza indirdikten sonra proje klasöründe terminali açın.

Gerekli paketleri yüklemek için:

```bash
npm install
```

Uygulamayı başlatmak için:

```bash
npm start
```

Sunucu varsayılan olarak aşağıdaki adreste çalışır:

```text
http://localhost:3000
```

## API Endpointleri

| Metot | Endpoint | Açıklama |
|---|---|---|
| POST | `/api/tasks` | Yeni görev oluşturur |
| GET | `/api/tasks` | Tüm görevleri listeler |
| GET | `/api/tasks/:id` | Belirli bir görevin detayını getirir |
| PUT | `/api/tasks/:id` | Belirli bir görevi günceller |
| DELETE | `/api/tasks/:id` | Belirli bir görevi siler |

## Görev Veri Yapısı

Bir görev aşağıdaki alanlardan oluşmaktadır:

```json
{
    "id": 1,
    "title": "Login API geliştirme",
    "description": "Kullanıcı giriş işlemleri için backend endpointlerini hazırla",
    "status": "pending",
    "priority": "high",
    "assignee": "Taha",
    "createdAt": "2026-10-14T12:00:00.000Z"
}
```

## Yeni Görev Oluşturma Örneği

**POST**

```text
/api/tasks
```

Örnek JSON isteği:

```json
{
    "title": "Kullanıcı profil sayfasını geliştir",
    "description": "Kullanıcı bilgilerinin görüntülenebileceği profil özelliğini hazırla",
    "status": "pending",
    "priority": "high",
    "assignee": "Taha"
}
```

Başarılı bir oluşturma işleminde API `201 Created` durum kodu döndürür.

## Logger Middleware

Projede gelen HTTP isteklerini takip etmek için Logger Middleware kullanılmaktadır.

Logger aşağıdaki bilgileri terminale yazdırır:

- İstek tarihi ve saati
- HTTP metodu
- İstek yapılan endpoint

Örnek:

```text
[2026-10-14T13:00:47.554Z] GET /api/tasks
```

## HTTP Durum Kodları

API içerisinde temel olarak aşağıdaki HTTP durum kodları kullanılmaktadır:

- `200 OK` - İstek başarıyla gerçekleştirildi.
- `201 Created` - Yeni görev başarıyla oluşturuldu.
- `404 Not Found` - İstenen görev bulunamadı.

## Veri Saklama

Bu proje eğitim amacıyla geliştirilmiştir. Görev verileri uygulama belleğinde tutulmaktadır. Bu nedenle sunucu yeniden başlatıldığında görev verileri başlangıç durumuna döner.

## API Testleri

CRUD endpointleri Postman kullanılarak test edilmiştir.

Test edilen işlemler:

- [Görev oluşturma](screenshots/01-create-task.png)
- [Görev listeleme](screenshots/02-list-tasks.png)
- [Görev detayı görüntüleme](screenshots/03-get-task-by-id.png)
- [Görev güncelleme](screenshots/04-update-task.png)
- [Görev silme](screenshots/05-delete-task.png)

## Proje Dokümantasyonu

Projenin ihtiyaç analizi, veri modeli ve API tasarımı hakkında ayrıntılı bilgi için [PROJE-TANITIM.md](PROJE-TANITIM.md) dosyasını inceleyebilirsiniz.

## Geliştirici

Taha Neccaroğlu