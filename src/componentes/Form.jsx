import React, { useState } from 'react'
import '../styles/Form.css'

export default function Form({ categorias, onAdicionar }) {
  const [desc, setDesc] = useState('')
  const [valor, setValor] = useState('')
  const [categoria, setCategoria] = useState(categorias[0])

  function enviar(e) {
    e.preventDefault()

    if (!desc || !valor) {
      alert('Ei, preenche tudo certinho, por favor! ')
      return
    }

    const gasto = {
      id: Date.now(),
      descricao: desc,
      valor: parseFloat(valor),
      categoria,
    }

    onAdicionar(gasto)

    // Limpando os campos depois de anotar
    setDesc('')
    setValor('')
    setCategoria(categorias[0])
  }

  return (
    <form className="form" onSubmit={enviar}>
      <input
        type="text"
        placeholder="O que você gastou?"
        value={desc}
        onChange={e => setDesc(e.target.value)}
      />
      <input
        type="number"
        placeholder="Quanto custou?"
        value={valor}
        onChange={e => setValor(e.target.value)}
        step="0.01"
      />
      <select value={categoria} onChange={e => setCategoria(e.target.value)}>
        {categorias.map(cat => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
      <button type="submit">Anotar gasto</button>
    </form>
  )
}
