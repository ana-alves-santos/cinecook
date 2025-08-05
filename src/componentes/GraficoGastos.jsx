import React from 'react'
import { Pie } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import '../styles/GraficoGastos.css'

ChartJS.register(ArcElement, Tooltip, Legend)

export default function GraficoGastos({ gastos = [], categorias = [] }) {
  // Soma o total por categoria
  const valoresPorCategoria = categorias.map((cat) =>
    gastos
      .filter((g) => g.categoria === cat)
      .reduce((acc, g) => acc + (g.valor || 0), 0)
  )

  // Dados para o gráfico
  const dados = {
    labels: categorias,
    datasets: [
      {
        label: 'Gastos por categoria',
        data: valoresPorCategoria,
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#AA66CC'],
        borderWidth: 1,
      },
    ],
  }

  return (
    <div className="grafico-container">
      <h3>Gráfico de Gastos</h3>
      <Pie data={dados} />
    </div>
  )
}
