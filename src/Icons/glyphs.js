export const plus = (`<path id="i.plus" class="border" d="M32,16 L32,48 M16,32 L48,32" />`);
export const bar = (`<path id="i.bar" class="border" d="M16,32 l32,0" />`);
export const arrow = (`<path id="i.arrow" class="border" d="M16,32 l32,0 m-16,-16 l16,16 l-16,16" />`);
export const chevron = (`<path id="i.chevron" class="border" d="M26,16 l16,16, l-16,16" />`);
export const person = (`<path id="i.person" d="M32,35 C38.25,35 44,36.8 49,39.9 L49,47 C49,49 47.2,51 45,51 L19,51 C16.8,51 15,49.2 15,47 L15,39.9 C19.9,36.8 25.8,35 32,35 Z M32,11 C37.3,11 41.5,15.3 41.5,20.5 C41.5,25.7 37.2,30 32,30 C26.8,30 22.5,25.7 22.5,20.5 C22.5,15.3 26.8,11 32,11 z" />`);
export const circle = (`<circle id="i.circle" cx="50%" cy="50%" r="30%" />`);
export const square = (`<rect id="i.square" x="25%" y="25%" width="50%" height="50%" style="rx: var(--rx, 0)" />`);
export const delta = (`<path id="i.delta" d="M32,18 l16,24 l-32,0 z" />`);
export const checkmark = (`<path id="i.checkmark" class="border" d="M14,32 l12,12 l24,-24" />`);
export const octo = (`<path id="i.octo" class="border" d="M29,16 l-6,32 M41,16 l-6,32 M16,26 l32,0 M16,38 l32,0" />`);
export const heart = (`<path id="i.heart" d="M 12,24 A 8,8 0,0,1 32,24 A 8,8 0,0,1 52,24 Q 52,32 32,52 Q 12,32 12,24 z" />`);

export const bullet = (`<use id="i.bullet" href="#i.circle" class="fill" style="transform: scale(0.3)" />`);
export const disc = (`<use id="i.disc" href="#i.circle" class="border" style="transform: scale(0.3)" />`);
export const x = (`<use id="i.x" href="#i.plus" style="transform: rotate(45deg)" />`);
export const roundSquare = (`<use id="i.roundSquare" href="#i.square" style="--rx: 15%; transform: scale(1.05)" />`);
export const diamond = (`<use id="i.diamond" href="#i.square" style="transform: rotate(45deg) scale(0.9)" />`);
export const arrowRight = (`<use id="i.arrowRight" href="#i.arrow" />`);
export const arrowDown = (`<use id="i.arrowDown" href="#i.arrow" style="transform: rotate(0.25turn)" />`);
export const arrowLeft = (`<use id="i.arrowLeft" href="#i.arrow" style="transform: rotate(0.5turn)" />`);
export const arrowUp = (`<use id="i.arrowUp" href="#i.arrow" style="transform: rotate(0.75turn)" />`);
export const minus = (`<use id="i.minus" href="#i.bar" style="transform: scale(0.7)" />`);
export const dash = (`<use id="i.dash" href="#i.bar" style="transform: scale(1.1)" />`);
export const grid = (`<g id="i.grid">
    <use href="#i.square" style="transform: translate(-15.625%, -15.625%) scale(0.4)" />
    <use href="#i.square" style="transform: translate(15.625%, -15.625%) scale(0.4)" />
    <use href="#i.square" style="transform: translate(-15.625%, 15.625%) scale(0.4)" />
    <use href="#i.square" style="transform: translate(15.625%, 15.625%) scale(0.4)" />
  </g>`);
export const gridRound = (`<use id="i.gridRound" href="#i.grid" style="--rx: 12%" />`);
export const chevronRight = (`<use id="i.chevronRight" href="#i.chevron" />`);
export const chevronDown = (`<use id="i.chevronDown" href="#i.chevron" style="transform: rotate(0.25turn)" />`);
export const chevronLeft = (`<use id="i.chevronLeft" href="#i.chevron" style="transform: rotate(0.5turn)" />`);
export const chevronUp = (`<use id="i.chevronUp" href="#i.chevron" style="transform: rotate(0.75turn)" />`);
export const triangle = (`<use id="i.triangle" href="#i.delta" />`);
export const triangleRight = (`<use id="i.triangleRight" href="#i.delta" style="transform: rotate(0.25turn)" />`);
export const triangleDown = (`<use id="i.triangleDown" href="#i.delta" style="transform: rotate(0.5turn)" />`);
export const triangleLeft = (`<use id="i.triangleLeft" href="#i.delta" style="transform: rotate(0.75turn)" />`);
export const triangleUp = (`<use id="i.triangleUp" href="#i.delta" />`);
export const checkmarkNarrow = (`<use id="i.checkmarkNarrow" href="#i.checkmark" style="transform: scaleX(0.8)" />`);
export const chevronDouble = (`<g id="i.chevronDouble">
    <use href="#i.chevron" transform="translate(-6)" />
    <use href="#i.chevron" transform="translate(6)" />
  </g>`);
