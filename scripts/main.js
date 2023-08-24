var closedWindowIcon = "<svg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 24 24'><path fill='currentColor' d='M6 11h4V9h4v2h4V4H6v7m12 2H6v7h12v-7M6 2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Z' /></svg>";
var openWindowIcon = "<svg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 24 24'><path fill='currentColor' d='M6 8h4V6h4v2h4V4H6v4m12 2H6v5h12v-5M6 20h12v-3H6v3M6 2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Z' /></svg>";
var closedDoorIcon = "<svg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 24 24'><path fill='currentColor' d='M16 11h2v2h-2v-2m-4-8h7c1.11 0 2 .89 2 2v14h1v2H2v-2h8V5c0-1.11.89-2 2-2m0 2v14h7V5h-7Z'/></svg>";
var openDoorIcon = "<svg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 24 24'><path fill='currentColor' d='M12 3c-1.11 0-2 .89-2 2H3v14H2v2h20v-2h-1V5c0-1.11-.89-2-2-2h-7m0 2h7v14h-7V5m-7 6h2v2H5v-2Z'/></svg>";
var alexaIcon = "<svg style='line-height: none; padding: none; border: none; margin: none;' xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 48 48'><circle cx='24' cy='24' r='21.5' fill='none' stroke='black' stroke-linecap='round' stroke-linejoin='round'/><g fill='none' stroke='black' stroke-linecap='round' stroke-linejoin='round'><path d='M34.18 23.914c1.367-.554 3.8-1.29 4.533-.402c.792.96-.21 3.045-1.131 4.665'/><path d='M9 24.556c2.162 1.717 8.548 4.345 15.351 4.345c6.486 0 10.446-2.35 12.5-3.785'/></g></svg>";
var alexaIconGray = "<svg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 48 48'><circle cx='24' cy='24' r='21.5' fill='none' stroke='gray' stroke-linecap='round' stroke-linejoin='round'/><g fill='none' stroke='gray' stroke-linecap='round' stroke-linejoin='round'><path d='M34.18 23.914c1.367-.554 3.8-1.29 4.533-.402c.792.96-.21 3.045-1.131 4.665'/><path d='M9 24.556c2.162 1.717 8.548 4.345 15.351 4.345c6.486 0 10.446-2.35 12.5-3.785'/></g></svg>";
var lightOnIcon = "<svg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 24 24'><path fill='black' d='M12 2a7 7 0 0 1 7 7c0 2.38-1.19 4.47-3 5.74V17a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2.26C6.19 13.47 5 11.38 5 9a7 7 0 0 1 7-7M9 21v-1h6v1a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1m3-17a5 5 0 0 0-5 5c0 2.05 1.23 3.81 3 4.58V16h4v-2.42c1.77-.77 3-2.53 3-4.58a5 5 0 0 0-5-5Z'/></svg>";
var lightOffIcon = "<svg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 24 24'><path fill='black' d='M12 2C9.76 2 7.78 3.05 6.5 4.68l9.81 9.82C17.94 13.21 19 11.24 19 9a7 7 0 0 0-7-7M3.28 4L2 5.27L5.04 8.3C5 8.53 5 8.76 5 9c0 2.38 1.19 4.47 3 5.74V17a1 1 0 0 0 1 1h5.73l4 4L20 20.72L3.28 4M9 20v1a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1H9Z'/></svg>";
var binarySensorDefaultOn = "<svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24'><g fill='none' stroke='currentColor' stroke-width='1.5'><path d='M1 15V9a6 6 0 0 1 6-6h10a6 6 0 0 1 6 6v6a6 6 0 0 1-6 6H7a6 6 0 0 1-6-6Z'/><path d='M9 9a3 3 0 1 1 0 6a3 3 0 0 1 0-6Z'/><path stroke-linecap='round' stroke-linejoin='round' d='M14 15V9l4 6V9'/></g></svg>";
var binarySensorDefaultOff = "<svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24'><g fill='none' stroke='currentColor' stroke-width='1.5'><path d='M1 15V9a6 6 0 0 1 6-6h10a6 6 0 0 1 6 6v6a6 6 0 0 1-6 6H7a6 6 0 0 1-6-6Z'/><path d='M7 9a3 3 0 1 1 0 6a3 3 0 0 1 0-6Z'/><path stroke-linecap='round' stroke-linejoin='round' d='M12 15V9h3m2 6V9h3m-8 3h2.572M17 12h2.572'/></g></svg>";
var alertEntity = "<svg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 24 24'><path fill='black' d='M12 2L1 21h22M12 6l7.53 13H4.47M11 10v4h2v-4m-2 6v2h2v-2'/></svg>";
var tvOnIcon = "<svg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 24 24'><path fill='black' d='M21 17H3V5h18m0-2H3a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h5v2h8v-2h5a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2Z'/></svg>";
var tvOffIcon = "<svg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 24 24'><path fill='black' d='M.5 2.77L1.78 1.5L21 20.72L19.73 22l-3-3H16v2H8v-2H3a2 2 0 0 1-2-2V5c0-.5.17-.93.46-1.27L.5 2.77M21 17V5H7.82l-2-2H21a2 2 0 0 1 2 2v12c0 .85-.55 1.59-1.3 1.87L19.82 17H21M3 17h11.73L3 5.27V17Z'/></svg>";
var stdOnMediaPlayerIcon = "<svg width='48' height='48' preserveAspectRatio='xMidYMid meet' focusable='false' role='img' aria-hidden='true' viewBox='0 0 24 24'> <g> <!--?lit$446739693$--><path fill='black' d='M1,10V12A9,9 0 0,1 10,21H12C12,14.92 7.07,10 1,10M1,14V16A5,5 0 0,1 6,21H8A7,7 0 0,0 1,14M1,18V21H4A3,3 0 0,0 1,18M21,3H3C1.89,3 1,3.89 1,5V8H3V5H21V19H14V21H21A2,2 0 0,0 23,19V5C23,3.89 22.1,3 21,3Z'></path> </g> </svg>";
var stdOffMediaPlayerIcon = "<svg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 24 24'><path fill='black' d='M1.6 1.27L.25 2.75L1.41 3.8C1.16 4.13 1 4.55 1 5v3h2V5.23L18.2 19H14v2h6.41l1.9 1.72l1.34-1.48M6.5 3l2.2 2H21v11.14l2 1.81V5a2 2 0 0 0-2-2M1 10v2a9 9 0 0 1 9 9h2c0-6.08-4.92-11-11-11m0 4v2a5 5 0 0 1 5 5h2a7 7 0 0 0-7-7m0 4v3h3a3 3 0 0 0-3-3Z'/></svg>";
var stdOnSwitchIcon = "<svg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 24 24'><path fill='black' d='M17 7H7a5 5 0 0 0-5 5a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5a5 5 0 0 0-5-5m0 8a3 3 0 0 1-3-3a3 3 0 0 1 3-3a3 3 0 0 1 3 3a3 3 0 0 1-3 3Z'/></svg>";
var stdOffSwitchIcon = "<svg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 24 24'><path fill='black' d='M17 7H7a5 5 0 0 0-5 5a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5a5 5 0 0 0-5-5M7 15a3 3 0 0 1-3-3a3 3 0 0 1 3-3a3 3 0 0 1 3 3a3 3 0 0 1-3 3Z'/></svg>";
var heaterOnIcon = "<svg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 24 24'><path fill='black' d='M7.95 3L6.53 5.19L7.95 7.4h-.01l-1.99 3.1l-1.73-.9l1.42-2.21l-1.42-2.2l2-3.1L7.95 3m6-.11L12.53 5.1l1.42 2.2l-.01.01l-1.99 3.09l-1.73-.9l1.42-2.2l-1.42-2.2l2-3.1l1.73.89m6.05 0L18.56 5.1L20 7.3v.01l-2 3.09l-1.75-.9l1.42-2.2l-1.42-2.2l2-3.1l1.75.89M2 22v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8h-2v-2H4v2H2m4-8a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1m4 0a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1m4 0a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1m4 0a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1Z'/></svg>";
var heaterOffIcon = "<svg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 24 24'><path fill='black' d='M3.28 2L2 3.27l2.77 2.77l.87 1.35L4.22 9.6l1.73.9l1.28-2l3.5 3.5H4a2 2 0 0 0-2 2v8h2v-2h14.73L20 21.27V22h2v-1.28L3.28 2M7 17a1 1 0 0 1-1 1a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1a1 1 0 0 1 1 1v2m4 0a1 1 0 0 1-1 1a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1a1 1 0 0 1 1 1v2m4 0a1 1 0 0 1-1 1a1 1 0 0 1-1-1v-2c0-.21.08-.39.18-.55L15 16.27V17m1.25-7.5l1.42-2.2l-1.42-2.2l2-3.1l1.75.89l-1.44 2.21L20 7.3v.01l-2 3.09l-1.75-.9M22 14v4.18l-3-3V15a1 1 0 0 0-1-1c-.05 0-.1 0-.15.03L15.82 12H20a2 2 0 0 1 2 2M11.64 7.3l-1.42-2.2l2-3.1l1.73.89l-1.42 2.21l1.42 2.2l-.01.01L12.84 9l-1.4-1.38l.2-.32M7.5 3.69L6.1 2.28l.12-.19L7.95 3l-.45.69Z'/></svg>";
var microwaveOnIcon = "<svg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 24 24'><path fill='black' d='M4 5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H4m0 2h12v10H4V7m15 0a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1m-6 2v6h2V9h-2m6 2a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1Z'/></svg>";
var microwaveOffIcon = "<svg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 24 24'><path fill='black' d='M22.11 21.46L2.39 1.73L1.11 3l2.15 2.15C2.5 5.44 2 6.16 2 7v10a2 2 0 0 0 2 2h13.11l3.73 3.73l1.27-1.27M4 17V7h1.11l10 10H4M16 7v5.8l5.5 5.51c.31-.36.5-.81.5-1.31V7a2 2 0 0 0-2-2H8.2l2 2H16m3 0c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1m0 4c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1m-6-1.2V9h2v2.8l-2-2Z'/></svg>";
var dishwasherOnIcon = "<svg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 24 24'><path fill='black' d='M18 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2m-8 2a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1M7 4a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1m11 16H6V8h12v12m-3.33-4.67c.02.7-.26 1.38-.76 1.88a2.7 2.7 0 0 1-3.82 0c-.5-.5-.78-1.18-.76-1.88c.07-.71.3-1.39.67-2c.37-.83.81-1.6 1.33-2.33l.67-1c1.79 2.59 2.67 4.36 2.67 5.33'/></svg>";
var dishwasherOffIcon = "<svg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 24 24'><path fill='black' d='M22.11 21.46L2.39 1.73L1.11 3L4 5.89V20c0 1.11.89 2 2 2h12c.58 0 1.1-.25 1.46-.65l1.38 1.38l1.27-1.27M18 20H6V8h.11l4.39 4.37c-.19.32-.35.63-.5.96c-.37.61-.6 1.29-.67 2c-.02.7.26 1.38.76 1.88a2.7 2.7 0 0 0 3.82 0c.25-.24.44-.53.59-.85l3.5 3.53V20M11.2 8H18v6.8l2 2V4a2 2 0 0 0-2-2H6c-.24 0-.46.05-.67.13L11.2 8M10 4c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1Z'/></svg>";
var washingMachineOnIcon = "<svg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 24 24'><path fill='black' d='M14.83 11.17a4.008 4.008 0 0 1 0 5.66a4.008 4.008 0 0 1-5.66 0l5.66-5.66M6 2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2m1 2a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1m3 0a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1m2 4a6 6 0 0 0-6 6a6 6 0 0 0 6 6a6 6 0 0 0 6-6a6 6 0 0 0-6-6Z'/></svg>";
var washingMachineOffIcon = "<svg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 24 24'><path fill='black' d='M22.11 21.46L2.39 1.73L1.11 3L4 5.89V20c0 1.11.89 2 2 2h12c.58 0 1.1-.25 1.46-.65l1.38 1.38l1.27-1.27M12 20c-3.31 0-6-2.69-6-6c0-1.68.7-3.2 1.82-4.29l4.24 4.24l-2.89 2.88a4.008 4.008 0 0 0 5.66 0c.02-.02.03-.04.05-.06l1.41 1.41A5.956 5.956 0 0 1 12 20m-.75-11.95C11.5 8 11.75 8 12 8c3.31 0 6 2.69 6 6c0 .25 0 .5-.05.75L20 16.8V4a2 2 0 0 0-2-2H6c-.24 0-.46.05-.67.13l5.92 5.92M10 4c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1Z'/></svg>";
var fridgeOnIcon = "<svg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 24 24'><path fill='black' d='M9 21v1H7v-1a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v15a2 2 0 0 1-2 2v1h-2v-1H9M7 4v5h10V4H7m0 15h10v-8H7v8m1-7h2v3H8v-3m0-6h2v2H8V6Z'/></svg>";
var fridgeOffIcon = "<svg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 24 24'><path fill='black' d='M22.11 21.46L2.39 1.73L1.11 3L5 6.89V19a2 2 0 0 0 2 2v1h2v-1h6v1h2v-1c.58 0 1.1-.25 1.46-.65l2.38 2.38l1.27-1.27M17 19H7v-8h2.11L17 18.89V19M7.2 4L5.7 2.5c.35-.31.8-.5 1.3-.5h10a2 2 0 0 1 2 2v11.8l-2-2V11h-2.8l-2-2H17V4H7.2m.8 8h2v3H8v-3Z'/></svg>";
var waterFountainOnIcon = "<svg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 24 24'><path fill='black' d='M18.32 8H5.67l-.44-4h13.54M12 19a3 3 0 0 1-3-3c0-2 3-5.4 3-5.4s3 3.4 3 5.4a3 3 0 0 1-3 3M3 2l2 18.23c.13 1 .97 1.77 2 1.77h10c1 0 1.87-.77 2-1.77L21 2H3Z'/></svg>";
var waterFountainOffIcon = "<svg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 24 24'><path fill='black' d='M1 4.27L2.28 3L21 21.72L19.73 23l-1.46-1.46c-.34.29-.77.46-1.27.46H7a2.02 2.02 0 0 1-2-1.77L3.53 6.8L1 4.27M18.32 8l.45-4H5.82l-2-2H21l-1.71 15.47L9.82 8h8.5Z'/></svg>";
var googleAssistantIcon = "<svg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 24 24'><path fill='black' d='M7 2a6 6 0 0 0-6 6a6 6 0 0 0 6 6a6 6 0 0 0 6-6a6 6 0 0 0-6-6m14.5 4A1.5 1.5 0 0 0 20 7.5A1.5 1.5 0 0 0 21.5 9A1.5 1.5 0 0 0 23 7.5A1.5 1.5 0 0 0 21.5 6M17 8a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3m0 7a3.5 3.5 0 0 0-3.5 3.5A3.5 3.5 0 0 0 17 22a3.5 3.5 0 0 0 3.5-3.5A3.5 3.5 0 0 0 17 15Z'/></svg>";
var googleAssistantIconGrey = "<svg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 24 24'><path fill='gray' d='M7 2a6 6 0 0 0-6 6a6 6 0 0 0 6 6a6 6 0 0 0 6-6a6 6 0 0 0-6-6m14.5 4A1.5 1.5 0 0 0 20 7.5A1.5 1.5 0 0 0 21.5 9A1.5 1.5 0 0 0 23 7.5A1.5 1.5 0 0 0 21.5 6M17 8a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3m0 7a3.5 3.5 0 0 0-3.5 3.5A3.5 3.5 0 0 0 17 22a3.5 3.5 0 0 0 3.5-3.5A3.5 3.5 0 0 0 17 15Z'/></svg>";
var temperatureIcon = "<svg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 24 24'><path fill='black' d='M15 13V5a3 3 0 0 0-6 0v8a5 5 0 1 0 6 0m-3-9a1 1 0 0 1 1 1v3h-2V5a1 1 0 0 1 1-1Z'/></svg>";
var batteryIcon = "<svg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 24 24'><path fill='black' d='M16 20H8V6h8m.67-2H15V2H9v2H7.33C6.6 4 6 4.6 6 5.33v15.34C6 21.4 6.6 22 7.33 22h9.34c.74 0 1.33-.59 1.33-1.33V5.33C18 4.6 17.4 4 16.67 4M15 16H9v3h6v-3m0-4.5H9v3h6v-3Z'/></svg>";
var humidityIcon = "<svg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 24 24'><path fill='black' d='M21.86 12.5A4.313 4.313 0 0 0 19 11c0-1.95-.68-3.6-2.04-4.96C15.6 4.68 13.95 4 12 4c-1.58 0-3 .47-4.25 1.43s-2.08 2.19-2.5 3.72c-1.25.28-2.29.93-3.08 1.95S1 13.28 1 14.58c0 1.51.54 2.8 1.61 3.85C3.69 19.5 5 20 6.5 20h12c1.25 0 2.31-.44 3.19-1.31c.87-.88 1.31-1.94 1.31-3.19c0-1.15-.38-2.15-1.14-3m-1.59 4.77c-.48.49-1.07.73-1.77.73h-12c-.97 0-1.79-.34-2.47-1C3.34 16.29 3 15.47 3 14.5s.34-1.79 1.03-2.47C4.71 11.34 5.53 11 6.5 11H7c0-1.38.5-2.56 1.46-3.54C9.44 6.5 10.62 6 12 6s2.56.5 3.54 1.46C16.5 8.44 17 9.62 17 11v2h1.5c.7 0 1.29.24 1.77.73S21 14.8 21 15.5s-.24 1.29-.73 1.77M8.03 10.45c0-.78.64-1.42 1.42-1.42c.78 0 1.42.64 1.42 1.42c0 .78-.64 1.42-1.42 1.42c-.78 0-1.42-.64-1.42-1.42m7.94 5.1c0 .78-.64 1.42-1.42 1.42c-.78 0-1.42-.64-1.42-1.42c0-.78.64-1.42 1.42-1.42c.78 0 1.42.64 1.42 1.42M14.8 9l1.2 1.2L9.2 17L8 15.8L14.8 9Z'/></svg>";
var floorplan1 = "<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 32 32'><path fill='currentColor' d='M28 2H4c-1.1 0-2 .9-2 2v24c0 1.1.9 2 2 2h15v-2c0-2.8 2.2-5 5-5v-2c-3.9 0-7 3.1-7 7h-3v-4h-2v4H4V4h8v14h2v-5h4v-2h-4V4h14v7h-4v2h4v15h-4v2h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z'/></svg>";
var floorplan2 = "<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 15 15'><path fill='currentColor' fill-rule='evenodd' d='M0 0h4.651l3.126 2.084l-.554.832L4.349 1H1v13h5V8H4V7h5v1H7v6h7V8h-2V7h2V1h-4V0h5v15H0V0Z' clip-rule='evenodd'/></svg>";
var switchesIcon = "<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24'><path fill='white' d='M3 4h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1m7 0h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1m7 0h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1M4 18h2v-5H4v5m7-7h2V6h-2v5m7 7h2v-5h-2v5Z'/></svg>";
var stdOnSwitchIconSmall = "<svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24'><path fill='black' d='M17 7H7a5 5 0 0 0-5 5a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5a5 5 0 0 0-5-5m0 8a3 3 0 0 1-3-3a3 3 0 0 1 3-3a3 3 0 0 1 3 3a3 3 0 0 1-3 3Z'/></svg>";
var stdOffSwitchIconSmall = "<svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24'><path fill='black' d='M17 7H7a5 5 0 0 0-5 5a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5a5 5 0 0 0-5-5M7 15a3 3 0 0 1-3-3a3 3 0 0 1 3-3a3 3 0 0 1 3 3a3 3 0 0 1-3 3Z'/></svg>";


