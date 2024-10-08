# TrendingReps

## Описание
Это приложение синхронизируется с GitHun API и сохраняет лучшие репозитории в базу данных.

## Установка
1. Клонируйте репозиторий:
```bash
git clone https://github.com/AlinaTolchenitsyna/TrendingReps.git
```
2. Перейдите в директорию проекта:
```bash
cd TrendingReps
```
3. Создайте базу данных "trending_repos" в PostgreSQL:
```bash
psql -U postgres
CREATE DATABASE trending_repos;
```
Для подключения используется имя входа "postgres" и пароль "1234". При необходимости измените данные подключения в файле database.js.

4. Установите зависимости:
```bash
npm init -y
npm install express axios pg sequelize
```
5. Запустите сервер:
```bash
node server.js
```
6. В другом терминале запустите клиентский интерфейс:
```bash
node cli.js
```

### Использование
Выберите интересующую опцию в терминале клиентского интерфейса.
