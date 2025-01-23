import { proxy } from 'valtio'
import { useProxy } from 'valtio/utils'

const store = proxy({
  open: false,
  currentSection: 0,
  sectionProgress: 0,
  totalSections: 7,
  currentCameraPosition: {
    position: [0, 0, 0],
    target: [0, 0, 0]
  },
  cameraPositions: [
    {
      // Scene 1
      position: [-5.76, 1.23, -6.71],
      target: [-5.88, 0.76, 1.07]
    },
    {
      // Scene 2
      position: [-5.74, 1.3, -8],
      target: [-5.88, 0.76, 1.07]
    },
    {
      // Scene 3
      position: [-5.87, 1.98, -10.62],
      target: [-6.02, 1.09, 1.08]
    },
    {
      // Scene 4
      position: [-0.4, 7.77, -11.59],
      target: [-0.07, 1.12, 0.38]
    },
    {
      // Scene 5
      position: [-2.7, 1.72, 6.99],
      target: [-4.14, 0.46, 3.7]
    },
    {
      // Scene 6
      position: [-3.72, 1.49, -8.49],
      target: [-5.42, 0.47, 0.87]
    },
    {
      // Scene 7
      position: [0.01, 0.85, 5.47],
      target: [-4.87, 0.58, 0.42]
    }
  ]
})

export const useStore = () => useProxy(store)
/*

 cameraPositions: [
    {
      // 1. Front Quarter View (Right) - Calibrated
      position: [-7, 2.5, 7],
      target: [0, 1.2, 0]
    },
    {
      // 2. Front Low-Angle Close-Up
      position: [0, 1.5, 7],
      target: [0, 1.2, 0]
    },
    {
      // 3. Side Profile (Right)
      position: [1, 5.5, 0],
      target: [0, 1.2, 0]
    },
    {
      // 4. Rear Quarter View (Right)
      position: [8, 2.5, -8],
      target: [0, 1.2, 0]
    },
    {
      // 5. Direct Rear View
      position: [0, 2.5, -9],
      target: [0, 1.2, 0]
    },
    {
      // 6. Rear Quarter View (Left)
      position: [-6, 2.5, -7],
      target: [0, 1.2, 0]
    },
    {
      // 7. Side Profile (Left)
      position: [-10, 2.5, 0],
      target: [0, 1.2, 0]
    },
    {
      // 8. Front Quarter View (Left)
      position: [-7, 2.5, 7],
      target: [0, 1.2, 0]
    },
    {
      // 9. Top-Down Front Perspective
      position: [0, 17, 5],
      target: [0, -1.2, -1]
    },
    {
      // 10. High-Angle Rear Perspective
      position: [8, 9, -8],
      target: [0, 1.2, 0]
    },
    {
      // 11. Low-Angle Front Perspective
      position: [6, 1.5, 4],
      target: [0, -6.2, 0]
    },
    {
      // 12. Overhead Bird's-Eye View
      position: [0, 12, 0],
      target: [0, 0, 0]
    },
    {
      // 13. Rotational POV (360 Around the Car)
      position: [0, 0, 0],
      target: [0, 1.2, 0]
    }
  ]
*/