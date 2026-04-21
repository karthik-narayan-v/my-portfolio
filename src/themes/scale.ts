export const scale = {
  xs:   2,
  sm:   4,
  md:   8,
  base: 16,
  lg:   24,
  xl:   32,
  "2xl": 64,
} as const;

export type ScaleToken = keyof typeof scale;        
export type ScaleValue = (typeof scale)[ScaleToken]; 