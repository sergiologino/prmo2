// Отправка данных на сервер
function saveDataToServer() {
    const date = document.getElementById("date").value;
    const formData = new FormData(document.getElementById("dataForm"));
    const data = {};

    for (const [key, value] of formData.entries()) {
        data[key] = value;
    }

    // Отправка данных на сервер с использованием fetch API
    fetch("api.php", {
        method: "POST",
        body: JSON.stringify({ date, data }),
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then((response) => response.json())
        .then((result) => {
            if (result.success) {
                alert("Данные успешно сохранены.");
            } else {
                alert("Произошла ошибка при сохранении данных.");
            }
        })
        .catch((error) => {
            console.error("Ошибка при отправке данных на сервер:", error);
        });
}
