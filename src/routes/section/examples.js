const example_useState = `function Example () {
  
  // Хук "useState":
  // 0 — начальное значение, попробуйте поменять
  // Возвращает массив, первый элемент "count" — изменяемое состояние
  // Второй элемент "setCount" — функция для изменения состояния
  
  const [count, setCount] = useState(0);

  return (
      <div>
        <p>Вы нажали {count} раз</p>
        <button onClick={() => setCount(count + 1)}>
          Нажми!
        </button>
      </div>
  );
}`

export {
  example_useState,
}
