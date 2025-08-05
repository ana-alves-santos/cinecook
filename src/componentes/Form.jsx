import React, { useState } from 'react'
import '../styles/Form.css'

export default function Form({ categorias, onAdicionar }) {
  const [descricao, setDescricao] = useState('')
  const [valor, setValor] = useState('')
  const [categoria, setCategoria] = useState(categorias[0])

  const enviarFormulario = (e) => {
    e.preventDefault()
    if (!descricao || !valor) {
      alert('Preenche direitinho aí, por favor 😅')
      return
    }

    const novoGasto = {
      id: Date.now(),
      descricao,
      valor: parseFloat(valor),
      categoria,
    }

    onAdicionar(novoGasto)
    setDescricao('')
    setValor('')
    setCategoria(categorias[0])
  }

  return (
    <form className="form" onSubmit={enviarFormulario}>
      <input
        type="text"
        placeholder="Descrição"
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
      />
      <input
        type="number"
        placeholder="Valor"
        value={valor}
        onChange={(e) => setValor(e.target.value)}
        step="0.01"
      />
      <select value={categoria} onChange={(e) => setCategoria(e.target.value)}>
        {categorias.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
      <button type="submit">Anotar gasto</button>
    </form>
  )
}
