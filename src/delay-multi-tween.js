/**
 * multi-tween.jsのgameLoopが遅いバージョン
 */
import TWEEN from '@tweenjs/tween.js';

const target = {a: 0, b: 0, c: 0};
const logTime = () => new Date().toString();

function gameLoop(time) {
  TWEEN.update(time);
  setTimeout(() => requestAnimationFrame(gameLoop), 1000);
}
requestAnimationFrame(gameLoop);

const tweenA = new TWEEN.Tween(target)
  .to({a: 1000}, 1000)
  .onUpdate(() => console.log(`${logTime()} tweenA {a:${target.a}, b:${target.b} c:${target.c}}`))
  .onComplete(() => console.log(`${logTime()} tweenA complete!`));

const tweenB = new TWEEN.Tween(target)
  .to({b: 1000}, 1000)
  .onUpdate(() => console.log(`${logTime()} tweenB {a:${target.a}, b:${target.b} c:${target.c}}`))
  .onComplete(() => console.log(`${logTime()} tweenB complete!`));

const tweenC = new TWEEN.Tween(target)
  .to({c: 1000}, 1000)
  .onUpdate(() => console.log(`${logTime()} tweenC {a:${target.a}, b:${target.b} c:${target.c}}`))
  .onComplete(() => console.log(`${logTime()} tweenC complete!`));

tweenA.chain(tweenB, tweenC);
tweenA.start();