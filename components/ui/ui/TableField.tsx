export default function TableField() {
  return (
    <table className="w-full border">

      <thead>
        <tr>
          <th className="border p-2">
            Name
          </th>

          <th className="border p-2">
            Email
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td className="border p-2">
            John
          </td>

          <td className="border p-2">
            john@gmail.com
          </td>
        </tr>
      </tbody>

    </table>
  );
}