// get floorplan div and set the image from data.js as src
function setFloorPlanImg(floor) {

    var floorplanImgDiv = document.getElementById("floorplanImg");

    if (floor == 1) {
        floorplanImgDiv.src = floorplan1stFloor;
    }
    else if (floor == 2) {
        floorplanImgDiv.src = floorplan2ndFloor;
    }

}

function fetchAPIAndPopulateVariable(entity_id) {

    var apiRequest = new XMLHttpRequest();


    if (arguments.length == 1) {
        apiRequest.open("GET", hassaddress + "/api/states/" + entity_id, false);
    } else {
        apiRequest.open("GET", hassaddress + "/api/states", false);
    }

    apiRequest.setRequestHeader("Authorization", "Bearer " + hasspass);
    apiRequest.send(null);

    if (apiRequest.status === 200 && apiRequest.readyState == 4) {
        var jsonResponse = JSON.parse(apiRequest.responseText);
        return jsonResponse;
    } else {
        return null;
    }
}

function homefunc(id, state, floor) {
    //Should work on all e-ink devices with a browser that supports Javascript (Kindle 2 (2009) in advanced mode and above)
    //LOCAL SETUP
    var xmlhttp = new XMLHttpRequest(); // new HttpRequest instance
    xmlhttp.open("POST", hassaddress + "/api/services/" + id.substring(0, id.indexOf(".")) + "/" + state);
    xmlhttp.setRequestHeader("Authorization", "Bearer " + hasspass);
    xmlhttp.setRequestHeader("Content-Type", "application/json");

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState === 4) {
            if (xmlhttp.status === 200) {

                if (id.substring(0, id.indexOf(".")) != "light") {
                    sleepFor(1000);
                }

                if (floor == 3) {
                    loadContentSwitches(id);

                } else {
                    loadContent(floor, id);
                }
                //window.location.reload();
            } else {
                console.error("Submit fail");
            }
        }
    };

    xmlhttp.send(JSON.stringify({ entity_id: id }));
}

