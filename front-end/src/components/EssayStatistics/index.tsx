'use client'

import { useEffect, useRef } from 'react'
import * as React from 'react'
import { PieChart } from '@mui/x-charts/PieChart'
import { useDrawingArea } from '@mui/x-charts/hooks'
import { styled } from '@mui/material/styles'
import { Stack } from '@mui/material'
import { Competence } from './Competence'
import { Poppins } from 'next/font/google'

const data = [
  { label: 'Copetência 1', value: 200, color: '#1A932E' },
  { label: 'Copetência 2', value: 200, color: '#E5AE21' },
  { label: 'Copetência 3', value: 200, color: '#0BB783' },
  { label: 'Copetência 4', value: 200, color: '#BF83FF' },
  { label: 'Copetência 5', value: 200, color: '#247CFF' },
]

export function EssayStatistics() {
  return (
    <div className="max-h-[400px]  p-8 py-10 flex flex-col items-start bg-white shadow-md rounded-bg dark:bg-dark">
      <h2 className="text-2xl font-semibold text-primary dark:text-white">
        Estatísticas das redaçãoes
      </h2>
      <h3 className="text-secundary">Média geral de suas redações</h3>
      <PieChart
        series={[
          {
            data,
            highlightScope: { faded: 'global', highlighted: 'item' },
            innerRadius: 50,
            faded: {
              innerRadius: 50,
              additionalRadius: -10,
              color: 'gray',
            },
          },
        ]}
        height={200}
      />
    </div>
  )
}
