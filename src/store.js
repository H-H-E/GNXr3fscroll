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
      //Back View (Car on the right)
      position: [7, 2.5, 10],
      target: [0, 0, 0]
    },
    {
      //Back View (Car on the left, camera higher up)
      position: [7, 5.5, 10],
      target: [0, 0, 0]
    },
    {
      position: [7, 8.5, 10],
      target: [0, -1.5, 0]
    },
    {
      position: [7, 11.5, -10],
      target: [0, -1.5, 0]
    },
    {
      //Upper 
      position: [7, 14.5, -10],
      target: [0, -5.5, 0]
    },
    {
      //Front View (Car on the left)
      position: [0, 2.5, -9],
      target: [2, 1.5, 0]
    },
    {
      //Side View (Car on the bottom left)
      position: [-3, 13.5, -19],
      target: [2, 1.5, 0]
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
      // 12. Overhead Bird’s-Eye View
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