function sleepFor(sleepDuration) {
    var now = new Date().getTime();
    while (new Date().getTime() < now + sleepDuration) {
        /* Do nothing */
    }
}

function populateForecast(data, entity_id) {
    var forecastContainer = document.getElementById(entity_id);

    for (var i = 0; i < data.attributes.forecast.length; i++) {
        var forecast = data.attributes.forecast[i];
        var forecastItem = document.createElement("div");
        forecastItem.className = "forecast-item";

        var date = new Date(forecast.datetime);
        var dateString = date.toISOString().substring(0, 10);


        forecastItem.innerHTML = "<h2>" + dateString + "</h2>";
        forecastItem.innerHTML += "<p class='min-max'>" + forecast.condition + "</p>";
        forecastItem.innerHTML += "<p class='min-max'>" + forecast.temperature + "°C</p>";
        forecastItem.innerHTML += "<p class='min-max'>" + forecast.templow + "°C</p>";

        forecastContainer.appendChild(forecastItem);
    }
}


function loadContent(floor, entity_id) {
    setFloorPlanImg(floor);

    var apiData;

    if (arguments.length == 2) {
        apiData = fetchAPIAndPopulateVariable(entity_id);
    } else {
        apiData = fetchAPIAndPopulateVariable();
    }

    var floorEntities = devices1stFloor;

    if (floor == 2) {
        floorEntities = devices2ndFloor;
    }


    var newEntity = apiData;
    for (var i = 0; i < floorEntities.length; i++) {
        if (Object.prototype.toString.call(apiData) === "[object Array]") {
            var newEntity = apiData.filter(
                function (item) {
                    return item.entity_id === floorEntities[i][0];
                }
            );
        }
        else {
            var newEntity = [apiData];
            if (floorEntities[i][0] != newEntity[0]["entity_id"]) {
                continue;
            }

        }

        var newIcon = document.createElement("div");
        newIcon.className = "icon-div";
        newIcon.id = newEntity[0]["entity_id"];
        newIcon.style.top = floorEntities[i][1] + "px";
        newIcon.style.left = floorEntities[i][2] + "px";

        switch (newEntity[0]["entity_id"].split(".")[0]) {
            case "light":
            case "switch":
                var clickableIcon = document.createElement("a");
                switch (newEntity[0]["state"]) {
                    case "on":
                        clickableIcon.href = "javascript:homefunc('" + newEntity[0]["entity_id"] + "', 'turn_off', " + floor + ")";
                        switch (newEntity[0]["entity_id"].split(".")[0]) {
                            case "light":
                                clickableIcon.innerHTML = lightOnIcon;
                                break;
                            case "switch":
                                if (floorEntities[i].length < 4) {
                                    clickableIcon.innerHTML = stdOnSwitchIcon;
                                } else {
                                    switch (floorEntities[i][3]) {
                                        case "washingmachine":
                                            clickableIcon.innerHTML = washingMachineOnIcon;
                                            break;
                                        case "microwave":
                                            clickableIcon.innerHTML = microwaveOnIcon;
                                            break;
                                        case "smartplug":
                                            clickableIcon.innerHTML = stdOnSwitchIcon;
                                            break;
                                        case "dishwasher":
                                            clickableIcon.innerHTML = dishwasherOnIcon;
                                            break;
                                        case "heater":
                                            clickableIcon.innerHTML = heaterOnIcon;
                                            break;
                                        case "fridge":
                                            clickableIcon.innerHTML = fridgeOnIcon;
                                            break;
                                        case "waterfountain":
                                            clickableIcon.innerHTML = waterFountainOnIcon;
                                            break;
                                    }
                                }
                                break;
                            default:
                                clickableIcon.innerHTML = stdOnSwitchIcon;
                        }
                        break;
                    case "off":
                        clickableIcon.href = "javascript:homefunc('" + newEntity[0]["entity_id"] + "', 'turn_on', " + floor + ")";
                        switch (newEntity[0]["entity_id"].split(".")[0]) {
                            case "light":
                                clickableIcon.innerHTML = lightOffIcon;
                                break;
                            case "switch":
                                if (floorEntities[i].length < 4) {
                                    clickableIcon.innerHTML = stdOffSwitchIcon;
                                } else {
                                    switch (floorEntities[i][3]) {
                                        case "washingmachine":
                                            clickableIcon.innerHTML = washingMachineOffIcon;
                                            break;
                                        case "microwave":
                                            clickableIcon.innerHTML = microwaveOffIcon;
                                            break;
                                        case "smartplug":
                                            clickableIcon.innerHTML = stdOffSwitchIcon;
                                            break;
                                        case "dishwasher":
                                            clickableIcon.innerHTML = dishwasherOffIcon;
                                            break;
                                        case "heater":
                                            clickableIcon.innerHTML = heaterOffIcon;
                                            break;
                                        case "fridge":
                                            clickableIcon.innerHTML = fridgeOffIcon;
                                            break;
                                        case "waterfountain":
                                            clickableIcon.innerHTML = waterFountainOffIcon;
                                            break;
                                    }
                                }
                                break;
                            default:
                                clickableIcon.innerHTML = stdOffSwitchIcon;
                        }
                        break;
                    default:
                        clickableIcon.href = "javascript:homefunc('" + newEntity[0]["entity_id"] + "', 'toggle', " + floor + ")";;
                        clickableIcon.innerHTML = alertEntity;

                }
                newIcon.appendChild(clickableIcon);
                break;
            case "binary_sensor":
                switch (newEntity[0]["state"]) {
                    case "on":
                        if (floorEntities[i].length < 4) {
                            newIcon.innerHTML = binarySensorDefaultOn;
                        } else {
                            switch (floorEntities[i][3]) {
                                case "window":
                                    newIcon.innerHTML = openWindowIcon;
                                    break;
                                case "door":
                                    newIcon.innerHTML = openDoorIcon;
                                    break;
                                default:
                                    newIcon.innerHTML = binarySensorDefaultOn;
                            }
                        }
                        break;
                    case "off":
                        if (floorEntities[i].length < 4) {
                            newIcon.innerHTML = binarySensorDefaultOff;
                        } else {
                            switch (floorEntities[i][3]) {
                                case "window":
                                    newIcon.innerHTML = closedWindowIcon;
                                    break;
                                case "door":
                                    newIcon.innerHTML = closedDoorIcon;
                                    break;
                                default:
                                    newIcon.innerHTML = binarySensorDefaultOff;
                            }
                        }
                        break;
                    default:
                        newIcon = alertEntity;
                }
                break;
            case "sensor":
                if (floorEntities[i].length < 4) {
                    newIcon.innerHTML = "<p class='sensor_value'>Sensor: </p>";
                } else {
                    switch (floorEntities[i][3]) {
                        case "temperature":
                            newIcon.innerHTML = temperatureIcon;
                            break;
                        case "battery":
                            newIcon.innerHTML = batteryIcon;
                            break;
                        case "humidity":
                            newIcon.innerHTML = humidityIcon;
                            break;
                        default:
                            newIcon.innerHTML = "<p class='sensor_value'>Sensor: </p>";
                    }
                }

                var sensorValue = document.createElement("p");
                sensorValue.className = "sensor_value";
                sensorValue.innerHTML = newEntity[0]["state"] + " " + newEntity[0]["attributes"]["unit_of_measurement"];
                newIcon.appendChild(sensorValue);

                break;
            case "media_player":

                var clickableIcon = document.createElement("a");

                switch (newEntity[0]["state"]) {
                    case "playing":
                    case "paused":
                        clickableIcon.href = "javascript:homefunc('" + newEntity[0]["entity_id"] + "', 'media_play_pause', " + floor + ")";
                        if (floorEntities[i].length == 4) {
                            switch (floorEntities[i][3]) {
                                case "tv":
                                    clickableIcon.innerHTML = tvOnIcon;
                                    break;
                                case "alexa":
                                    clickableIcon.innerHTML = alexaIcon;
                                    break;
                                case "googleassistant":
                                    clickableIcon.innerHTML = googleAssistantIcon;
                                    break;
                                default:
                                    clickableIcon.innerHTML = stdOnMediaPlayerIcon;
                            }
                        }
                        else {
                            clickableIcon.innerHTML = stdOnMediaPlayerIcon;
                        }

                        var playing_info = "<p class='media_info'>";
                        if (newEntity[0]["state"] == "paused") {
                            playing_info += "[Paused] ";
                        }

                        if (newEntity[0]["attributes"]["media_title"] !== null) {
                            if (newEntity[0]["attributes"]["media_artist"] !== null) {
                                playing_info += newEntity[0]["attributes"]["media_artist"] + "</br>" + newEntity[0]["attributes"]["media_title"];
                            } else {
                                playing_info += newEntity[0]["attributes"]["media_title"];
                            }
                        }

                        if (playing_info == "") {
                            playing_info += "Playing";
                        }
                        playing_info += "</p>";

                        clickableIcon.innerHTML += playing_info;
                        break;
                    case "on":
                        clickableIcon.href = "javascript:homefunc('" + newEntity[0]["entity_id"] + "', 'turn_off', " + floor + ")";;
                        if (floorEntities[i].length == 4) {
                            switch (floorEntities[i][3]) {
                                case "tv":
                                    clickableIcon.innerHTML = tvOnIcon;
                                    break;
                                case "alexa":
                                    clickableIcon.innerHTML = alexaIcon;
                                    break;
                                case "googleassistant":
                                    clickableIcon.innerHTML = googleAssistantIcon;
                                    break;
                                default:
                                    clickableIcon.innerHTML = stdOnMediaPlayerIcon;
                            }
                        }
                        else {
                            clickableIcon.innerHTML = stdOnMediaPlayerIcon;
                        }

                        var playing_info = "<p class='media_info'>";

                        if (newEntity[0]["attributes"]["source"] !== null) {
                            playing_info += newEntity[0]["attributes"]["source"];
                        }
                        playing_info += "</p>";

                        clickableIcon.innerHTML += playing_info;
                        break;
                    case "idle":
                    case "standby":
                        clickableIcon.href = "javascript:homefunc('" + newEntity[0]["entity_id"] + "', 'turn_off', " + floor + ")";;
                        if (floorEntities[i].length == 4) {
                            switch (floorEntities[i][3]) {
                                case "tv":
                                    clickableIcon.innerHTML = tvOnIcon;
                                    break;
                                case "alexa":
                                    clickableIcon.innerHTML = alexaIcon;
                                    break;
                                case "googleassistant":
                                    clickableIcon.innerHTML = googleAssistantIcon;
                                    break;
                                default:
                                    clickableIcon.innerHTML = stdOnMediaPlayerIcon;
                            }
                        }
                        else {
                            clickableIcon.innerHTML = stdOnMediaPlayerIcon;
                        }
                        break;
                    case "off":
                        clickableIcon.href = "javascript:homefunc('" + newEntity[0]["entity_id"] + "', 'turn_on', " + floor + ")";
                        if (floorEntities[i].length == 4) {
                            switch (floorEntities[i][3]) {
                                case "tv":
                                    clickableIcon.innerHTML = tvOffIcon;
                                    break;
                                case "alexa":
                                    clickableIcon.innerHTML = alexaIconGray;
                                    break;
                                case "googleassistant":
                                    clickableIcon.innerHTML = googleAssistantIconGrey;
                                    break;
                                default:
                                    clickableIcon.innerHTML = stdOnMediaPlayerIcon;
                            }
                        }
                        else {
                            clickableIcon.innerHTML = stdOnMediaPlayerIcon;
                        }
                        break;
                    default:
                        clickableIcon.innerHTML = alertEntity;

                }
                newIcon.appendChild(clickableIcon);
                break;
            case "weather":
                if (floorEntities[i].length == 4) {
                    switch (floorEntities[i][3]) {
                        case "5dayforecast":
                            newIcon.className = "forecast-container";
                            break;
                        default:
                            newIcon.innerHTML = "<p class='media_info'><b>Current Forecast:</b><br/><font size=4px>" + newEntity[0]["attributes"]["temperature"] + " " + newEntity[0]["attributes"]["temperature_unit"] + "</font><br/>" + newEntity[0]["state"] + "</p>";
                    }
                } else {
                    newIcon.innerHTML = "<p class='media_info'><b>Current Forecast:</b><br/><font size=2px>" + newEntity[0]["attributes"]["temperature"] + " " + newEntity[0]["attributes"]["temperature_unit"] + "</font><br/>" + newEntity[0]["state"] + "</p>";
                }
                break;
            default:
                newIcon.innerHTML = "<p class='media_info'>" + newEntity[0]["entity_id"] + "<br/>" + newEntity[0]["state"] + "</p>";
        }


        var existingIcon = document.getElementById(newEntity[0]["entity_id"]);
        var exists = 0;

        if (existingIcon == null) {
            content.appendChild(newIcon);
        } else {
            exists = 1;
            existingIcon.innerHTML = newIcon.innerHTML;
        }

        if (newIcon.className == "forecast-container") {
            populateForecast(newEntity[0], newEntity[0]["entity_id"]);
        }

    }
}

