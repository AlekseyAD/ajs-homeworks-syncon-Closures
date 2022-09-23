import findBy from "../findBy";

const arr = [
  {
    name: "маг",
    type: "character",
    description: "Персонаж, обладающий магическими способностями",
  },
  {
    name: "заклинание",
    type: "attack",
    description: "Атака магическим заклинанием",
  },
  {
    name: "урон",
    type: "help",
    description: "Страница описания элемента интерфейса",
  },
];

test("Поиск слова маг", () => {
  const findItem = findBy("name", "маг");
  expect(arr.filter(findItem)).toEqual([arr[0]]);
});

test("Поиск слова заклинание", () => {
  const findItem = findBy("name", "заклинание");
  expect(arr.filter(findItem)).toEqual([arr[1]]);
});

test("Поиск слова урон", () => {
  const findItem = findBy("name", "урон");
  expect(arr.filter(findItem)).toEqual([arr[2]]);
});

test("Ничего не найдено выдает пустой массив", () => {
  const findItem = findBy("name", "привет");
  expect(arr.filter(findItem)).toEqual([]);
});
