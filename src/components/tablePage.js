export default function TablePage({data, columns}) {
    return (
      <table>
        <tr>{columns.map((col) => <th key={col}>{col}</th>)}</tr>
        {data.map((entry, index) => (
            <tr key={index}>
                {columns.map((col, index) => (
                    <td key={index}>{entry[col]}</td>
                ))}
            </tr>
        ))}
      </table>  
    );
}