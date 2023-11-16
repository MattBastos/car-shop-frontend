describe('Sum', () => {
  it('should return 2', () => {
    const sum = (a: number, b: number) => a + b;
    const result = sum(1, 1);

    expect(result).toBe(2);
  });
});
