import type { Task } from "#/base";
import { cronTask } from "./task/cron";
import { multiCronTask } from "./task/multi_cron";
import { intervalTask } from "./task/interval";

export const tasks: Task[] = [
  cronTask,
  multiCronTask,
  intervalTask,
];