import tableSort from './tableSort.js';
import { incomeData } from './initTable.js';

// собираем список фильтров
const filter = Object.keys(incomeData[0]);
// направление сортировки
const direction = ['up', 'down'];
// индексы для перебора массива
let filterIndex = 0;
let directionIndex = 0;
// функция запуска сортировки c перебором аргументов
export default function loopedSorting() {
  if (filterIndex === filter.length) {
    filterIndex = 0;
    directionIndex = 1 - directionIndex;
  }
  tableSort(filter[filterIndex], direction[directionIndex]);
  filterIndex += 1;
}

setInterval(loopedSorting, 3000);
