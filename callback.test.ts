import { Console, log } from "console";

const getNameCB = (callback: (str: string) => void): void => {
  const name: string = "jack";
  setTimeout(() => {
    try {
      if (Math.floor(Math.random() * 2) % 2 === 0) {
        console.log("정상 케이스");
        callback(name);
      } else {
        console.log("에러 케이스");
        throw new Error("에러");
      }
    } catch (error) {
      callback(error);
    }
  }, 2000); //선언부
};

test("2초 뒤에 이름을 받아오는 콜백함수 테스트", (done) => {
  function callback(data: any): void {
    try {
      if (data instanceof Error) {
        expect(data.message).toBe("에러");
      } else {
        expect(data).toBe("jack");
      }
      done();
    } catch (error) {
      done(error);
    }
  }
  getNameCB(callback);
});
