let tasks = [
    {
        id: 1,
        title: "Login API geliştirme",
        description: "Kullanıcı giriş işlemleri için backend endpointlerini hazırla",
        status: "pending",
        priority: "high",
        assignee: "Taha",
        createdAt: new Date().toISOString()
    },
    {
        id: 2,
        title: "Ana sayfa tasarımını tamamla",
        description: "Ana sayfanın eksik arayüz bölümlerini tamamla",
        status: "in-progress",
        priority: "medium",
        assignee: "Ayşe",
        createdAt: new Date().toISOString()
    },
    {
        id: 3,
        title: "API testlerini gerçekleştir",
        description: "Görev yönetimi endpointlerini Postman ile test et",
        status: "completed",
        priority: "high",
        assignee: "Mehmet",
        createdAt: new Date().toISOString()
    }
];

module.exports = tasks;