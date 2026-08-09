const emp = [
  { name: "ajay", age: 20 },
  { name: "jay", age: 21 },
  { name: "jaya", age: 22 },
];
const ListRendering = () => {
  return (
    <div>
      <ul>
        {emp.map((e) => {
          return (
            <li key={e.age}>
              name:{e.name} age:{e.age}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ListRendering;
