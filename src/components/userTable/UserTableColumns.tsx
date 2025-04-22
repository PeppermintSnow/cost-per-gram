const UserTableColumns = (): JSX.Element => {
  return (
    <tr className="[&>*]:p-3 text-white">
      <th>Ingredient</th>
      <th>Type</th>
      <th>Cost</th>
      <th>Weight</th>
      <th>W. Unit</th>
      <th>Used</th>
      <th>U. Unit</th>
      <th>Cost/Use</th>
    </tr>
  );
}

export default UserTableColumns;
