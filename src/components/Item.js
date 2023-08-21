export default function Item({ item, onDeleteItem, onToggleItem }) {
  const { id, description, quantity, isPacked } = item;
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onToggleItem(id)}
      />
      <span style={isPacked ? { textDecoration: "line-through" } : {}}>
        {quantity} {description}
      </span>
      <button onClick={() => onDeleteItem(id)}>❌</button>
    </li>
  );
}
