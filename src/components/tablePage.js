export default function TablePage({data, columns}) {
    return (
      <table>
        <tr>{columns.map((col) => <th key={col.key}>{col.displayName}</th>)}</tr>
        {data.map((entry, index) => (
            <tr key={index}>
                {columns.map((col, colIndex) => {
                    const val = col.compute ? col.compute(entry) : entry[col.key]
                    return (
                        <td key={colIndex}>{val}</td>
                    )
                })}
            </tr>
        ))}
      </table>  
    );
}