import * as env from "./util-tool/env"; // 方法集合1
import * as is from "./util-tool/is"; // 方法集合2
import * as other from "./util-tool/other"; // 方法集合3
import { Types } from "./types";
import { mixin } from "@/tools";

function initUtils(): Types {
  const instance = Object.create(null);
  const arr = [env, is, other];
  mixin(instance, arr);

  return instance as Types;
}

const _utils = initUtils();

export default _utils;
