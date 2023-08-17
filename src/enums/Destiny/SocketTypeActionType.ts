/**
 * Indicates the type of actions that can be performed
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.SocketTypeActionType}
 */
export const SocketTypeActionType = {
  InsertPlug: 0,
  InfuseItem: 1,
  ReinitializeSocket: 2
} as const;
