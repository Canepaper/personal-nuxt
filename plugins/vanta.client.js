// plugins/vanta.client.ts
import { onMounted, onBeforeUnmount, ref } from 'vue'
import * as THREE from 'three'
import WAVES from 'vanta/dist/vanta.waves.min'

export default function useVanta() {
  const vantaRef = ref(null)
  let vantaEffect = null

  onMounted(() => {
    if (vantaRef.value) {
      vantaEffect = WAVES({
        el: vantaRef.value,
        THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0x088830,
      })
    }
  })

  onBeforeUnmount(() => {
    if (vantaEffect) vantaEffect.destroy()
  })

  return vantaRef
}
