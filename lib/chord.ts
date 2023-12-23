import type { Interval } from './interval'
import {
  Interval_P1,
  Interval_m3,
  Interval_M3,
  Interval_b5,
  Interval_P5,
  Interval_m7,
  Interval_M7
} from './interval'

export interface Chord {
  name: string
  intervals: Interval[]
}

export const MajorSeventhChord: Chord = {
  name: 'Maj7',
  intervals: [
    Interval_P1,
    Interval_M3,
    Interval_P5,
    Interval_M7
  ]
}
export const MinorSeventhChord: Chord = {
  name: 'm7',
  intervals: [
    Interval_P1,
    Interval_m3,
    Interval_P5,
    Interval_m7
  ]
}
export const SeventhChord: Chord = {
  name: '7',
  intervals: [
    Interval_P1,
    Interval_M3,
    Interval_P5,
    Interval_m7
  ]
}
export const MinorSeventhFlatFiveChord: Chord = {
  name: 'm7b5',
  intervals: [
    Interval_P1,
    Interval_m3,
    Interval_b5,
    Interval_m7
  ]
}

export const DiatonicChords: Chord[] = [
  MajorSeventhChord,
  MinorSeventhChord,
  MinorSeventhChord,
  MajorSeventhChord,
  SeventhChord,
  MinorSeventhChord,
  MinorSeventhFlatFiveChord
]
