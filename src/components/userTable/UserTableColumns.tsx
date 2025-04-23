const UserTableColumns = (): JSX.Element => {
  return (
    <tr className="[&>*]:p-3 text-white">
      <th>Ingredient</th>
      <th>Type</th>
      <th>Cost</th>
      <th>Weight</th>
      <th>Used</th>
      <th>Cost/Use</th>
    </tr>
  );
}

export default UserTableColumns;
