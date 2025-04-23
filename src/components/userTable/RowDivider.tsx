const RowDivider = (): React.ReactNode => {
  return (
    <tr>
      <td colSpan={12} className="p-0">
        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
      </td>
    </tr>
  );
}

export default RowDivider;
