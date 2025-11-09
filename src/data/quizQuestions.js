export const quizQuestions = [
    {
        id: 1,
        question: "Який хук використовується для створення стану в функціональному компоненті React?",
        options: ["useEffect", "useState", "useContext", "useReducer"],
        correctAnswer: 1,
        difficulty: "easy"
    },
    {
        id: 2,
        question: "Що таке JSX?",
        options: ["JavaScript XML", "Спеціальна версія JavaScript", "Бібліотека для стану", "База даних"],
        correctAnswer: 0,
        difficulty: "easy"
    },
    {
        id: 3,
        question: "Як в React називаються дані, що передаються від батьківського компонента до дочірнього?",
        options: ["state", "props", "context", "arguments"],
        correctAnswer: 1,
        difficulty: "easy"
    },
    {
        id: 4,
        question: "Що повертає хук `useState`?",
        options: ["Змінну стану", "Функцію для оновлення", "Масив з [стан, функція оновлення]", "Об'єкт з налаштуваннями"],
        correctAnswer: 2,
        difficulty: "easy"
    },
    {
        id: 5,
        question: "Який метод масиву найчастіше використовується для рендерингу списків у JSX?",
        options: [".forEach()", ".filter()", ".reduce()", ".map()"],
        correctAnswer: 3,
        difficulty: "easy"
    },
    {
        id: 6,
        question: "Що таке 'компонент' в React?",
        options: ["Звичайна функція JS", "HTML-тег", "Незалежний блок коду, що повертає JSX", "Змінна CSS"],
        correctAnswer: 2,
        difficulty: "easy"
    },
    {
        id: 7,
        question: "Яка команда створює новий React-додаток?",
        options: ["npm start", "npm new-react-app", "npx create-react-app", "react-init"],
        correctAnswer: 2,
        difficulty: "easy"
    },
    {
        id: 8,
        question: "Що таке React Fragment?",
        options: ["Компонент для помилок", "Спосіб згрупувати елементи без зайвого вузла в DOM", "Частина життєвого циклу", "Бібліотека для маршрутизації"],
        correctAnswer: 1,
        difficulty: "easy"
    },
    {
        id: 9,
        question: "Як додати коментар всередині JSX?",
        options: ["// коментар", "<!-- коментар -->", "{/* коментар */}", "/* коментар */"],
        correctAnswer: 2,
        difficulty: "easy"
    },
    {
        id: 10,
        question: "Що таке 'ключ' (`key`) в React-списках?",
        options: ["Пароль доступу", "Унікальний атрибут для ідентифікації елементів", "CSS-клас", "Індекс елемента"],
        correctAnswer: 1,
        difficulty: "easy"
    },
    {
        id: 11,
        question: "Що таке 'prop drilling' в React?",
        options: ["Техніка оптимізації", "Передача props через багато рівнів компонентів", "Помилка в коді", "Патерн проектування"],
        correctAnswer: 1,
        difficulty: "medium"
    },
    {
        id: 12,
        question: "Який життєвий цикл методу викликається після того, як компонент був вмонтований в DOM?",
        options: ["componentWillMount", "componentDidUpdate", "componentDidMount", "shouldComponentUpdate"],
        correctAnswer: 2,
        difficulty: "medium"
    },
    {
        id: 13,
        question: "Що таке Virtual DOM?",
        options: ["Пряма маніпуляція з DOM", "Копія реального DOM в пам'яті", "Плагін для браузера", "Альтернатива HTML"],
        correctAnswer: 1,
        difficulty: "medium"
    },
    {
        id: 14,
        question: "Для чого використовується хук `useEffect`?",
        options: ["Для створення стану", "Для виконання побічних ефектів (напр., запити до API)", "Для рендерингу HTML", "Для оптимізації"],
        correctAnswer: 1,
        difficulty: "medium"
    },
    {
        id: 15,
        question: "Що таке React Context API?",
        options: ["Спосіб уникнути 'prop drilling'", "Бібліотека для анімацій", "Інструмент для тестування", "Метод для роботи з формами"],
        correctAnswer: 0,
        difficulty: "medium"
    },
    {
        id: 16,
        question: "Що робить `React.StrictMode`?",
        options: ["Прискорює додаток", "Додає додаткові перевірки та попередження в режимі розробки", "Забороняє класові компоненти", "Стискає фінальний білд"],
        correctAnswer: 1,
        difficulty: "medium"
    },
    {
        id: 17,
        question: "У чому різниця між `==` та `===` в JavaScript?",
        options: ["Різниці немає", "`===` перевіряє тип і значення, `==` - тільки значення", "`==` перевіряє тип і значення, `===` - тільки значення", "`===` використовується тільки в React"],
        correctAnswer: 1,
        difficulty: "medium"
    },
    {
        id: 18,
        question: "Що таке 'вища функція' (higher-order function)?",
        options: ["Функція, що повертає число", "Функція, що приймає іншу функцію як аргумент або повертає її", "Функція, що завжди повертає true", "Функція з великої літери"],
        correctAnswer: 1,
        difficulty: "medium"
    },
    {
        id: 19,
        question: "Що таке 'чиста функція' (pure function)?",
        options: ["Функція без аргументів", "Функція, що повертає однаковий результат для однакових аргументів і не має побічних ефектів", "Функція, що працює тільки з числами", "Функція, що нічого не повертає"],
        correctAnswer: 1,
        difficulty: "medium"
    },
    {
        id: 20,
        question: "Що таке 'стан піднятий вгору' (lifting state up)?",
        options: ["Зберігання стану в CSS", "Переміщення стану до найближчого спільного предка компонентів", "Видалення стану", "Зберігання стану в `localStorage`"],
        correctAnswer: 1,
        difficulty: "medium"
    },
    {
        id: 21,
        question: "Для чого використовується хук `useMemo`?",
        options: ["Для побічних ефектів", "Для глобального стану", "Для мемоізації (кешування) результатів обчислень", "Для доступу до DOM"],
        correctAnswer: 2,
        difficulty: "hard"
    },
    {
        id: 22,
        question: "Як передати дані від дочірнього компонента до батьківського?",
        options: ["Через props", "Напряму неможливо", "Через виклик callback-функції, переданої через props", "Через CSS"],
        correctAnswer: 2,
        difficulty: "hard"
    },
    {
        id: 23,
        question: "У чому різниця між `useMemo` та `useCallback`?",
        options: ["Різниці немає", "`useMemo` мемоізує значення, `useCallback` - функцію", "`useCallback` мемоізує значення, `useMemo` - функцію", "Це застарілі хуки"],
        correctAnswer: 1,
        difficulty: "hard"
    },
    {
        id: 24,
        question: "Що таке 'контрольований компонент' (controlled component) у формах?",
        options: ["Компонент, який неможливо змінити", "Компонент, стан якого контролюється React (через `useState`)", "Компонент, стан якого контролюється DOM", "Компонент з валідацією"],
        correctAnswer: 1,
        difficulty: "hard"
    },
    {
        id: 25,
        question: "Для чого використовуються React Portals?",
        options: ["Для телепортації між сторінками", "Для рендерингу дочірніх компонентів в DOM-вузол поза батьківським", "Для оптимізації зображень", "Для з'єднання з базою даних"],
        correctAnswer: 1,
        difficulty: "hard"
    },
    {
        id: 26,
        question: "Що таке 'компонент вищого порядку' (Higher-Order Component, HOC)?",
        options: ["Компонент, що рендерить інші компоненти", "Функція, що приймає компонент і повертає новий компонент", "Найголовніший компонент в додатку", "Компонент з `z-index: 9999`"],
        correctAnswer: 1,
        difficulty: "hard"
    },
    {
        id: 27,
        question: "Для чого використовується хук `useReducer`?",
        options: ["Для зменшення розміру коду", "Як альтернатива `useState` для складної логіки стану", "Для роботи з Redux", "Для анімацій"],
        correctAnswer: 1,
        difficulty: "hard"
    },
    {
        id: 28,
        question: "Що таке 'tree shaking'?",
        options: ["Анімація для дерев", "Процес видалення 'мертвого' коду під час збірки проєкту", "Спосіб візуалізації ієрархії компонентів", "Помилка в React"],
        correctAnswer: 1,
        difficulty: "hard"
    },
    {
        id: 29,
        question: "Що таке 'code splitting'?",
        options: ["Розділення коду на кілька файлів вручну", "Розбиття коду на менші частини, які можна завантажувати за вимогою", "Коментування коду", "Форматування коду"],
        correctAnswer: 1,
        difficulty: "hard"
    },
    {
        id: 30,
        question: "Що таке 'мемоізація' в контексті React?",
        options: ["Збереження даних в пам'яті браузера", "Процес кешування результатів виконання функцій для уникнення повторних обчислень", "Автоматичне створення документації", "Запис дій користувача"],
        correctAnswer: 1,
        difficulty: "hard"
    }
];