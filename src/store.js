import { proxy } from 'valtio'
import { useProxy } from 'valtio/utils'

const store = proxy({
  open: false,
  currentSection: 0,
  sectionProgress: 0,
  totalSections: 12,
  cameraPositions: [
    { // Front 3/4 view
      position: [8, 2, 8],
      target: [0, 0, 0]
    },
    { // Front close-up
      position: [0, 2, 6],
      target: [0, 0.5, 0]
    },
    { // Side view right
      position: [10, 2, 0],
      target: [0, 0, 0]
    },
    { // Rear 3/4 right
      position: [6, 2, -6],
      target: [0, 0, 0]
    },
    { // Rear view
      position: [0, 2, -8],
      target: [0, 0, 0]
    },
    { // Rear 3/4 left
      position: [-6, 2, -6],
      target: [0, 0, 0]
    },
    { // Side view left
      position: [-10, 2, 0],
      target: [0, 0, 0]
    },
    { // Front 3/4 left
      position: [-8, 2, 8],
      target: [0, 0, 0]
    },
    { // Top down front
      position: [0, 8, 4],
      target: [0, 0, 0]
    },
    { // High angle right
      position: [8, 6, 0],
      target: [0, 0, 0]
    },
    { // Low angle front
      position: [4, 1, 4],
      target: [0, 0.5, 0]
    },
    { // Bird's eye view
      position: [0, 12, 0],
      target: [0, 0, 0]
    }
  ]
})

export const useStore = () => useProxy(store)
