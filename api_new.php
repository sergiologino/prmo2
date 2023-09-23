// ... (ваш текущий PHP код) ...

// Обработка запроса на получение ранее введенных данных
if ($_SERVER["REQUEST_METHOD"] === "GET" && isset($_GET["date"]) && isset($_GET["department"]) && isset($_GET["group"])) {
    $date = $_GET["date"];
    $department = $_GET["department"];
    $group = $_GET["group"];

    // Здесь выполните запрос к базе данных, чтобы получить ранее введенные данные
    // Пример:
    // $sql = "SELECT prmo1, prmo2 FROM your_table WHERE date = ? AND department = ? AND group = ?";
    // $stmt = $conn->prepare($sql);
    // $stmt->bind_param("sss", $date, $department, $group);
    // $stmt->execute();
    // $stmt->bind_result($prmo1, $prmo2);
    // $stmt->fetch();
    // $stmt->close();

    // Отправьте данные обратно на клиент
    // echo json_encode(["prmo1" => $prmo1, "prmo2" => $prmo2]);
}

// ... (ваш текущий PHP код) ...
