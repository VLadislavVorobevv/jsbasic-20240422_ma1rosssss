/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  constructor(rows) {
    this.rows = rows;
    this.elem = this.edit();
  }

  edit() {
    const table = document.createElement("table");
    table.innerHTML = `
    <tr>
    <th>Имя</th>
    <th>Возраст</th>
    <th>Зарплата</th>
    <th>Город</th>
    <th></th>
  </tr>`;

    this.rows.forEach((element) => {
      const row = document.createElement("tr");
      row.innerHTML = `
      <td>${element.name}</td>
      <td>${element.age}</td>
      <td>${element.salary}</td>
      <td>${element.city}</td>
      <td><button>X</button></td>`;
      table.appendChild(row);
    });

    this.btnOff(table);

    return table;
  }

  btnOff(table) {
    const btn = table.querySelectorAll("button");
    btn.forEach((button) => {
      button.addEventListener("click", () => {
        button.parentElement.parentElement.remove();
      });
    });
  }
}
