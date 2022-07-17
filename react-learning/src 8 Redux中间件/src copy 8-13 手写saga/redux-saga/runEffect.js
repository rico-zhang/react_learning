import { effectTypes } from "./effectHelper";
import { runCallEffect } from "./effects/call";
import { runSelectEffect } from "./effects/select";
import { runPutEffect } from "./effects/put";
import { runTakeEffect } from "./effects/take";
import { runForkEffect } from "./effects/fork";

export default function runEffect(env, value, next) {
  switch (value.type) {
    case effectTypes.CALL:
      runCallEffect(env, value, next);
      break;
    case effectTypes.SELECT:
      runSelectEffect(env, value, next);
      break;
    case effectTypes.PUT:
      runPutEffect(env, value, next);
      break;
    case effectTypes.TAKE:
      runTakeEffect(env, value, next);
      break;
    case effectTypes.FORK:
      runForkEffect(env, value, next);
      break;
    default:
      throw new Error("错误的type值");
  }
}
