export const sum = (x: number, y: number): number => {
  return x + y;
};
test("TS 테스트 케이스 작성하기!", () => {
  expect(sum(1, 2)).toBe(3);
});
