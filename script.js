document.addEventListener("DOMContentLoaded", function () {
    // Получите элементы формы и поля для ввода
    const loginForm = document.getElementById("loginForm");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");

    // Попробуйте получить сохраненные данные пользователя
    const savedUsername = localStorage.getItem("username");
    const savedPassword = localStorage.getItem("password");

    if (savedUsername && savedPassword) {
        // Если сохраненные данные есть, автоматически заполните поля и отправьте форму
        usernameInput.value = savedUsername;
        passwordInput.value = savedPassword;
        login(savedUsername, savedPassword);
    }

    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const username = usernameInput.value;
        const password = passwordInput.value;

        // Сохраните данные пользователя в localStorage для автоматической авторизации
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);

        // Вызов функции для отправки данных на сервер и авторизации
        login(username, password);
    });

    // Функция для отправки данных на сервер и авторизации
    function login(username, password) {
        // Отправьте данные на сервер для авторизации
        // Здесь вы можете использовать fetch() или другой метод
        // Пример:
        // fetch('/api/login', {
        //     method: 'POST',
        //     body: JSON.stringify({ username, password }),
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // })
        // .then(response => response.json())
        // .then(data => {
        //     if (data.success) {
        //         // Авторизация успешна, выполните необходимые действия
        //     } else {
        //         // Ошибка авторизации, обработайте её
        //     }
        // })
        // .catch(error => console.error('Ошибка при авторизации:', error));
    }
});
    // Функция для загрузки групп и атрибутов с сервера
    function loadGroupsAndAttributes() {
        // Здесь отправьте запрос на сервер для получения групп и атрибутов
        // и обновите содержимое groupAttributesDiv с полученными данными
        // Пример:
        // fetch('/api/groups-and-attributes')
        //     .then(response => response.json())
        //     .then(data => {
        //         // Обновите содержимое groupAttributesDiv
        //         // Например, создайте элементы для отображения групп и атрибутов
        //         // и добавьте их в groupAttributesDiv
        //     })
        //     .catch(error => console.error('Ошибка при получении данных:', error));
    }
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
