# TASKFLOW – Görev ve Proje Yönetim Sistemi API

## 1. Proje Hakkında

TaskFlow, ekiplerin ve kullanıcıların görevlerini daha düzenli bir şekilde takip edebilmesi amacıyla geliştirilen bir görev ve proje yönetim sistemi API projesidir.

Projenin backend tarafı Node.js ve Express.js kullanılarak geliştirilmiştir. Sistem REST API mantığıyla çalışmaktadır. Kullanıcılar API üzerinden yeni görev oluşturabilir, mevcut görevleri görüntüleyebilir, belirli bir görevin detayına ulaşabilir, görev bilgilerini güncelleyebilir ve görev silebilir.

Bu proje ile temel backend geliştirme kavramlarının uygulanması amaçlanmıştır. Express.js ile sunucu oluşturma, routing yapısı, controller kullanımı, middleware geliştirme, HTTP metotları ve durum kodları gibi konular proje içerisinde uygulanmıştır.

## 2. Proje Senaryosu

Bir ekip içerisinde aynı anda birden fazla görev yürütülebilir. Görevlerin kim tarafından yapılacağı, öncelik seviyesi ve mevcut durumu gibi bilgilerin takip edilmesi gerekir.

TaskFlow sistemi bu ihtiyaca yönelik basit bir backend çözümü sunmaktadır. Her görev sistem içerisinde benzersiz bir ID ile tutulmaktadır.

Bir görev için başlık, açıklama, durum, öncelik seviyesi, görevin atandığı kişi ve oluşturulma tarihi gibi bilgiler saklanmaktadır.

API sayesinde görevler üzerinde temel CRUD işlemleri gerçekleştirilebilmektedir.

CRUD işlemleri:

- Create: Yeni görev oluşturma
- Read: Görevleri görüntüleme
- Update: Görev bilgilerini güncelleme
- Delete: Görev silme

## 3. Kullanılan Teknolojiler

Projenin geliştirilmesinde aşağıdaki teknolojiler kullanılmıştır:

- Node.js
- Express.js
- JavaScript
- REST API
- Postman
- Git ve GitHub

Node.js uygulamanın çalışma ortamı olarak, Express.js ise HTTP isteklerinin yönetilmesi ve API endpointlerinin oluşturulması için kullanılmıştır.

Postman, geliştirilen API endpointlerinin test edilmesi amacıyla kullanılmaktadır.

## 4. Veri Modeli

TaskFlow sistemindeki temel veri yapısı görev nesnesidir.

Bir görev aşağıdaki alanlardan oluşmaktadır:

| Alan | Açıklama |
|---|---|
| id | Görevin benzersiz kimlik numarası |
| title | Görevin başlığı |
| description | Görevin açıklaması |
| status | Görevin mevcut durumu |
| priority | Görevin öncelik seviyesi |
| assignee | Görevin atandığı kişi |
| createdAt | Görevin oluşturulma tarihi |

Örnek görev nesnesi:

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

Projenin mevcut sürümünde görevler uygulama belleğinde bir JavaScript dizisi içerisinde tutulmaktadır. Sunucu yeniden başlatıldığında veriler başlangıç durumuna dönmektedir.

## 5. API Mimarisi

Proje daha düzenli ve anlaşılır bir yapı oluşturmak amacıyla farklı katmanlara ayrılmıştır.

### Routes

`taskRoutes.js` dosyası API endpointlerini ve bu endpointlerde hangi controller fonksiyonlarının çalışacağını belirler.

### Controllers

`taskController.js` dosyası görevler üzerinde gerçekleştirilen CRUD işlemlerinin iş mantığını içerir.

### Data

`tasks.js` dosyası uygulamada kullanılan başlangıç görev verilerini içerir.

### Middleware

`logger.js` dosyası API'ye gelen HTTP isteklerinin metodunu, endpoint bilgisini ve zaman bilgisini terminale kaydeder.

### App

`app.js` dosyası Express uygulamasını oluşturur, middleware ve route yapılarını uygulamaya bağlar.

### Server

`server.js` uygulamayı belirtilen port üzerinden çalıştırır.

## 6. API Endpoint Tasarımı

TaskFlow API içerisinde aşağıdaki endpointler bulunmaktadır:

| HTTP Metodu | Endpoint | Açıklama |
|---|---|---|
| POST | `/api/tasks` | Yeni görev oluşturur |
| GET | `/api/tasks` | Tüm görevleri listeler |
| GET | `/api/tasks/:id` | Belirli bir görevin detayını getirir |
| PUT | `/api/tasks/:id` | Belirli bir görevin bilgilerini günceller |
| DELETE | `/api/tasks/:id` | Belirli bir görevi siler |

Bu endpointler REST API prensiplerine uygun HTTP metotları kullanılarak hazırlanmıştır.

## 7. Logger Middleware

Projede gelen API isteklerinin takip edilmesi amacıyla özel bir Logger Middleware geliştirilmiştir.

Logger her HTTP isteğinde aşağıdaki bilgileri terminale yazdırmaktadır:

- İstek zamanı
- HTTP metodu
- İstek yapılan endpoint

Örnek logger çıktısı:

```text
[2026-10-14T13:00:47.554Z] GET /api/tasks
```

Middleware içerisinde `next()` fonksiyonu kullanılarak istek kaydedildikten sonra uygulamanın bir sonraki işlemine devam etmesi sağlanmaktadır.

## 8. API Testleri

Geliştirilen CRUD endpointleri Postman kullanılarak test edilmiştir.

Testlerde görev oluşturma, görev listeleme, görev detayı görüntüleme, görev güncelleme ve görev silme işlemlerinin doğru şekilde çalıştığı kontrol edilmiştir.

Başarılı işlemlerde `200 OK` ve yeni görev oluşturma işleminde `201 Created` durum kodu kullanılmaktadır. Bulunamayan görevler için `404 Not Found` cevabı döndürülmektedir.

## 9. Sonuç

TaskFlow projesi ile Node.js ve Express.js kullanılarak temel bir görev yönetimi REST API sistemi geliştirilmiştir.

Proje içerisinde routing, controller, middleware ve veri katmanları birbirinden ayrılarak daha düzenli bir backend mimarisi oluşturulmuştur. CRUD işlemleri ve Logger Middleware başarıyla uygulanmış ve API endpointleri Postman üzerinden test edilmiştir.

Bu yapı gelecekte veritabanı bağlantısı, kullanıcı doğrulama, görev filtreleme, arama ve sayfalama gibi yeni özelliklerle geliştirilebilir.