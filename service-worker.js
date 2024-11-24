<!DOCTYPE html>
<html lang="ar">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>تطبيق تنزيل الفيديوهات الفاخر</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
    
    <!-- إضافة رابط Manifest الخاص بالتطبيق -->
    <link rel="manifest" href="/manifest.json">
    
    <!-- إضافة رابط إلى service-worker.js -->
    <script src="/service-worker.js"></script>

    <style>
        body {
            background-color: #f0f0f0;
        }
        .container {
            max-width: 800px;
        }
        .card-header {
            background-color: #282828;
            color: white;
            font-size: 1.5rem;
        }
        .btn-primary {
            background-color: #4CAF50;
            border-color: #4CAF50;
        }
        .form-control {
            border-radius: 10px;
        }
        .list-group-item {
            border: 1px solid #ddd;
        }
    </style>
</head>
<body>
    <div class="container mt-5">
        <div class="card">
            <div class="card-header text-center">تطبيق تنزيل الفيديوهات الفاخر</div>
            <div class="card-body">
                <form method="POST">
                    <div class="mb-3">
                        <label for="urls" class="form-label">أدخل روابط الفيديو (رابط في كل سطر)</label>
                        <textarea class="form-control" id="urls" name="urls" rows="5" placeholder="https://example.com/video1"></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary w-100">تنزيل الفيديوهات</button>
                </form>
            </div>
        </div>
    </div>
</body>
</html>
