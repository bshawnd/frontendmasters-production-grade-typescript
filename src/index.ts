/**
 * @packageDocumentation A small library for common math functions
 */

/**
 * Calculate the average of three numbers
 *
 * @param a - first number
 * @param b - second number
 * @param c - third number
 *
 * @public
 */
export function avg(a: number, b: number, c: number): number {
  return sum3(a, b, c) / 3;
}

/**
 * Calculate the sum of three numbers
 *
 * @param a - first number
 * @param b - second number
 * @param c - third number
 * @param d - fourth number
 *
 * @beta
 */
export function sum3(a: number, b: number, c: number, d = 0): number {
  return sum2(a, b) + sum2(c, d);
}

/**
 * Calculate the sum of two numbers
 *
 * @param a - first number
 * @param b - second number
 *
 * @internal
 */
export function sum2(a: number, b: number): number {
  const sum = a + b;
  return sum;
}
