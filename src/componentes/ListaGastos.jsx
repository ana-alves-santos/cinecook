import React from 'react'
import '../styles/ListaGastos.css'

export default function ListaGastos({ gastos, onApagar }) {
  if (gastos.length === 0) return <p>Você ainda não anotou nenhum gasto.</p>

  return (
    <table className="expense-table">
      <thead>
        <tr>
          <th>Descrição</th>
          <th>Valor</th>
          <th>Categoria</th>
          <th>Excluir</th>
        </tr>
      </thead>
      <tbody>
        {gastos.map(({ id, descricao, valor, categoria }) => (
          <tr key={id}>
            <td>{descricao}</td>
            <td>R$ {valor.toFixed(2)}</td>
            <td>{categoria}</td>
            <td>
              <button onClick={() => onApagar(id)}>🗑️</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
