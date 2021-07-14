const maximumSquatAmount = require("./main");

//👉 Write your tests below here:
test(`maximumSquatAmount returns the maximum amount of Squats the player can do in 120 seconds'`, () => {
  // amount of time

  const time = 120;
  const singleSquatTime = 3;
  const actual = maximumSquatAmount(time, singleSquatTime);
  const expected = 40;
  expect(actual).toBe(expected);
});

test(`maximumSquatAmount returns the maximum amount of Squats the player can do in 300 seconds if a squat takes 3 seconds'`, () => {
  // amount of time

  const time = 300;
  const singleSquatTime = 3;
  const actual = maximumSquatAmount(time, singleSquatTime);
  const expected = 100;
  expect(actual).toBe(expected);
});

test(`maximumSquatAmount returns the maximum amount of Squats the player can do in 300 seconds if a squat takes 5 seconds'`, () => {
  // amount of time

  const time = 300;
  const singleSquatTime = 5;
  const actual = maximumSquatAmount(time, singleSquatTime);
  const expected = 60;
  expect(actual).toBe(expected);
});
