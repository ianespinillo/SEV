// ../../node_modules/.pnpm/@angular+cdk@18.2.2_@angular+common@18.2.0_@angular+core@18.2.0_rxjs@7.8.1_zone.js@0.14.10__r_ry2ayz5r3nuixh5q57q27j5ffa/node_modules/@angular/cdk/fesm2022/keycodes.mjs
var BACKSPACE = 8;
var TAB = 9;
var ENTER = 13;
var SHIFT = 16;
var CONTROL = 17;
var ALT = 18;
var ESCAPE = 27;
var SPACE = 32;
var PAGE_UP = 33;
var PAGE_DOWN = 34;
var END = 35;
var HOME = 36;
var LEFT_ARROW = 37;
var UP_ARROW = 38;
var RIGHT_ARROW = 39;
var DOWN_ARROW = 40;
var DELETE = 46;
var ZERO = 48;
var NINE = 57;
var A = 65;
var Z = 90;
var META = 91;
var MAC_META = 224;
function hasModifierKey(event, ...modifiers) {
  if (modifiers.length) {
    return modifiers.some((modifier) => event[modifier]);
  }
  return event.altKey || event.shiftKey || event.ctrlKey || event.metaKey;
}

export {
  BACKSPACE,
  TAB,
  ENTER,
  SHIFT,
  CONTROL,
  ALT,
  ESCAPE,
  SPACE,
  PAGE_UP,
  PAGE_DOWN,
  END,
  HOME,
  LEFT_ARROW,
  UP_ARROW,
  RIGHT_ARROW,
  DOWN_ARROW,
  DELETE,
  ZERO,
  NINE,
  A,
  Z,
  META,
  MAC_META,
  hasModifierKey
};
//# sourceMappingURL=chunk-5KX4SCY5.js.map
