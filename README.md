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
1. Склонировать репозиторий и зайти в директорию с проектом:

```bash
git clone https://github.com/kkillmemommyy/gendiff.git
```
```bash
cd gendiff
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


## Демонстрация:
1. Вывод по умолчанию (stylish):
[![asciicast](https://asciinema.org/a/kawBv1HinpLVhhzPZAYkctxm4.svg)](https://asciinema.org/a/kawBv1HinpLVhhzPZAYkctxm4)
2. Вывод в plian:
[![asciicast](https://asciinema.org/a/J3HiK6JplflG0ni0767LlFI9s.svg)](https://asciinema.org/a/J3HiK6JplflG0ni0767LlFI9s)
3. Вывод в json:
[![asciicast](https://asciinema.org/a/Hb8XtfUkQbxL5qdq8DSSn1QNP.svg)](https://asciinema.org/a/Hb8XtfUkQbxL5qdq8DSSn1QNP)
