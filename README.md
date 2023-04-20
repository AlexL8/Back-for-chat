# back-for-sasha

### Перед запуской проекта для установки зависимостей `npm install`
### Для запуска локально, команда `npm start`. Запустится на `9000` порте. <br /> в терминале должно появится `The application is listening on port 9000!` <br /> все запросы делать по `localhost:9000/`.



## Текущие реализованные запросы
 - #### GET запрос [localhost:9000/chat/messages](localhost:9000/chat/messages)
Результатом запроса будет message - Статус запроса и Response - массив объектов (список сообщений) `{message: string, response: [...{name: string, message: string, id: string}] ` }`
 - #### POST запрос [localhost:9000/chat/message](localhost:9000/chat/message)
Должен принимать в body объект `{name: string, message: string}`. Ответом на запрос будет статусы отправки 
 
