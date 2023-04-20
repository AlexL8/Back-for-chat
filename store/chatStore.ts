import { createEvent, createStore } from "effector";
import { v4 as uuidv4 } from "uuid";

import { IMessages, IUser } from "./interfaces";

export const $messages = createStore<IMessages>([
  {
    id: uuidv4(),
    name: "Check",
    message: "Connect",
  },
]);

export const setMessage = createEvent<IUser>();

const reset = createEvent();

$messages
  .on(
    setMessage,
    (defaultMessages, user): IMessages => [...defaultMessages, user],
  )
  .reset(reset);
