import { PositionType, type AdditionalPlayerData } from '@/types/Player.d'

export const wafflePlayers = [
  // virtualp1
  245348569,
  // dkll50
  1035019537,
  // matusha
  956880819,
  // angicun
  1010484916,
  // flex
  1015235710,
] as const

export const extendedPlayerData: Record<number, AdditionalPlayerData> = {
  245348569: {
    nickname: 'virtualp1',
    position: PositionType.CARRY,
    discord: {
      name: 'virtualp1',
      id: 389737424856678401n,
    },
  },
  1015235710: {
    nickname: 'dkll50',
    position: PositionType.MID,
    discord: {
      name: 'dkll50',
      id: null,
    },
  },
  1010484916: {
    nickname: 'matusha',
    position: PositionType.HARD,
    discord: {
      name: 'matysha564',
      id: null,
    },
  },
  1035019537: {
    nickname: 'angicun',
    position: PositionType.SUPPORT,
    discord: {
      name: 'angicun',
      id: null,
    },
  },
  956880819: {
    nickname: 'flex',
    position: PositionType.HARD,
    discord: {
      name: 'flex0539',
      id: null,
    },
  },
}
