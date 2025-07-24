<template>
  <svg
    :viewBox="`0 0 ${width} ${height}`"
    preserveAspectRatio="xMidYMid meet"
    class="w-full h-full animate-pulse"
  >
    <polygon
    class=""
      v-for="star in starsArray"
      :key="star.id"
      :points="starPoints(star.size)"
      :fill="star.color"
      :transform="`translate(${star.x}, ${star.y}) rotate(${star.rotation})`"
    />
  </svg>
</template>

<script setup lang="ts">
const props = defineProps({
  stars: {
    type: Number,
    default: 30,
  },
})

// Define the viewBox dimensions
const width = 1000
const height = 1000

// Helper: generate random stars
const starsArray = ref<any[]>([])

function random(min: number, max: number) {
  return Math.random() * (max - min) + min
}

// Generates a basic 5-point star
function starPoints(size: number) {
  const spikes = 5
  const outerRadius = size
  const innerRadius = size / 2

  let rot = Math.PI / 2 * 3
  let cx = 0
  let cy = 0
  let step = Math.PI / spikes

  let path = ''
  let x = cx
  let y = cy - outerRadius
  path += `${x},${y} `

  for (let i = 0; i < spikes; i++) {
    x = cx + Math.cos(rot) * outerRadius
    y = cy + Math.sin(rot) * outerRadius
    path += `${x},${y} `
    rot += step

    x = cx + Math.cos(rot) * innerRadius
    y = cy + Math.sin(rot) * innerRadius
    path += `${x},${y} `
    rot += step
  }

  return path
}

onMounted(() => {
  starsArray.value = Array.from({ length: props.stars }).map((_, idx) => ({
    id: idx,
    x: random(0, width),
    y: random(0, height),
    size: random(2, 5), // Small stars, tweak as you wish
    rotation: random(0, 360),
    color: randomStarHex(),
  }))
})


// Generate a soft pastel star color in HSL
function randomStarHex() {
  // Choose hue range for star-like colors
  // E.g. 0–50 (reds, oranges, yellows) or 180–240 (blues)
  const hueRanges = [
    [0, 50],     // Reds, oranges, yellows
    [200, 260],  // Blues, violets
    [50, 60],    // Yellows
    [180, 200]   // Cyan-ish
  ]
  const range = hueRanges[Math.floor(Math.random() * hueRanges.length)]
  const hue = Math.floor(Math.random() * (range[1] - range[0]) + range[0])

  const saturation = Math.floor(Math.random() * 20) + 80 // 80–100% = vivid
  const lightness = Math.floor(Math.random() * 20) + 50  // 50–70% = bright

  return hslToHex(hue, saturation, lightness)
}

// HSL -> HEX helper
function hslToHex(h: number, s: number, l: number) : string{
  s /= 100
  l /= 100

  const k = (n: number) => (n + h / 30) % 12
  const a = s * Math.min(l, 1 - l)
  const f = (n: number)=> {
    const x = l - a * Math.max(-1, Math.min(Math.min(k(n) - 3, 9 - k(n)), 1))
    return Math.round(255 * x).toString(16).padStart(2, '0')
  }

  return `#${f(0)}${f(8)}${f(4)}`
}
</script>