import type { Pitch } from './pitch'
import {
  Pitch_B,
  Pitch_D,
  Pitch_E,
  Pitch_G,
  Pitch_A,
} from './pitch'

export interface GuitarString {
  number: number
  rootPitch: Pitch
}

export const BasicGuitarStrings: GuitarString[] = [
  { number: 1, rootPitch: Pitch_E },
  { number: 2, rootPitch: Pitch_B },
  { number: 3, rootPitch: Pitch_G },
  { number: 4, rootPitch: Pitch_D },
  { number: 5, rootPitch: Pitch_A },
  { number: 6, rootPitch: Pitch_E },
]
