export enum PositionType {
  CARRY = 'carry',
  SUPPORT = 'support',
  FULL_SUPPORT = 'full',
  MID = 'mid',
  HARD = 'hard',
}

export interface ProfileData {
  account_id: number
  personaname: string
  name: string | null
  plus: boolean
  cheese: number
  steamid: string
  avatar: string
  avatarmedium: string
  avatarfull: string
  profileurl: string
  last_login: string | null
  loccountrycode: string | null
  is_contributor: boolean
  is_subscriber: boolean
  fh_unavailable: boolean
  status: string | null
}

export interface PlayerData {
  solo_competitive_rank?: number
  competitive_rank?: number
  rank_tier: number
  leaderboard_rank: number | null
  profile: ProfileData
}

export interface AdditionalPlayerData {
  position: PositionType
  discord: {
    name: string
    id: number | null
  }
  nickname: string
}

export type ExtendedPlayerData = PlayerData & AdditionalPlayerData
