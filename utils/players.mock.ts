import { PositionType, type PlayerData } from '@/types/Player.d'

export const getPlayerMock = (): PlayerData => {
  return {
    profile: {
      account_id: 956880819,
      avatar:
        'https://avatars.steamstatic.com/71865c6ffecc12507dc100c1966b0966a7ac33bf.jpg',
      avatarfull:
        'https://avatars.steamstatic.com/71865c6ffecc12507dc100c1966b0966a7ac33bf_full.jpg',
      avatarmedium:
        'https://avatars.steamstatic.com/71865c6ffecc12507dc100c1966b0966a7ac33bf_medium.jpg',
      cheese: 0,
      fh_unavailable: false,
      is_contributor: false,
      is_subscriber: false,
      last_login: '2023-02-14T12:00:55.972Z',
      loccountrycode: 'RU',
      name: null,
      personaname: '<Ф-А-Н-Е-Р-А>',
      plus: false,
      profileurl: 'https://steamcommunity.com/id/magicdedok/',
      status: null,
      steamid: '76561198917146547',
    },
    rank_tier: 53,
    leaderboard_rank: null,
  }
}

export const getPlayersMock = (): PlayerData[] => {
  return [
    {
      profile: {
        account_id: 245348569,
        personaname: 'pretty when you cry',
        name: null,
        plus: true,
        cheese: 0,
        steamid: '76561198205614297',
        avatar:
          'https://avatars.steamstatic.com/9acde930065533810412a41292de6f07043cfa9c.jpg',
        avatarmedium:
          'https://avatars.steamstatic.com/9acde930065533810412a41292de6f07043cfa9c_medium.jpg',
        avatarfull:
          'https://avatars.steamstatic.com/9acde930065533810412a41292de6f07043cfa9c_full.jpg',
        profileurl: 'https://steamcommunity.com/id/virtualplayer1/',
        last_login: '2024-04-25T14:40:48.945Z',
        loccountrycode: 'RU',
        status: null,
        fh_unavailable: false,
        is_contributor: false,
        is_subscriber: false,
      },
      rank_tier: 45,
      leaderboard_rank: null,
    },
    {
      profile: {
        account_id: 1015235710,
        personaname: 'не могу аппнуться',
        name: null,
        plus: false,
        cheese: 0,
        steamid: '76561198975501438',
        avatar:
          'https://avatars.steamstatic.com/8f644ed940c439f6c5bf9fa3abea9ae12320be45.jpg',
        avatarmedium:
          'https://avatars.steamstatic.com/8f644ed940c439f6c5bf9fa3abea9ae12320be45_medium.jpg',
        avatarfull:
          'https://avatars.steamstatic.com/8f644ed940c439f6c5bf9fa3abea9ae12320be45_full.jpg',
        profileurl: 'https://steamcommunity.com/profiles/76561198975501438/',
        last_login: null,
        loccountrycode: null,
        status: null,
        fh_unavailable: false,
        is_contributor: false,
        is_subscriber: false,
      },
      rank_tier: 53,
      leaderboard_rank: null,
    },
    {
      profile: {
        account_id: 1010484916,
        personaname: 'Матюша',
        name: null,
        plus: false,
        cheese: 0,
        steamid: '76561198970750644',
        avatar:
          'https://avatars.steamstatic.com/122bc6f3006311364c8d0a5a0c4ea056f344e81f.jpg',
        avatarmedium:
          'https://avatars.steamstatic.com/122bc6f3006311364c8d0a5a0c4ea056f344e81f_medium.jpg',
        avatarfull:
          'https://avatars.steamstatic.com/122bc6f3006311364c8d0a5a0c4ea056f344e81f_full.jpg',
        profileurl: 'https://steamcommunity.com/profiles/76561198970750644/',
        last_login: null,
        loccountrycode: 'UA',
        status: null,
        fh_unavailable: false,
        is_contributor: false,
        is_subscriber: false,
      },
      rank_tier: 34,
      leaderboard_rank: null,
    },
    {
      profile: {
        account_id: 1035019537,
        personaname: 'абракадрабически',
        name: null,
        plus: false,
        cheese: 0,
        steamid: '76561198995285265',
        avatar:
          'https://avatars.steamstatic.com/d26cc76be0677d0d15d2c08380f44a3db46d2562.jpg',
        avatarmedium:
          'https://avatars.steamstatic.com/d26cc76be0677d0d15d2c08380f44a3db46d2562_medium.jpg',
        avatarfull:
          'https://avatars.steamstatic.com/d26cc76be0677d0d15d2c08380f44a3db46d2562_full.jpg',
        profileurl: 'https://steamcommunity.com/id/angicun/',
        last_login: null,
        loccountrycode: 'RU',
        status: null,
        fh_unavailable: false,
        is_contributor: false,
        is_subscriber: false,
      },
      rank_tier: 33,
      leaderboard_rank: null,
    },
    {
      profile: {
        account_id: 956880819,
        personaname: '<Ф-А-Н-Е-Р-А>',
        name: null,
        plus: false,
        cheese: 0,
        steamid: '76561198917146547',
        avatar:
          'https://avatars.steamstatic.com/71865c6ffecc12507dc100c1966b0966a7ac33bf.jpg',
        avatarmedium:
          'https://avatars.steamstatic.com/71865c6ffecc12507dc100c1966b0966a7ac33bf_medium.jpg',
        avatarfull:
          'https://avatars.steamstatic.com/71865c6ffecc12507dc100c1966b0966a7ac33bf_full.jpg',
        profileurl: 'https://steamcommunity.com/id/magicdedok/',
        last_login: '2023-02-14T12:00:55.972Z',
        loccountrycode: 'RU',
        status: null,
        fh_unavailable: false,
        is_contributor: false,
        is_subscriber: false,
      },
      rank_tier: 53,
      leaderboard_rank: null,
    },
  ]
}
