/* eslint-disable no-undef */
/* eslint-disable no-param-reassign */
const character = { // заданный объект
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 3,
  attack: 40,
  defence: 10,
  special: [
    {
      id: 8,
      name: 'Двойной выстрел',
      icon: 'http://...',
      description: 'Двойной выстрел наносит двойной урон',
    },
    {
      id: 9,
      name: 'Нокаутирующий удар',
      icon: 'http://...',
      // <- обратите внимание, описание "засекречено"
    },
  ],
};
// функция получения описания специального удара
// eslint-disable-next-line max-len
export default function getSpecialAttack({ special: arr } = character) { // с помощью диструкции получаем вложенный массив
  const arrFn = []; // новый массив для соблюдения иммутабельности передаваемых аргументов
  for (let i = 0; i < arr.length; i += 1) { // прогоняем массив
    if (!('description' in arr[i])) { // проверяем на присутствие свойства
      arr[i].description = 'Описание недоступно'; // добавляем, если нет нужного св-ва
      arrFn.push(arr[i]);// пушаем в новый массив
    } else {
      arrFn.push(arr[i]); // пушаем в новый массив
    }
  }
  return arrFn; // возвращаем новый массив
}
// getSpecialAttack({ special: arr } = character); // вызов функции
