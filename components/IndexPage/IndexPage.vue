<template>
  <div class="index-page container">
    <div v-if="isLoading">loading...</div>

    <h1 class="index-page__title">Team Waffles</h1>

    <div class="index-page__rows">
      <div class="index-page__col" v-for="(player, idx) in players" :key="idx">
        <PlayerCard :player="player" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import type { ExtendedPlayerData } from '@/types/Player'
import { getPlayersMock } from '@/utils/players.mock'
import { extendedPlayerData } from '@/utils/players'
// import { getPlayer } from '@/services/Player'

const players = ref<ExtendedPlayerData[]>([])
const isLoading = ref(false)

async function fetchPlayers() {
  isLoading.value = true

  try {
    const _players = getPlayersMock()

    players.value = _players.map((player) => {
      return {
        ...player,
        ...extendedPlayerData[player.profile.account_id],
      }
    })
    // Promise.all(
    //   wafflePlayers.map(async (playerId) => {
    //     players.value.push(await getPlayer(Number(playerId)))
    //   }),
    // )
  } catch (err) {
    console.error(err)
  } finally {
    isLoading.value = false
  }
}

onMounted(() => {
  fetchPlayers()
})
</script>

<style lang="scss" src="./IndexPage.scss"></style>
