import type { Interval } from "./interval"
import type { Scale } from "./scale"
import type { GuitarString } from "./string"

export interface Pitch {
  name: string
  flatName?: string
  semitonesFromC: number
}

export const Pitch_C: Pitch = { name: 'C', semitonesFromC: 0 }
export const Pitch_Cs: Pitch = { name: 'C#', flatName: 'Db', semitonesFromC: 1 }
export const Pitch_D: Pitch = { name: 'D', semitonesFromC: 2 }
export const Pitch_Ds: Pitch = { name: 'D#', flatName: 'Eb', semitonesFromC: 3 }
export const Pitch_E: Pitch = { name: 'E', semitonesFromC: 4 }
export const Pitch_F: Pitch = { name: 'F', semitonesFromC: 5 }
export const Pitch_Fs: Pitch = { name: 'F#', flatName: 'Gb', semitonesFromC: 6 }
export const Pitch_G: Pitch = { name: 'G', semitonesFromC: 7 }
export const Pitch_Gs: Pitch = { name: 'G#', flatName: 'Ab', semitonesFromC: 8 }
export const Pitch_A: Pitch = { name: 'A', semitonesFromC: 9 }
export const Pitch_As: Pitch = { name: 'A#', flatName: 'Bb', semitonesFromC: 10 }
export const Pitch_B: Pitch = { name: 'B', semitonesFromC: 11 }

export const Pitches = [
  Pitch_C, Pitch_Cs, Pitch_D, Pitch_Ds, Pitch_E, Pitch_F,
  Pitch_Fs, Pitch_G, Pitch_Gs, Pitch_A, Pitch_As, Pitch_B
]

export const resolveIntervalPitch = (interval: Interval, root: Pitch): Pitch => {
  const ind = (root.semitonesFromC + interval.semitones) % Pitches.length
  return Pitches[ind]
}

export const resolveFretPitch = (string: GuitarString, fret: number): Pitch => {
  const ind = (string.rootPitch.semitonesFromC + fret) % Pitches.length
  return Pitches[ind]
}

export const resolveScalePitches = (scale: Scale): Pitch[] => {
  const { type, rootPitch } = scale
  return type.intervals.map(interval => resolveIntervalPitch(interval, rootPitch))
}
