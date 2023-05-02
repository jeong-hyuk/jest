const makeObj = (id, name) => {
  return { id, name, age: undefined };
};

test("toBe의 문제점 파악하기", () => {
  expect(makeObj("jack", "김정혁")).toStrictEqual({ id: "jack", name: "김정혁" });
});

//toBe는 얕은 비교, toEqual은 깊은 비교, toStrictEqual은 더 빡센 비교
//객체를 비교할때는 toEqual사용해야한다
