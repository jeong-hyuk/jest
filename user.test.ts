import exp from "constants";

interface User {
  email: string;
  name: string;
  age: number;
}
const user: User[] = [
  { email: "jack@naver.com", name: "김정혁", age: 25 },
  { email: "kim@naver.com", name: "문현준", age: 26 },
  { email: "faker@naver.com", name: "이상혁", age: 22 },
  { email: "keria@naver.com", name: "류민석", age: 20 },
];

const getAllUsers = (): User[] => {
  return user;
};

const getCountsOverAge = (age: number): number => {
  const resultArr: User[] = user.filter((el: User) => {
    return el.age > age;
  }); //중괄호와 리턴은 생략 가능하다
  return resultArr.length;
};

const getEmailByUser = (name: string): string => {
  const findUser: User | undefined = user.find((el: User) => el.name.indexOf(name) !== -1);
  if (findUser) return findUser.email;
  return "해당 이름을 가진 회원을 찾을 수 없습니다.";
};

test("전체 회원은 4명인가?", () => {
  expect(getAllUsers()).toHaveLength(4);
});

test("전체 회원 중, jack 이라는 회원이 존재하는가", () => {
  expect(getAllUsers()).toContainEqual({ email: "jack@naver.com", name: "김정혁", age: 25 });
});

test("25살 이상인 회원은 2명 이상인가?", () => {
  expect(getCountsOverAge(25)).toBeLessThan(10);
});

test("특정 이름을 가진 회원의 email은 양식을 따르는가?", () => {
  expect(getEmailByUser("이상혁")).toMatch(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+.[a-zA-Z0-9]+$/);
});
