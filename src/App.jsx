import React, { useState, useEffect } from 'react'
import Form from './componentes/Form'
import ListaGastos from './componentes/ListaGastos'
import GraficoGastos from './componentes/GraficoGastos'
import './styles/App.css'

const categorias = ['Alimentação', 'Transporte', 'Lazer', 'Outros']

export default function App() {

  const [gastos, setGastos] = useState(() => {
    const salvo = localStorage.getItem('gastos')
    return salvo ? JSON.parse(salvo) : []
  })

  // Adiciona gasto novo
  const adicionarGasto = gasto => {
    setGastos(antigos => [...antigos, gasto])
  }

  // Apaga um gasto pelo id
  const apagarGasto = id => {
    setGastos(antigos => antigos.filter(g => g.id !== id))
  }

  // Salva a lista toda no localStorage quando mudar
  useEffect(() => {
    localStorage.setItem('gastos', JSON.stringify(gastos))
  }, [gastos])

  const total = gastos.reduce((soma, g) => soma + g.valor, 0)

  return (
    <div className="app-container">
      <h1 className="titulo">💸 Controle de Gastos</h1>

      <Form categorias={categorias} onAdicionar={adicionarGasto} />

      <div className="dashboard">
        <div className="dashboard-esquerda">
          <h2 className="subtitulo">Gastos adicionados</h2>
          <ListaGastos gastos={gastos} onApagar={apagarGasto} />
          <h3 className="total">Total: R$ {total.toFixed(2)}</h3>
        </div>

        <div className="dashboard-direita">
          <GraficoGastos gastos={gastos} categorias={categorias} />
        </div>
      </div>
    </div>
  )
}
