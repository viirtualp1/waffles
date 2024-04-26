import { property } from 'lodash'
import type { PlayerData, PositionType } from '@/types/Player'
import { http } from './Http'

const positionNames = {
  carry: 'Керри',
  full: 'Фулл-саппорт',
  mid: 'Мидер',
  hard: 'Хардлейнер',
  support: 'Саппорт',
}

export function getPlayer(id: number): Promise<PlayerData> {
  return http.get(`/players/${id}`).then(property('data'))
}

export const getPositionName = (position: PositionType) => {
  return positionNames[position]
}
