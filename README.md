### Hexlet tests and linter status:
[![Actions Status](https://github.com/kkillmemommyy/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/kkillmemommyy/frontend-project-46/actions)

## Codeclimate:
[![Maintainability](https://api.codeclimate.com/v1/badges/ecfdd7d47f05da1791a4/maintainability)](https://codeclimate.com/github/kkillmemommyy/frontend-project-46/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/ecfdd7d47f05da1791a4/test_coverage)](https://codeclimate.com/github/kkillmemommyy/frontend-project-46/test_coverage)

## Описание пакета
"gendiff" — консольная утилита, определяющая разницу между двумя структурами данных. Это популярная задача, для решения которой существует множество онлайн сервисов, например http://www.jsondiff.com/. Подобный механизм используется при выводе тестов или при автоматическом отслеживании изменений в конфигурационных файлах.

Возможности утилиты:
- Поддержка разных входных форматов: yaml, json
- Генерация отчета в виде plain text, stylish и json


## Установка
1. Склонировать репозиторий и зайти в папку с проектом:

```bash
git clone https://github.com/kkillmemommyy/frontend-project-46.git
```
```bash
cd frontend-project-46
```

2. Установка:
```bash
make install
```

или

```bash
npm ci --production
```

```bash
npm link
```

3. Документация:
```bash
gendiff -h
```

## Удаление
```bash
make uninstall
```

или

```bash
npm uninstall --global @hexlet/code
```
