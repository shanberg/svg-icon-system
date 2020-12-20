export const plus = `<path id="i_plus" class="border" d="M32,16 L32,48 M16,32 L48,32" />`;
export const bar = `<path id="i_bar" class="border" d="M16,32 l32,0" />`;
export const arrow = `<path id="i_arrow" class="border" d="M16,32 l32,0 m-16,-16 l16,16 l-16,16" />`;
export const chevron = `<path id="i_chevron" class="border" d="M26,16 l16,16, l-16,16" />`;
export const person = `<path id="i_person" d="M32,35 C38.25,35 44,36.8 49,39.9 L49,47 C49,49 47.2,51 45,51 L19,51 C16.8,51 15,49.2 15,47 L15,39.9 C19.9,36.8 25.8,35 32,35 Z M32,11 C37.3,11 41.5,15.3 41.5,20.5 C41.5,25.7 37.2,30 32,30 C26.8,30 22.5,25.7 22.5,20.5 C22.5,15.3 26.8,11 32,11 z" />`;
export const circle = `<circle id="i_circle" cx="50%" cy="50%" r="28%" />`;
export const square = `<rect id="i_square" x="25%" y="25%" width="50%" height="50%" style="rx: var(--rx, 0)" />`;
export const rectangle = `<rect id="i_rectangle" x="20%" y="27%" width="60%" height="46%" style="rx: var(--rx, 0)" />`;
export const hexagon = `<path id="i_hexagon"d="M32, 14 l16, 10 l0, 16 l -16, 10 l-16,-10 l0,-16 z" />`;
export const delta = `<path id="i_delta" d="
M32,10
l20,36.5
l-40,0
z" />`;
export const checkmark = `<path id="i_checkmark" class="border" d="M14,32 l12,12 l24,-24" />`;
export const octo = `<path id="i_octo" class="border" d="M29,16 l-6,32 M41,16 l-6,32 M16,26 l32,0 M16,38 l32,0" />`;
export const heart = `<path id="i_heart" d="M 12,24 A 8,8 0,0,1 32,24 A 8,8 0,0,1 52,24 Q 52,32 32,50 Q 12,32 12,24 z" />`;
export const bullet = `<use id="i_bullet" href="#i_circle" class="fill" style="transform: scale(0.3)" />`;
export const disc = `<use id="i_disc" href="#i_circle" class="border" style="transform: scale(0.3)" />`;
export const x = `<use id="i_x" href="#i_plus" style="transform: rotate(45deg)" />`;
export const square_round = `<use id="i_square_round" href="#i_square" style="--rx: 12%" />`;
export const rectangle_round = `<use id="i_rectangle_round" href="#i_rectangle" style="--rx: 10%" />`;
export const diamond = `<use id="i_diamond" href="#i_square" style="transform: rotate(45deg) scale(0.9)" />`;
export const arrow_right = `<use id="i_arrow_right" href="#i_arrow" />`;
export const arrow_down = `<use id="i_arrow_down" href="#i_arrow" style="transform: rotate(0.25turn)" />`;
export const arrow_left = `<use id="i_arrow_left" href="#i_arrow" style="transform: rotate(0.5turn)" />`;
export const arrow_up = `<use id="i_arrow_up" href="#i_arrow" style="transform: rotate(0.75turn)" />`;
export const arrow_forward = `<use id="i_arrow_forward" href="#i_arrow" />`;
export const minus = `<use id="i_minus" href="#i_bar" style="transform: scale(0.7)" />`;
export const dash = `<use id="i_dash" href="#i_bar" style="transform: scale(1.1)" />`;
export const grid = `
<g id="i_grid">
    <use href="#i_square" style="transform: translate(-15.625%, -15.625%) scale(0.4)" />
    <use href="#i_square" style="transform: translate(15.625%, -15.625%) scale(0.4)" />
    <use href="#i_square" style="transform: translate(-15.625%, 15.625%) scale(0.4)" />
    <use href="#i_square" style="transform: translate(15.625%, 15.625%) scale(0.4)" />
</g>`;
export const grid_round = `<use id="i_grid_round" href="#i_grid" style="--rx: 12%" />`;
export const chevron_right = `<use id="i_chevron_right" href="#i_chevron" />`;
export const chevron_down = `<use id="i_chevron_down" href="#i_chevron" style="transform: rotate(0.25turn)" />`;
export const chevron_left = `<use id="i_chevron_left" href="#i_chevron" style="transform: rotate(0.5turn)" />`;
export const chevronUp = `<use id="i_chevronUp" href="#i_chevron" style="transform: rotate(0.75turn)" />`;
export const triangle = `<use id="i_triangle" href="#i_delta" />`;
export const triangle_right = `<use id="i_triangle_right" href="#i_delta" style="transform: rotate(0.25turn)" />`;
export const triangle_down = `<use id="i_triangle_down" href="#i_delta" style="transform: rotate(0.5turn)" />`;
export const triangle_left = `<use id="i_triangle_left" href="#i_delta" style="transform: rotate(0.75turn)" />`;
export const triangle_up = `<use id="i_triangle_up" href="#i_delta" />`;
export const checkmark_narrow = `<use id="i_checkmark_narrow" href="#i_checkmark" style="transform: scaleX(0.8)" />`;
export const chevron_2 = `
<g id="i_chevron_2">
  <use href="#i_chevron" transform="translate(-6)" />
  <use href="#i_chevron" transform="translate(6)" />
</g>`;
export const chevron_2_up = `<use id="i_chevron_2_up" href="#i_chevron_2" />`;
export const chevron_2_right = `<use id="i_chevron_2_right" href="#i_chevron_2" style="transform: rotate(0.25turn)" />`;
export const chevron_2_down = `<use id="i_chevron_2_down" href="#i_chevron_2" style="transform: rotate(0.5turn)" />`;
export const chevron_2_left = `<use id="i_chevron_2_left" href="#i_chevron_2" style="transform: rotate(0.75turn)" />`;
export const draghandle_vertical = `
<g id="i_draghandle_vertical">
  <use href="#i_bar" transform="translate(0 -4)" />
  <use href="#i_bar" transform="translate(0 4)" />
</g>`;
export const draghandle_horizontal = `<use id="i_draghandle_horizontal" href="#i_draghandle_vertical" style="transform: rotate(0.25turn)" />`;
export const menuBars = `
<g id="i_menuBars">
  <use href="#i_bar" transform="translate(0 -12)" />
  <use href="#i_bar" />
  <use href="#i_bar" transform="translate(0 12)" />
</g>`;
export const filter = `
<g id="i_filter">
  <use href="#i_bar" style="transform: translate(0, -12px)" />
  <use href="#i_bar" style="transform: scaleX(0.50)" />
  <use href="#i_bar" style="transform: translate(0, 12px) scaleX(0.1)" />
</g>`;
export const list_bullet = `
<g id="i_list_bullet">
  <defs>
    <g id="i_list_bullet.item">
      <use href="#i_bullet" style="transform: translate(-16px, 0) scale(0.35)" />
      <use href="#i_bar" style="transform: translate(4px, 0) scale(0.7)" />
    </g>
  </defs>
  <use href="#i_list_bullet.item" transform="translate(0 -12)" />
  <use href="#i_list_bullet.item" />
  <use href="#i_list_bullet.item" transform="translate(0 12)" />
</g>`;
export const list_number = `
<g id="i_list_number" style="counter-reset: icon-list-number-counter">
  <defs>
    <g id="i_list_number.item" style="counter-increment: icon-list-number-counter">
      <text style="transform: translate(14px, 34px) scale(0.5); font-size: 100%; font-weight: 900;" text-align="right">x</text>
      <use href="#i_bar" style="transform: translate(4px, 0) scale(0.7)" />
    </g>
  </defs>
  <use href="#i_list_number.item" transform="translate(0 -12)" />
  <use href="#i_list_number.item" />
  <use href="#i_list_number.item" transform="translate(0 12)" />
</g>`;
export const list_number_box = `
<g id="i_list_number_box">
  <use href="#i_square" style="--rx: 8%" class="container border" />
  <use href="#i_list_number" />
</g>`;
export const list_bullet_box = `
<g id="i_list_bullet_box">
  <use href="#i_square" style="--rx: 8%" class="container border" />
  <use href="#i_list_bullet" />
</g>`;
export const person_2 = `
<g id="i_person_2">
  <mask id="person_2_mask">
    <rect x="0%" y="0%" width="100%" height="100%" fill="white" />
    <use href="#i_person" class="mask-content" transform="translate(12 12)" />
  </mask>
  <g style="transform: scale(0.85)">
    <use href="#i_person" transform="translate(-6 -6)" mask="url(#person_2_mask)" />
    <use href="#i_person" transform="translate(6 6)" />
  </g>
</g>`;
export const person_3_link = `
<g id="i_person_3_link" style="transform: scale(1.2); transform-origin: 50% 33%;">
  <use href="#i_person" style="transform: translate(0, -14px) scale(0.35)" />
  <use href="#i_person" style="transform: translate(-12px, 5px) scale(0.35)" />
  <use href="#i_person" style="transform: translate(12px, 5px) scale(0.35)" />
  <path class="border" d="M32,30 l0,3 l3,1.5 M32,30, l0,3 l-3,1.5" />
</g>`;