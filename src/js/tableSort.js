import initTable, { incomeData } from './initTable.js';

// функция сортировки по разным фильтрам
// filter может быть id, title, imdb, year - по какому полю сортируем
// direction может быть up (сортировка по возрастанию) и down (по убыванию)
export default function tableSort(filter, direction) {
  const arrows = document.querySelectorAll('img, .active');
  const columnHead = document.querySelectorAll('th');
  // Скрываем все стрелки
  arrows.forEach((elem) => elem.classList.remove('active'));

  if (filter === 'id' && direction === 'up') {
    initTable(incomeData.sort((a, b) => Intl.Collator('ru', { numeric: true }).compare(a.id, b.id)));
    columnHead[0].querySelector('.arrowUp').classList.add('active');
  }

  if (filter === 'id' && direction === 'down') {
    initTable(incomeData.sort((a, b) => Intl.Collator('ru', { numeric: true }).compare(b.id, a.id)));
    columnHead[0].querySelector('.arrowDown').classList.add('active');
  }

  if (filter === 'title' && direction === 'up') {
    initTable(incomeData.sort((a, b) => Intl.Collator().compare(a.title, b.title)));
    columnHead[1].querySelector('.arrowUp').classList.add('active');
  }

  if (filter === 'title' && direction === 'down') {
    initTable(incomeData.sort((a, b) => Intl.Collator().compare(b.title, a.title)));
    columnHead[1].querySelector('.arrowDown').classList.add('active');
  }

  if (filter === 'imdb' && direction === 'up') {
    initTable(incomeData.sort((a, b) => Intl.Collator().compare(a.imdb, b.imdb)));
    columnHead[2].querySelector('.arrowUp').classList.add('active');
  }

  if (filter === 'imdb' && direction === 'down') {
    initTable(incomeData.sort((a, b) => Intl.Collator().compare(b.imdb, a.imdb)));
    columnHead[2].querySelector('.arrowDown').classList.add('active');
  }

  if (filter === 'year' && direction === 'up') {
    initTable(incomeData.sort((a, b) => Intl.Collator().compare(a.year, b.year)));
    columnHead[3].querySelector('.arrowUp').classList.add('active');
  }

  if (filter === 'year' && direction === 'down') {
    initTable(incomeData.sort((a, b) => Intl.Collator().compare(b.year, a.year)));
    columnHead[3].querySelector('.arrowDown').classList.add('active');
  }
}
