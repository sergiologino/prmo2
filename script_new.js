document.addEventListener("DOMContentLoaded", function () {
    // ... (ваш текущий JavaScript код) ...

    // Обработчик изменения даты
    document.getElementById("date").addEventListener("change", function () {
        const selectedDate = this.value;
        if (selectedDate < getCurrentDate()) {
            // Загрузите ранее введенные данные с сервера
            loadPreviousData(selectedDate);
        }
    });

    // Функция для загрузки ранее введенных данных
    function loadPreviousData(selectedDate) {
        // Здесь отправьте запрос на сервер, чтобы получить ранее введенные данные
        // Пример:
        // fetch(`/api/previous-data?date=${selectedDate}&department=${getSelectedDepartment()}&group=${getSelectedGroup()}`)
        //     .then(response => response.json())
        //     .then(data => {
        //         // Обновите значения полей prmo1 и prmo2 с полученными данными
        //         // Например, data.prmo1 и data.prmo2
        //         document.getElementById("prmo1").value = data.prmo1;
        //         document.getElementById("prmo2").value = data.prmo2;
        //     })
        //     .catch(error => console.error('Ошибка при получении ранее введенных данных:', error));
    }

    // Функция для получения текущей даты
    function getCurrentDate() {
        const currentDate = new Date();
        const year = currentDate.getFullYear();
        const month = String(currentDate.getMonth() + 1).padStart(2, "0");
        const day = String(currentDate.getDate()).padStart(2, "0");
        return `${year}-${month}-${day}`;
    }

    // Функция для получения выбранного отдела
    function getSelectedDepartment() {
        return document.getElementById("department").value;
    }

    // Функция для получения выбранной группы
    function getSelectedGroup() {
        return document.getElementById("group").value;
    }
});
