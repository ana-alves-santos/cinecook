import React, { useState, useEffect } from 'react'
import Form from './componentes/Form'
import ListaGastos from './componentes/ListaGastos'
import GraficoGastos from './componentes/GraficoGastos'
import './styles/App.css'

// Categorias fixas
const categorias = ['Alimentação', 'Transporte', 'Lazer', 'Outros']

export default function App() {
  // Estado dos gastos (carregado do localStorage)
  const [gastos, setGastos] = useState(() => {
    const salvo = localStorage.getItem('gastos')
    return salvo ? JSON.parse(salvo) : []
  })

  // Adiciona um novo gasto
  const adicionarGasto = (gasto) => {
    setGastos((antigos) => [...antigos, gasto])
  }

  // Remove um gasto pelo id
  const apagarGasto = (id) => {
    setGastos((antigos) => antigos.filter((g) => g.id !== id))
  }

  // Sempre que mudar a lista, salva no localStorage
  useEffect(() => {
    localStorage.setItem('gastos', JSON.stringify(gastos))
  }, [gastos])

  // Soma total dos gastos
  const total = gastos.reduce((soma, g) => soma + g.valor, 0)

  return (
    <div className="app-container">
      <h1 className="titulo">💸 Controle de Gastos</h1>

      <Form categorias={categorias} onAdicionar={adicionarGasto} />

      <h2 className="subtitulo">Gastos adicionados</h2>
      <ListaGastos gastos={gastos} onApagar={apagarGasto} />

      <h3 className="total">Total: R$ {total.toFixed(2)}</h3>

      <GraficoGastos gastos={gastos} categorias={categorias} />
    </div>
  )
}
