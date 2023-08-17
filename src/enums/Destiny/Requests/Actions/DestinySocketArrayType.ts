/**
 * If you look in the DestinyInventoryItemDefinition's "sockets" property, you'll
 * see that there are two types of sockets: intrinsic, and "socketEntry."
 *
 * Unfortunately, because Intrinsic sockets are a whole separate array, it is no
 * longer sufficient to know the index into that array to know which socket we're
 * talking about. You have to know whether it's in the default "socketEntries" or
 * if it's in the "intrinsic" list.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Requests.Actions.DestinySocketArrayType}
 */
export const DestinySocketArrayType = {
  Default: 0,
  Intrinsic: 1
} as const;
