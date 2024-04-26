<template>
  <a :href="player.profile.profileurl" target="_blank" class="player-card">
    <div class="player-card__position" :class="`is-${player.position}`">
      {{ getPositionName(player.position) }}
    </div>

    <img :src="player.profile.avatarfull" class="player-card__avatar" />

    <component
      :is="discordLink ? 'a' : 'div'"
      :href="discordLink"
      class="player-card__discord"
    >
      @{{ player.discord.name }}
    </component>

    <div class="player-card__name">
      <span class="player-card__nickname">{{ player.nickname }}</span>
      {{ player.profile.personaname }}
    </div>
  </a>
</template>

<script setup lang="ts">
import { computed, type PropType } from 'vue'
import type { ExtendedPlayerData } from '@/types/Player'
import { getPositionName } from '@/services/Player'

const props = defineProps({
  player: {
    type: Object as PropType<ExtendedPlayerData>,
    default: null,
  },
})

const discordLink = computed(() => {
  if (!props.player.discord.id) {
    return ''
  }

  return `https://discordapp.com/users/${props.player.discord.id}`
})
</script>

<style lang="scss" src="./PlayerCard.scss"></style>
