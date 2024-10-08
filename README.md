# TrendingReps

## Описание
Это приложение синхронизируется с GitHun API и сохраняет лучшие репозитории в базу данных.

## Установка
1. Клонируйте репозиторий:
```bash
git clone https://github.com/AlinaTolchenitsyna/TrendingReps.git
```
2. Перейдите в директорию проекта:
3. ```bash
cd TrendingReps
```
4. Создайте базу данных "trending_repos" в PostgreSQL:
```bash
psql -U postgres
CREATE DATABASE trending_repos;
```
Для подключения используется имя входа "postgres" и пароль "1234". При необходимости измените данные подключения в файле database.js.
5. Установите зависимости:
```bash
npm init -y
npm install express axios pg sequelize
```
6. Запустите сервер:
```bash
node server.js
```
7. В другом терминале запустите клиентский интерфейс:
8. ```bash
node cli.js
```

### Использование
Выберите интересующую опцию в терминале клиентского интерфейса.
