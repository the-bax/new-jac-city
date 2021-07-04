function mod(dividend: number, divisor: number): number {
  const remainder = ((dividend % divisor) + divisor) % divisor
  return remainder
}

export default mod