function setMenu() {
    if (devices2ndFloor.length == 0) {
        var divMenu2ndFloor = document.getElementById('menu2');
        divMenu2ndFloor.style = "visibility: hidden; display: none;";
    }

}

function startup(floor) {
    setMenu();
    //loadContent(floor);
    if (floor == 1 || floor == 2) {
        loadContent(floor);
        setInterval(loadContent, 10000, floor); // 10 seg
    }
    else if (floor == 3) {
        loadContentSwitches();
        setInterval(loadContentSwitches, 10000); // 10 seg
    }

}

function loadContentSwitches(entity_id) {
    var apiData;
    var table = document.createElement('table');
    table.className = "table-switches";

    if (arguments.length == 1) {
        apiData = fetchAPIAndPopulateVariable(entity_id);
    } else {
        apiData = fetchAPIAndPopulateVariable();
    }

    if (Object.prototype.toString.call(apiData) === "[object Array]") {

        var switches = [];

        for (var i = 0; i < apiData.length; i++) {
            if (apiData[i]['entity_id'].substring(0, apiData[i]['entity_id'].indexOf(".")) == "switch") {
                switches.push(apiData[i]);
            }
        }

        switches.sort(function (a, b) {
            var keyA = a.attributes['friendly_name'].toLowerCase();
            var keyB = b.attributes['friendly_name'].toLowerCase();

            if (keyA < keyB) return -1;
            if (keyA > keyB) return 1;
            return 0;
        });

        var numRows = Math.ceil(switches.length / 5);

        for (var i = 0; i < numRows; i++) {
            var row = document.createElement('tr');

            for (var j = 0; j < 5; j++) {
                var index = i * 5 + j;
                if (index < switches.length) {
                    var cell = document.createElement('td');
                    cell.id = switches[index]['entity_id'];
                    //console.log(switches[index]['attributes']['friendly_name']);
                    var cellContent = switches[index]['attributes']['friendly_name'] + "<br/>";

                    switch (switches[index]['state']) {
                        case "on":
                            cellContent += "<a href=\"javascript:homefunc('" + switches[index]["entity_id"] + "', 'turn_off', 3)\" >";
                            cellContent += stdOnSwitchIconSmall;
                            cellContent += "</a>"
                            break;
                        case "off":
                            cellContent += "<a href=\"javascript:homefunc('" + switches[index]["entity_id"] + "', 'turn_on', 3)\" >";
                            cellContent += stdOffSwitchIconSmall;
                            cellContent += "</a>"
                            break;
                        default:
                            cellContent += "<a href=\"javascript:homefunc('" + switches[index]["entity_id"] + "', 'toggle', 3)\" >";
                            cellContent += alertEntity;
                            cellContent += "</a>"


                    }
                    cell.innerHTML = cellContent;
                    row.appendChild(cell);
                }
            }

            table.appendChild(row);
        }
    }
    else {
        // TODO only 1 item
        var cell = document.getElementById(apiData['entity_id']);
        var cellContent = apiData['attributes']['friendly_name'] + "<br/>";

        switch (apiData['state']) {
            case "on":
                cellContent += "<a href=\"javascript:homefunc('" + apiData['entity_id'] + "', 'turn_off', 3)\" >";
                cellContent += stdOnSwitchIconSmall;
                cellContent += "</a>"
                break;
            case "off":
                cellContent += "<a href=\"javascript:homefunc('" + apiData['entity_id'] + "', 'turn_on', 3)\" >";
                cellContent += stdOffSwitchIconSmall;
                cellContent += "</a>"
                break;
            default:
                cellContent += "<a href=\"javascript:homefunc('" + apiData['entity_id'] + "', 'toggle', 3)\" >";
                cellContent += alertEntity;
                cellContent += "</a>"
        }
        cell.innerHTML = cellContent;

    }

    var content = document.getElementById('content');
    content.appendChild(table);


}