export const chevronDoubleUp = (`<use id="i.chevronDoubleUp" href="#i.chevronDouble" />`);
export const chevronDoubleRight = (`<use id="i.chevronDoubleRight" href="#i.chevronDouble" style="transform: rotate(0.25turn)" />`);
export const chevronDoubleDown = (`<use id="i.chevronDoubleDown" href="#i.chevronDouble" style="transform: rotate(0.5turn)" />`);
export const chevronDoubleLeft = (`<use id="i.chevronDoubleLeft" href="#i.chevronDouble" style="transform: rotate(0.75turn)" />`);
export const dragHandleVertical = (`<g id="i.dragHandleVertical">
    <use href="#i.bar" transform="translate(0 -4)" />
    <use href="#i.bar" transform="translate(0 4)" />
  </g>`);
export const dragHandleHorizontal = (`<use id="i.dragHandleHorizontal" href="#i.dragHandleVertical" style="transform: rotate(0.25turn)" />`);
export const menuBars = (`<g id="i.menuBars">
    <use href="#i.bar" transform="translate(0 -12)" />
    <use href="#i.bar" />
    <use href="#i.bar" transform="translate(0 12)" />
  </g>`);
export const filter = (`<g id="i.filter">
    <use href="#i.bar" style="transform: translate(0, -12px)" />
    <use href="#i.bar" style="transform: scaleX(0.50)" />
    <use href="#i.bar" style="transform: translate(0, 12px) scaleX(0.1)" />
  </g>`);
export const listBullets = (`<g id="i.listBullets">
    <defs>
      <g id="i.listBulletsItem">
        <use href="#i.bullet" style="transform: translate(-16px, 0) scale(0.35)" />
        <use href="#i.bar" style="transform: translate(4px, 0) scale(0.7)" />
      </g>
    </defs>
    <use href="#i.listBulletsItem" transform="translate(0 -12)" />
    <use href="#i.listBulletsItem" />
    <use href="#i.listBulletsItem" transform="translate(0 12)" />
  </g>`);
export const listNumbers = (`<g id="i.listNumbers" style="counter-reset: icon-list-number-counter">
    <defs>
      <g id="i.listNumbersItem" style="counter-increment: icon-list-number-counter">
        <text style="transform: translate(14px, 34px) scale(0.5); font-size: 100%; font-weight: 900;" text-align="right">x</text>
        <use href="#i.bar" style="transform: translate(4px, 0) scale(0.7)" />
      </g>
    </defs>
    <use href="#i.listNumbersItem" transform="translate(0 -12)" />
    <use href="#i.listNumbersItem" />
    <use href="#i.listNumbersItem" transform="translate(0 12)" />
  </g>`);
export const listNumbersBox = (`<g id="i.listNumbersBox">
    <use href="#i.square" style="--rx: 8%" class="container border" />
    <use href="#i.listNumbers" />
  </g>`);
export const listBulletsBox = (`<g id="i.listBulletsBox">
    <use href="#i.square" style="--rx: 8%" class="container border" />
    <use href="#i.listBullets" />
  </g>`);
export const peopleGroup = (
`<g id="i.peopleGroup">
  <defs>
    <mask id="PeopleGroupMask">
      <rect x="0%" y="0" width="100%" height="100%" fill="white" />
      <use href="#i.person" class="mask-content" transform="translate(12 12)" />
    </mask>
  </defs>
  <g style="transform: scale(0.85)">
    <use href="#i.person" transform="translate(-6 -6)" mask="url(#PeopleGroupMask)" />
    <use href="#i.person" transform="translate(6 6)" />
  </g>
</g>`);