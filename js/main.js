// SYSTEM ICONS
var alertIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="black" d="M12 2L1 21h22M12 6l7.53 13H4.47M11 10v4h2v-4m-2 6v2h2v-2"/></svg>';
var alexaIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="black" d="M12 0C5.37 0 0 5.37 0 12c0 6.09 4.53 11.11 10.4 11.9v-2.4a1.59 1.59 0 0 0-1.08-1.53A8.41 8.41 0 0 1 3.6 11.8a8.37 8.37 0 0 1 8.49-8.2a8.4 8.4 0 0 1 8.31 8.71l-.01.07a8.68 8.68 0 0 1-.03.38c0 .07-.01.14-.02.2c0 .08-.01.16-.02.23l-.02.1c-1.03 6.78-9.85 10.58-9.9 10.61c.52.07 1.06.1 1.6.1c6.63 0 12-5.37 12-12S18.63 0 12 0Z"/></svg>';
var alexaIconGray = '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="gray" d="M12 0C5.37 0 0 5.37 0 12c0 6.09 4.53 11.11 10.4 11.9v-2.4a1.59 1.59 0 0 0-1.08-1.53A8.41 8.41 0 0 1 3.6 11.8a8.37 8.37 0 0 1 8.49-8.2a8.4 8.4 0 0 1 8.31 8.71l-.01.07a8.68 8.68 0 0 1-.03.38c0 .07-.01.14-.02.2c0 .08-.01.16-.02.23l-.02.1c-1.03 6.78-9.85 10.58-9.9 10.61c.52.07 1.06.1 1.6.1c6.63 0 12-5.37 12-12S18.63 0 12 0Z"/></svg>';var automationOffIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="black" d="M23 15v3c0 .5-.36.88-.83.97L20.2 17h.8v-1h-1.8l-.2-.2V14c0-2.76-2.24-5-5-5h-1.8l-2-2h.8V5.73c-.6-.34-1-.99-1-1.73c0-1.1.9-2 2-2s2 .9 2 2c0 .74-.4 1.39-1 1.73V7h1c3.87 0 7 3.13 7 7h1c.55 0 1 .45 1 1M8.5 13.5c-1.1 0-2 .9-2 2s.9 2 2 2s2-.89 2-2s-.89-2-2-2m13.61 7.96l-1.27 1.27l-.95-.95c-.27.14-.57.22-.89.22H5a2 2 0 0 1-2-2v-1H2c-.55 0-1-.45-1-1v-3c0-.55.45-1 1-1h1c0-2.47 1.29-4.64 3.22-5.89L1.11 3l1.28-1.27l19.72 19.73m-4-1.46l-2.51-2.5h-.1a2 2 0 0 1-2-2v-.1L7.7 9.59C6.1 10.42 5 12.08 5 14v2H3v1h2v3h13.11Z"/></svg>';
var automationOnIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="black" d="M17.5 15.5c0 1.11-.89 2-2 2s-2-.89-2-2s.9-2 2-2s2 .9 2 2m-9-2c-1.1 0-2 .9-2 2s.9 2 2 2s2-.89 2-2s-.89-2-2-2M23 15v3c0 .55-.45 1-1 1h-1v1c0 1.11-.89 2-2 2H5a2 2 0 0 1-2-2v-1H2c-.55 0-1-.45-1-1v-3c0-.55.45-1 1-1h1c0-3.87 3.13-7 7-7h1V5.73c-.6-.34-1-.99-1-1.73c0-1.1.9-2 2-2s2 .9 2 2c0 .74-.4 1.39-1 1.73V7h1c3.87 0 7 3.13 7 7h1c.55 0 1 .45 1 1m-2 1h-2v-2c0-2.76-2.24-5-5-5h-4c-2.76 0-5 2.24-5 5v2H3v1h2v3h14v-3h2v-1Z"/></svg>';
var batteryIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="black" d="M16 20H8V6h8m.67-2H15V2H9v2H7.33C6.6 4 6 4.6 6 5.33v15.34C6 21.4 6.6 22 7.33 22h9.34c.74 0 1.33-.59 1.33-1.33V5.33C18 4.6 17.4 4 16.67 4M15 16H9v3h6v-3m0-9H9v3h6V7m0 4.5H9v3h6v-3Z"/></svg>';
var binarySensorOffIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.5"><path d="M1 15V9a6 6 0 0 1 6-6h10a6 6 0 0 1 6 6v6a6 6 0 0 1-6 6H7a6 6 0 0 1-6-6Z"/><path d="M7 9a3 3 0 1 1 0 6a3 3 0 0 1 0-6Z"/><path stroke-linecap="round" stroke-linejoin="round" d="M12 15V9h3m2 6V9h3m-8 3h2.572M17 12h2.572"/></g></svg>';
var binarySensorOnIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.5"><path d="M1 15V9a6 6 0 0 1 6-6h10a6 6 0 0 1 6 6v6a6 6 0 0 1-6 6H7a6 6 0 0 1-6-6Z"/><path d="M9 9a3 3 0 1 1 0 6a3 3 0 0 1 0-6Z"/><path stroke-linecap="round" stroke-linejoin="round" d="M14 15V9l4 6V9"/></g></svg>';
var dishwasherOffIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="black" d="M22.11 21.46L2.39 1.73L1.11 3L4 5.89V20c0 1.11.89 2 2 2h12c.58 0 1.1-.25 1.46-.65l1.38 1.38l1.27-1.27M18 20H6V8h.11l4.39 4.37c-.19.32-.35.63-.5.96c-.37.61-.6 1.29-.67 2c-.02.7.26 1.38.76 1.88a2.7 2.7 0 0 0 3.82 0c.25-.24.44-.53.59-.85l3.5 3.53V20M11.2 8H18v6.8l2 2V4a2 2 0 0 0-2-2H6c-.24 0-.46.05-.67.13L11.2 8M10 4c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1Z"/></svg>';
var dishwasherOnIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="black" d="M18 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2m-8 2a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1M7 4a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1m11 16H6V8h12v12m-3.33-4.67c.02.7-.26 1.38-.76 1.88a2.7 2.7 0 0 1-3.82 0c-.5-.5-.78-1.18-.76-1.88c.07-.71.3-1.39.67-2c.37-.83.81-1.6 1.33-2.33l.67-1c1.79 2.59 2.67 4.36 2.67 5.33"/></svg>';
var doorClosedIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="black" d="M16 11h2v2h-2v-2m-4-8h7c1.11 0 2 .89 2 2v14h1v2H2v-2h8V5c0-1.11.89-2 2-2m0 2v14h7V5h-7Z"/></svg>';
var doorOpenIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="black" d="M12 3c-1.11 0-2 .89-2 2H3v14H2v2h20v-2h-1V5c0-1.11-.89-2-2-2h-7m0 2h7v14h-7V5m-7 6h2v2H5v-2Z"/></svg>';
var fanOffIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="black" d="M12.5 2C9.64 2 8.57 4.55 9.29 7.47L15 13.16c.87.21 1.81.65 2.28 1.57c1.18 2.37 4.75 2.27 4.75-2.23c0-3.58-3.98-4.37-7.68-2.37c-.32-.4-.74-.71-1.22-.91c.19-.93.63-1.98 1.62-2.47C17.11 5.57 17 2 12.5 2M3.28 4L2 5.27l2.47 2.46C3.22 7.74 2 8.87 2 11.5c0 3.57 3.96 4.35 7.65 2.37c.32.4.75.72 1.24.92c-.2.92-.64 1.96-1.62 2.45C6.91 18.42 7 22 11.5 22c2.3 0 3.44-1.64 3.44-3.79L18.73 22L20 20.72L3.28 4Z"/></svg>';
var fanOnIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="black" d="M12 11a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1m.5-9c4.5 0 4.61 3.57 2.25 4.75c-.99.49-1.43 1.54-1.62 2.47c.48.2.9.51 1.22.91c3.7-2 7.68-1.21 7.68 2.37c0 4.5-3.57 4.6-4.75 2.23c-.5-.99-1.56-1.43-2.49-1.62c-.2.48-.51.89-.91 1.23c1.99 3.69 1.2 7.66-2.38 7.66c-4.5 0-4.59-3.58-2.23-4.76c.98-.49 1.42-1.53 1.62-2.45c-.49-.2-.92-.52-1.24-.92C5.96 15.85 2 15.07 2 11.5C2 7 5.56 6.89 6.74 9.26c.5.99 1.55 1.42 2.48 1.61c.19-.48.51-.9.92-1.22C8.15 5.96 8.94 2 12.5 2Z"/></svg>';
var floorplanIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="black" d="M10 5v5H9V5H5v8h4v-1h1v5H9v-3H5v5h7v-2h1v2h6v-2h2v4H3V3h18v12h-2v-5h-6v5h-1V9h7V5h-9Z"/></svg>';
var fridgeOffIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="black" d="M22.11 21.46L2.39 1.73L1.11 3L5 6.89V19a2 2 0 0 0 2 2v1h2v-1h6v1h2v-1c.58 0 1.1-.25 1.46-.65l2.38 2.38l1.27-1.27M17 19H7v-8h2.11L17 18.89V19M7.2 4L5.7 2.5c.35-.31.8-.5 1.3-.5h10a2 2 0 0 1 2 2v11.8l-2-2V11h-2.8l-2-2H17V4H7.2m.8 8h2v3H8v-3Z"/></svg>';
var fridgeOnIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="black" d="M9 21v1H7v-1a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v15a2 2 0 0 1-2 2v1h-2v-1H9M7 4v5h10V4H7m0 15h10v-8H7v8m1-7h2v3H8v-3m0-6h2v2H8V6Z"/></svg>';
var googleAssistantIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="black" d="M7 2a6 6 0 0 0-6 6a6 6 0 0 0 6 6a6 6 0 0 0 6-6a6 6 0 0 0-6-6m14.5 4A1.5 1.5 0 0 0 20 7.5A1.5 1.5 0 0 0 21.5 9A1.5 1.5 0 0 0 23 7.5A1.5 1.5 0 0 0 21.5 6M17 8a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3m0 7a3.5 3.5 0 0 0-3.5 3.5A3.5 3.5 0 0 0 17 22a3.5 3.5 0 0 0 3.5-3.5A3.5 3.5 0 0 0 17 15Z"/></svg>';
var googleAssistantIconGray = '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="gray" d="M7 2a6 6 0 0 0-6 6a6 6 0 0 0 6 6a6 6 0 0 0 6-6a6 6 0 0 0-6-6m14.5 4A1.5 1.5 0 0 0 20 7.5A1.5 1.5 0 0 0 21.5 9A1.5 1.5 0 0 0 23 7.5A1.5 1.5 0 0 0 21.5 6M17 8a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3m0 7a3.5 3.5 0 0 0-3.5 3.5A3.5 3.5 0 0 0 17 22a3.5 3.5 0 0 0 3.5-3.5A3.5 3.5 0 0 0 17 15Z"/></svg>';
var heaterOffIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="black" d="M3.28 2L2 3.27l2.77 2.77l.87 1.35L4.22 9.6l1.73.9l1.28-2l3.5 3.5H4a2 2 0 0 0-2 2v8h2v-2h14.73L20 21.27V22h2v-1.28L3.28 2M7 17a1 1 0 0 1-1 1a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1a1 1 0 0 1 1 1v2m4 0a1 1 0 0 1-1 1a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1a1 1 0 0 1 1 1v2m4 0a1 1 0 0 1-1 1a1 1 0 0 1-1-1v-2c0-.21.08-.39.18-.55L15 16.27V17m1.25-7.5l1.42-2.2l-1.42-2.2l2-3.1l1.75.89l-1.44 2.21L20 7.3v.01l-2 3.09l-1.75-.9M22 14v4.18l-3-3V15a1 1 0 0 0-1-1c-.05 0-.1 0-.15.03L15.82 12H20a2 2 0 0 1 2 2M11.64 7.3l-1.42-2.2l2-3.1l1.73.89l-1.42 2.21l1.42 2.2l-.01.01L12.84 9l-1.4-1.38l.2-.32M7.5 3.69L6.1 2.28l.12-.19L7.95 3l-.45.69Z"/></svg>';
var heaterOnIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="black" d="M7.95 3L6.53 5.19L7.95 7.4h-.01l-1.99 3.1l-1.73-.9l1.42-2.21l-1.42-2.2l2-3.1L7.95 3m6-.11L12.53 5.1l1.42 2.2l-.01.01l-1.99 3.09l-1.73-.9l1.42-2.2l-1.42-2.2l2-3.1l1.73.89m6.05 0L18.56 5.1L20 7.3v.01l-2 3.09l-1.75-.9l1.42-2.2l-1.42-2.2l2-3.1l1.75.89M2 22v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8h-2v-2H4v2H2m4-8a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1m4 0a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1m4 0a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1m4 0a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1Z"/></svg>';
var humidityIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="black" d="M21.86 12.5A4.313 4.313 0 0 0 19 11c0-1.95-.68-3.6-2.04-4.96C15.6 4.68 13.95 4 12 4c-1.58 0-3 .47-4.25 1.43s-2.08 2.19-2.5 3.72c-1.25.28-2.29.93-3.08 1.95S1 13.28 1 14.58c0 1.51.54 2.8 1.61 3.85C3.69 19.5 5 20 6.5 20h12c1.25 0 2.31-.44 3.19-1.31c.87-.88 1.31-1.94 1.31-3.19c0-1.15-.38-2.15-1.14-3m-1.59 4.77c-.48.49-1.07.73-1.77.73h-12c-.97 0-1.79-.34-2.47-1C3.34 16.29 3 15.47 3 14.5s.34-1.79 1.03-2.47C4.71 11.34 5.53 11 6.5 11H7c0-1.38.5-2.56 1.46-3.54C9.44 6.5 10.62 6 12 6s2.56.5 3.54 1.46C16.5 8.44 17 9.62 17 11v2h1.5c.7 0 1.29.24 1.77.73S21 14.8 21 15.5s-.24 1.29-.73 1.77M8.03 10.45c0-.78.64-1.42 1.42-1.42c.78 0 1.42.64 1.42 1.42c0 .78-.64 1.42-1.42 1.42c-.78 0-1.42-.64-1.42-1.42m7.94 5.1c0 .78-.64 1.42-1.42 1.42c-.78 0-1.42-.64-1.42-1.42c0-.78.64-1.42 1.42-1.42c.78 0 1.42.64 1.42 1.42M14.8 9l1.2 1.2L9.2 17L8 15.8L14.8 9Z"/></svg>';
var lightOffIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="black" d="M12 2C9.76 2 7.78 3.05 6.5 4.68l1.43 1.43C8.84 4.84 10.32 4 12 4a5 5 0 0 1 5 5c0 1.68-.84 3.16-2.11 4.06l1.42 1.44C17.94 13.21 19 11.24 19 9a7 7 0 0 0-7-7M3.28 4L2 5.27L5.04 8.3C5 8.53 5 8.76 5 9c0 2.38 1.19 4.47 3 5.74V17a1 1 0 0 0 1 1h5.73l4 4L20 20.72L3.28 4m3.95 6.5l5.5 5.5H10v-2.42a5.004 5.004 0 0 1-2.77-3.08M9 20v1a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1H9Z"/></svg>';
var lightOnIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="black" d="M12 2a7 7 0 0 1 7 7c0 2.38-1.19 4.47-3 5.74V17a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2.26C6.19 13.47 5 11.38 5 9a7 7 0 0 1 7-7M9 21v-1h6v1a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1m3-17a5 5 0 0 0-5 5c0 2.05 1.23 3.81 3 4.58V16h4v-2.42c1.77-.77 3-2.53 3-4.58a5 5 0 0 0-5-5Z"/></svg>';
var mediaPlayerOffIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="black" d="M1.6 1.27L.25 2.75L1.41 3.8C1.16 4.13 1 4.55 1 5v3h2V5.23L18.2 19H14v2h6.41l1.9 1.72l1.34-1.48M6.5 3l2.2 2H21v11.14l2 1.81V5a2 2 0 0 0-2-2M1 10v2a9 9 0 0 1 9 9h2c0-6.08-4.92-11-11-11m0 4v2a5 5 0 0 1 5 5h2a7 7 0 0 0-7-7m0 4v3h3a3 3 0 0 0-3-3Z"/></svg>';
var mediaPlayerOnIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="black" d="M1 10v2a9 9 0 0 1 9 9h2c0-6.08-4.93-11-11-11m0 4v2a5 5 0 0 1 5 5h2a7 7 0 0 0-7-7m0 4v3h3a3 3 0 0 0-3-3M21 3H3c-1.11 0-2 .89-2 2v3h2V5h18v14h-7v2h7a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2Z"/></svg>';
var microwaveOffIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="black" d="M22.11 21.46L2.39 1.73L1.11 3l2.15 2.15C2.5 5.44 2 6.16 2 7v10a2 2 0 0 0 2 2h13.11l3.73 3.73l1.27-1.27M4 17V7h1.11l10 10H4M16 7v5.8l5.5 5.51c.31-.36.5-.81.5-1.31V7a2 2 0 0 0-2-2H8.2l2 2H16m3 0c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1m0 4c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1m-6-1.2V9h2v2.8l-2-2Z"/></svg>';
var microwaveOnIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="black" d="M4 5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H4m0 2h12v10H4V7m15 0a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1m-6 2v6h2V9h-2m6 2a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1Z"/></svg>';
var pauseIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="black" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5V5h14v14m-6-3V8h2v8h-2m-4 0V8h2v8H9"/></svg>';
var playIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="black" d="M19 19H5V5h14m0-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m-9 5v8l5-4l-5-4Z"/></svg>';
var plugOffIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="black" d="M22.11 21.46L2.39 1.73L1.11 3l5.14 5.14C6.1 8.41 6 8.7 6 9v5.5L9.5 18v3h5v-3l.81-.8l5.53 5.53l1.27-1.27m-9.02-4.87l-.42.41h-1.34l-.41-.41L8 13.67V9.89l5.89 5.89l-.8.81M12.2 9l-2-2H14V3h2v4c1 0 2 1 2 2v5.5l-.15.15L16 12.8V9.09c0-.03-.05-.09-.08-.09H12.2M10 6.8l-2-2V3h2v3.8Z"/></svg>';
var plugOnIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="black" d="M16 7V3h-2v4h-4V3H8v4C7 7 6 8 6 9v5.5L9.5 18v3h5v-3l3.5-3.5V9c0-1-1-2-2-2m0 6.67l-2.91 2.92l-.42.41h-1.34l-.41-.41L8 13.67V9.09c0-.03.06-.09.09-.09h7.83c.03 0 .08.06.08.09v4.58Z"/></svg>';
var switchesIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="black" d="M3 4h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1m7 0h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1m7 0h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1M4 18h2v-5H4v5m7-7h2V6h-2v5m7 7h2v-5h-2v5Z"/></svg>';
var switchOffIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="black" d="M17 6H7c-3.31 0-6 2.69-6 6s2.69 6 6 6h10c3.31 0 6-2.69 6-6s-2.69-6-6-6zm0 10H7c-2.21 0-4-1.79-4-4s1.79-4 4-4h10c2.21 0 4 1.79 4 4s-1.79 4-4 4zM7 9c-1.66 0-3 1.34-3 3s1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3z"/></svg>';
var switchOnIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="black" d="M17 6H7c-3.31 0-6 2.69-6 6s2.69 6 6 6h10c3.31 0 6-2.69 6-6s-2.69-6-6-6m0 10H7c-2.21 0-4-1.79-4-4s1.79-4 4-4h10c2.21 0 4 1.79 4 4s-1.79 4-4 4m0-7c-1.66 0-3 1.34-3 3s1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3Z"/></svg>';
var temperatureIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="black" d="M15 13V5a3 3 0 0 0-6 0v8a5 5 0 1 0 6 0m-3-9a1 1 0 0 1 1 1v3h-2V5a1 1 0 0 1 1-1Z"/></svg>';
var tvOffIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="black" d="M.5 2.77L1.78 1.5L21 20.72L19.73 22l-3-3H16v2H8v-2H3a2 2 0 0 1-2-2V5c0-.5.17-.93.46-1.27L.5 2.77M21 17V5H7.82l-2-2H21a2 2 0 0 1 2 2v12c0 .85-.55 1.59-1.3 1.87L19.82 17H21M3 17h11.73L3 5.27V17Z"/></svg>';
var tvOnIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="black" d="M21 17H3V5h18m0-2H3a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h5v2h8v-2h5a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2Z"/></svg>';
var washingMachineOffIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="black" d="M22.11 21.46L2.39 1.73L1.11 3L4 5.89V20c0 1.11.89 2 2 2h12c.58 0 1.1-.25 1.46-.65l1.38 1.38l1.27-1.27M12 20c-3.31 0-6-2.69-6-6c0-1.68.7-3.2 1.82-4.29l4.24 4.24l-2.89 2.88a4.008 4.008 0 0 0 5.66 0c.02-.02.03-.04.05-.06l1.41 1.41A5.956 5.956 0 0 1 12 20m-.75-11.95C11.5 8 11.75 8 12 8c3.31 0 6 2.69 6 6c0 .25 0 .5-.05.75L20 16.8V4a2 2 0 0 0-2-2H6c-.24 0-.46.05-.67.13l5.92 5.92M10 4c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1Z"/></svg>';
var washingMachineOnIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="black" d="M14.83 11.17a4.008 4.008 0 0 1 0 5.66a4.008 4.008 0 0 1-5.66 0l5.66-5.66M6 2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2m1 2a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1m3 0a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1m2 4a6 6 0 0 0-6 6a6 6 0 0 0 6 6a6 6 0 0 0 6-6a6 6 0 0 0-6-6Z"/></svg>';
var waterFountainOffIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="black" d="M1 4.27L2.28 3L21 21.72L19.73 23l-1.46-1.46c-.34.29-.77.46-1.27.46H7a2.02 2.02 0 0 1-2-1.77L3.53 6.8L1 4.27M18.32 8l.45-4H5.82l-2-2H21l-1.71 15.47L9.82 8h8.5Z"/></svg>';
var waterFountainOnIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="black" d="M18.32 8H5.67l-.44-4h13.54M12 19a3 3 0 0 1-3-3c0-2 3-5.4 3-5.4s3 3.4 3 5.4a3 3 0 0 1-3 3M3 2l2 18.23c.13 1 .97 1.77 2 1.77h10c1 0 1.87-.77 2-1.77L21 2H3Z"/></svg>';
var windowClosedIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="black" d="M6 11h4V9h4v2h4V4H6v7m12 2H6v7h12v-7M6 2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Z"/></svg>';
var windowOpenIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="black" d="M6 8h4V6h4v2h4V4H6v4m12 2H6v5h12v-5M6 20h12v-3H6v3M6 2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Z"/></svg>';

// WEATHER ICONS
var clearnightIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="black" d="m17.75 4.09l-2.53 1.94l.91 3.06l-2.63-1.81l-2.63 1.81l.91-3.06l-2.53-1.94L12.44 4l1.06-3l1.06 3l3.19.09m3.5 6.91l-1.64 1.25l.59 1.98l-1.7-1.17l-1.7 1.17l.59-1.98L15.75 11l2.06-.05L18.5 9l.69 1.95l2.06.05m-2.28 4.95c.83-.08 1.72 1.1 1.19 1.85c-.32.45-.66.87-1.08 1.27C15.17 23 8.84 23 4.94 19.07c-3.91-3.9-3.91-10.24 0-14.14c.4-.4.82-.76 1.27-1.08c.75-.53 1.93.36 1.85 1.19c-.27 2.86.69 5.83 2.89 8.02a9.96 9.96 0 0 0 8.02 2.89m-1.64 2.02a12.08 12.08 0 0 1-7.8-3.47c-2.17-2.19-3.33-5-3.49-7.82c-2.81 3.14-2.7 7.96.31 10.98c3.02 3.01 7.84 3.12 10.98.31Z"/></svg>';
var cloudyIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="black" d="M6 19a5 5 0 0 1-5-5a5 5 0 0 1 5-5c1-2.35 3.3-4 6-4c3.43 0 6.24 2.66 6.5 6.03L19 11a4 4 0 0 1 4 4a4 4 0 0 1-4 4H6m13-6h-2v-1a5 5 0 0 0-5-5c-2.5 0-4.55 1.82-4.94 4.19C6.73 11.07 6.37 11 6 11a3 3 0 0 0-3 3a3 3 0 0 0 3 3h13a2 2 0 0 0 2-2a2 2 0 0 0-2-2Z"/></svg>';
var fogIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="black" d="M3 15h10a1 1 0 0 1 1 1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1a1 1 0 0 1 1-1m13 0h5a1 1 0 0 1 1 1a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1a1 1 0 0 1 1-1M1 12a5 5 0 0 1 5-5c1-2.35 3.3-4 6-4c3.43 0 6.24 2.66 6.5 6.03L19 9c2.19 0 3.97 1.76 4 4h-2a2 2 0 0 0-2-2h-2v-1a5 5 0 0 0-5-5C9.5 5 7.45 6.82 7.06 9.19C6.73 9.07 6.37 9 6 9a3 3 0 0 0-3 3a3 3 0 0 0 .17 1H1.1L1 12m2 7h2a1 1 0 0 1 1 1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1a1 1 0 0 1 1-1m5 0h13a1 1 0 0 1 1 1a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1a1 1 0 0 1 1-1Z"/></svg>';
var hailIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="black" d="M6 14a1 1 0 0 1 1 1a1 1 0 0 1-1 1a5 5 0 0 1-5-5a5 5 0 0 1 5-5c1-2.35 3.3-4 6-4c3.43 0 6.24 2.66 6.5 6.03L19 8a4 4 0 0 1 4 4a4 4 0 0 1-4 4h-1a1 1 0 0 1-1-1a1 1 0 0 1 1-1h1a2 2 0 0 0 2-2a2 2 0 0 0-2-2h-2V9a5 5 0 0 0-5-5C9.5 4 7.45 5.82 7.06 8.19C6.73 8.07 6.37 8 6 8a3 3 0 0 0-3 3a3 3 0 0 0 3 3m4 4a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m4.5-2a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5a1.5 1.5 0 0 1-1.5-1.5a1.5 1.5 0 0 1 1.5-1.5m-4-4a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5A1.5 1.5 0 0 1 9 13.5a1.5 1.5 0 0 1 1.5-1.5Z"/></svg>';
var lightningIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="black" d="M6 16a5 5 0 0 1-5-5a5 5 0 0 1 5-5c1-2.35 3.3-4 6-4c3.43 0 6.24 2.66 6.5 6.03L19 8a4 4 0 0 1 4 4a4 4 0 0 1-4 4h-1a1 1 0 0 1-1-1a1 1 0 0 1 1-1h1a2 2 0 0 0 2-2a2 2 0 0 0-2-2h-2V9a5 5 0 0 0-5-5C9.5 4 7.45 5.82 7.06 8.19C6.73 8.07 6.37 8 6 8a3 3 0 0 0-3 3a3 3 0 0 0 3 3h1a1 1 0 0 1 1 1a1 1 0 0 1-1 1H6m6-5h3l-2 4h2l-3.75 7l.75-5H9.5l2.5-6Z"/></svg>';
var lightningrainyIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="black" d="M4.5 13.59c.5.28.64.91.37 1.37c-.28.48-.87.64-1.37.37A4.98 4.98 0 0 1 1 11a5 5 0 0 1 5-5c1-2.35 3.3-4 6-4c3.43 0 6.24 2.66 6.5 6.03L19 8a4 4 0 0 1 4 4a4 4 0 0 1-4 4a1 1 0 0 1-1-1a1 1 0 0 1 1-1a2 2 0 0 0 2-2a2 2 0 0 0-2-2h-2V9a5 5 0 0 0-5-5C9.5 4 7.45 5.82 7.06 8.19C6.73 8.07 6.37 8 6 8a3 3 0 0 0-3 3c0 1.11.6 2.08 1.5 2.6v-.01m5-2.59h3l-2 4h2l-3.75 7l.75-5H7l2.5-6m8 7.67c0 1.29-1 2.33-2.25 2.33S13 19.96 13 18.67c0-1.55 2.25-4.17 2.25-4.17s2.25 2.62 2.25 4.17Z"/></svg>';
var partlycloudyIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="black" d="M12.74 5.47c2.36 1.03 3.61 3.56 3.18 5.99A6.002 6.002 0 0 1 18 16v.17a3 3 0 0 1 1-.17a3 3 0 0 1 3 3a3 3 0 0 1-3 3H6a4 4 0 0 1-4-4a4 4 0 0 1 4-4h.27C5 12.45 4.6 10.24 5.5 8.26a5.49 5.49 0 0 1 7.24-2.79m-.81 1.83c-1.77-.8-3.84.01-4.62 1.77c-.46 1.02-.38 2.15.1 3.06A5.988 5.988 0 0 1 12 10c.7 0 1.38.12 2 .34a3.506 3.506 0 0 0-2.07-3.04m1.62-3.66c-.55-.24-1.1-.41-1.67-.52l2.49-1.3l.9 2.89a7.67 7.67 0 0 0-1.72-1.07m-7.46.8c-.49.35-.92.75-1.29 1.19l.11-2.81l2.96.68c-.62.21-1.22.53-1.78.94M18 9.71c-.09-.59-.22-1.16-.41-1.71l2.38 1.5l-2.05 2.23c.11-.65.13-1.33.08-2.02M3.04 11.3c.07.6.2 1.17.39 1.7l-2.37-1.5L3.1 9.28c-.1.65-.13 1.33-.06 2.02M19 18h-3v-2a4 4 0 0 0-4-4a4 4 0 0 0-4 4H6a2 2 0 0 0-2 2a2 2 0 0 0 2 2h13a1 1 0 0 0 1-1a1 1 0 0 0-1-1Z"/></svg>';
var pouringIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="black" d="M9 12c.53.14.85.69.71 1.22l-1.3 4.83c-.14.54-.69.85-1.22.71a.967.967 0 0 1-.69-1.22l1.28-4.83c.14-.54.69-.85 1.22-.71m4 0c.53.14.85.69.71 1.22l-2.07 7.73c-.14.55-.69.85-1.23.71c-.53-.16-.85-.69-.71-1.23l2.08-7.72c.14-.54.69-.85 1.22-.71m4 0c.53.14.85.69.71 1.22l-1.3 4.83c-.14.54-.69.85-1.22.71a.967.967 0 0 1-.69-1.22l1.28-4.83c.14-.54.69-.85 1.22-.71m0-2V9a5 5 0 0 0-5-5C9.5 4 7.45 5.82 7.06 8.19C6.73 8.07 6.37 8 6 8a3 3 0 0 0-3 3c0 1.11.6 2.08 1.5 2.6v-.01c.5.28.64.91.37 1.37c-.28.47-.87.64-1.37.36v.01A4.98 4.98 0 0 1 1 11a5 5 0 0 1 5-5c1-2.35 3.3-4 6-4c3.43 0 6.24 2.66 6.5 6.03L19 8a4 4 0 0 1 4 4c0 1.5-.8 2.77-2 3.46c-.5.27-1.09.11-1.37-.37c-.27-.48-.13-1.09.37-1.37v.01c.6-.34 1-.99 1-1.73a2 2 0 0 0-2-2h-2Z"/></svg>';
var rainyIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="black" d="M6 14.03a1 1 0 0 1 1 1c0 .55-.45 1-1 1c-2.76 0-5-2.24-5-5s2.24-5 5-5c1-2.35 3.3-4 6-4c3.43 0 6.24 2.66 6.5 6.03l.5-.03a4 4 0 0 1 4 4c0 2.2-1.79 4-4 4h-1c-.55 0-1-.45-1-1c0-.56.45-1 1-1h1a2 2 0 0 0 2-2a2 2 0 0 0-2-2h-2v-1c0-2.76-2.24-5-5-5c-2.5 0-4.55 1.81-4.94 4.18c-.33-.12-.69-.18-1.06-.18a3 3 0 0 0-3 3a3 3 0 0 0 3 3m6 .12c.18.24.37.51.56.79C13 15.56 14 17.03 14 18a2 2 0 0 1-2 2a2 2 0 0 1-2-2c0-.97 1-2.44 1.44-3.06c.19-.28.38-.54.56-.79m0-3.12l-.5.56s-.85.96-1.71 2.22C8.93 15.06 8 16.56 8 18a4 4 0 0 0 4 4a4 4 0 0 0 4-4c0-1.44-.93-2.94-1.79-4.19c-.86-1.26-1.71-2.22-1.71-2.22"/></svg>';
var snowyIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="black" d="M6 14a1 1 0 0 1 1 1a1 1 0 0 1-1 1a5 5 0 0 1-5-5a5 5 0 0 1 5-5c1-2.35 3.3-4 6-4c3.43 0 6.24 2.66 6.5 6.03L19 8a4 4 0 0 1 4 4a4 4 0 0 1-4 4h-1a1 1 0 0 1-1-1a1 1 0 0 1 1-1h1a2 2 0 0 0 2-2a2 2 0 0 0-2-2h-2V9a5 5 0 0 0-5-5C9.5 4 7.45 5.82 7.06 8.19C6.73 8.07 6.37 8 6 8a3 3 0 0 0-3 3a3 3 0 0 0 3 3m1.88 4.07l2.19-.57l-1.61-1.62c-.39-.38-.39-1.02 0-1.42c.39-.39 1.04-.39 1.42 0l1.62 1.61l.57-2.19a1 1 0 1 1 1.93.52l-.59 2.19L15.6 16a1 1 0 1 1 .52 1.93l-2.19.57l1.61 1.62c.39.38.39 1.03 0 1.42c-.39.39-1.04.39-1.42 0l-1.62-1.61l-.57 2.19A1 1 0 1 1 10 21.6l.59-2.19L8.4 20a1 1 0 1 1-.52-1.93Z"/></svg>';
var snowyrainyIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="black" d="M18.5 18.67c0 1.29-1 2.33-2.25 2.33S14 19.96 14 18.67c0-1.55 2.25-4.17 2.25-4.17s2.25 2.62 2.25 4.17M4 17.36c-.14-.54.18-1.11.73-1.25L7 15.5l-1.67-1.64c-.4-.4-.4-1.05 0-1.46c.4-.4 1.07-.4 1.46 0l1.66 1.65l.59-2.25c.14-.56.71-.88 1.25-.73c.56.14.88.71.71 1.26l-.58 2.25l2.25-.58a.99.99 0 0 1 1.26.71c.15.54-.17 1.11-.73 1.25l-2.25.59l1.65 1.66c.4.39.4 1.06 0 1.46c-.4.4-1.06.4-1.45 0L9.5 18l-.61 2.27c-.14.56-.71.87-1.25.73c-.56-.14-.87-.71-.73-1.26l.59-2.24l-2.24.59c-.55.14-1.12-.17-1.26-.73M1 11a5 5 0 0 1 5-5c1-2.35 3.3-4 6-4c3.43 0 6.24 2.66 6.5 6.03L19 8a4 4 0 0 1 4 4a4 4 0 0 1-4 4a1 1 0 0 1-1-1a1 1 0 0 1 1-1a2 2 0 0 0 2-2a2 2 0 0 0-2-2h-2V9a5 5 0 0 0-5-5C9.5 4 7.45 5.82 7.06 8.19C6.73 8.07 6.37 8 6 8a3 3 0 0 0-3 3c0 .85.35 1.61.91 2.16c.36.39.35 1-.03 1.38a.996.996 0 0 1-1.41 0A4.988 4.988 0 0 1 1 11Z"/></svg>';
var sunnyIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="black" d="M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3m0-7l2.39 3.42C13.65 5.15 12.84 5 12 5c-.84 0-1.65.15-2.39.42L12 2M3.34 7l4.16-.35A7.2 7.2 0 0 0 5.94 8.5c-.44.74-.69 1.5-.83 2.29L3.34 7m.02 10l1.76-3.77a7.131 7.131 0 0 0 2.38 4.14L3.36 17M20.65 7l-1.77 3.79a7.023 7.023 0 0 0-2.38-4.15l4.15.36m-.01 10l-4.14.36c.59-.51 1.12-1.14 1.54-1.86c.42-.73.69-1.5.83-2.29L20.64 17M12 22l-2.41-3.44c.74.27 1.55.44 2.41.44c.82 0 1.63-.17 2.37-.44L12 22Z"/></svg>';
var windyIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="black" d="M4 10a1 1 0 0 1-1-1a1 1 0 0 1 1-1h8a2 2 0 0 0 2-2a2 2 0 0 0-2-2c-.55 0-1.05.22-1.41.59a.973.973 0 0 1-1.42 0c-.39-.39-.39-1.03 0-1.42C9.9 2.45 10.9 2 12 2a4 4 0 0 1 4 4a4 4 0 0 1-4 4H4m15 2a1 1 0 0 0 1-1a1 1 0 0 0-1-1c-.28 0-.53.11-.71.29a.996.996 0 0 1-1.41 0c-.38-.39-.38-1.02 0-1.41C17.42 8.34 18.17 8 19 8a3 3 0 0 1 3 3a3 3 0 0 1-3 3H5a1 1 0 0 1-1-1a1 1 0 0 1 1-1h14m-1 6H4a1 1 0 0 1-1-1a1 1 0 0 1 1-1h14a3 3 0 0 1 3 3a3 3 0 0 1-3 3c-.83 0-1.58-.34-2.12-.88c-.38-.39-.38-1.02 0-1.41a.996.996 0 0 1 1.41 0c.18.18.43.29.71.29a1 1 0 0 0 1-1a1 1 0 0 0-1-1Z"/></svg>';
var windyvariantIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="black" d="m6 6l.69.06A5.499 5.499 0 0 1 12 2a5.5 5.5 0 0 1 5.5 5.5l-.08.95c.46-.29 1-.45 1.58-.45a3 3 0 0 1 3 3a3 3 0 0 1-3 3H6a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 2a2 2 0 0 0-2 2a2 2 0 0 0 2 2h13a1 1 0 0 0 1-1a1 1 0 0 0-1-1h-3.5V7.5A3.5 3.5 0 0 0 12 4a3.5 3.5 0 0 0-3.5 3.5V8H6m12 10H4a1 1 0 0 1-1-1a1 1 0 0 1 1-1h14a3 3 0 0 1 3 3a3 3 0 0 1-3 3c-.83 0-1.58-.34-2.12-.88c-.38-.39-.38-1.02 0-1.41a.996.996 0 0 1 1.41 0c.18.18.43.29.71.29a1 1 0 0 0 1-1a1 1 0 0 0-1-1Z"/></svg>';
var exceptionalIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="black" d="M10 19h3v3h-3v-3m2-17c5.35.22 7.68 5.62 4.5 9.67c-.83 1-2.17 1.66-2.83 2.5C13 15 13 16 13 17h-3c0-1.67 0-3.08.67-4.08c.66-1 2-1.59 2.83-2.25C15.92 8.43 15.32 5.26 12 5a3 3 0 0 0-3 3H6a6 6 0 0 1 6-6Z"/></svg>';


// STARTUP FUNCTION
function startup(floor) {
    setMenu(floor);
    updateClock();
    setInterval(updateClock, 20000);

    if (floor == 1 || floor == 2) {
        loadContent(floor);
        setInterval(loadContent, 10000, floor);
    } else if (floor == 3) {
        loadContentSwitches();
        setInterval(loadContentSwitches, 10000);
    } else if (floor == 4) {
        loadContentLights();
        setInterval(loadContentLights, 10000);
    } else if (floor == 5) {
        loadContentAutomations();
        setInterval(loadContentAutomations, 10000);
    } else if (floor == 6) {
        loadContentPlayers();
        setInterval(loadContentPlayers, 10000);
        // COMMENT THE 2 LINES ABOVE
        // UNCOMMENT THE LINES BELOW
        // AND PUT THE NAME OF THE MEDIA PLAYER SENSOR
        // loadContentPlayers("media_player.echo_dot");
        // setInterval(loadContentPlayers, 10000, "media_player.echo_dot");
    }
}


// SHOW/HIDE MENU ITEMS
function setMenu(floor) {
    document.getElementById("menu" + floor).classList.add("main-menu-active");

    if (devices2ndFloor.length == 0) {
        var divMenu2ndFloor = document.getElementById("menu2");
        divMenu2ndFloor.parentElement.removeChild(divMenu2ndFloor);
    }

    if (!showSwitchesMenu) {
        var divMenuSwitches = document.getElementById("menu3");
        divMenuSwitches.parentElement.removeChild(divMenuSwitches);
    }

    if (!showLightsMenu) {
        var divMenuLights = document.getElementById("menu4");
        divMenuLights.parentElement.removeChild(divMenuLights);
    }

    if (!showAutomationsMenu) {
        var divMenuAutomations = document.getElementById("menu5");
        divMenuAutomations.parentElement.removeChild(divMenuAutomations);
    }

    if (!showPlayersMenu) {
        var divMenuPlayers = document.getElementById("menu6");
        divMenuPlayers.parentElement.removeChild(divMenuPlayers);
    }
}


// LOAD CONTENT
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
        } else {
            var newEntity = [apiData];

            if (floorEntities[i][0] != newEntity[0]["entity_id"]) {
                continue;
            }
        }

        // CREATE NEW ICON
        var newIcon = document.createElement("div");
        newIcon.className = "icon-div";
        newIcon.id = newEntity[0]["entity_id"];
        newIcon.style.top = floorEntities[i][1] + "px";
        newIcon.style.left = floorEntities[i][2] + "px";

        switch (newEntity[0]["entity_id"].split(".")[0].toLowerCase()) {
            // LIGHT AND SWITCH
            case "light":
            case "switch":
                var clickableIcon = document.createElement("a");
                switch (newEntity[0]["state"].toLowerCase()) {
                    case "on":
                        clickableIcon.href = "javascript:homefunc('" + newEntity[0]["entity_id"] + "', 'turn_off', " + floor + ")";

                        switch (newEntity[0]["entity_id"].split(".")[0].toLowerCase()) {
                            case "light":
                                clickableIcon.innerHTML = lightOnIcon;
                                break;
                            case "switch":
                                if (floorEntities[i].length < 4) {
                                    clickableIcon.innerHTML = switchOnIcon;
                                } else {
                                    switch (floorEntities[i][3].toLowerCase()) {
                                        case "washingmachine":
                                            clickableIcon.innerHTML = washingMachineOnIcon;
                                            break;
                                        case "microwave":
                                            clickableIcon.innerHTML = microwaveOnIcon;
                                            break;
                                        case "smartplug":
                                            clickableIcon.innerHTML = plugOnIcon;
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
                                        case "fan":
                                            clickableIcon.innerHTML = fanOnIcon;
                                            break;
                                    }
                                }
                                break;
                            default:
                                clickableIcon.innerHTML = switchOnIcon;
                        }
                        break;
                    case "off":
                        clickableIcon.href = "javascript:homefunc('" + newEntity[0]["entity_id"] + "', 'turn_on', " + floor + ")";

                        switch (newEntity[0]["entity_id"].split(".")[0].toLowerCase()) {
                            case "light":
                                clickableIcon.innerHTML = lightOffIcon;
                                break;
                            case "switch":
                                if (floorEntities[i].length < 4) {
                                    clickableIcon.innerHTML = switchOffIcon;
                                } else {
                                    switch (floorEntities[i][3].toLowerCase()) {
                                        case "washingmachine":
                                            clickableIcon.innerHTML = washingMachineOffIcon;
                                            break;
                                        case "microwave":
                                            clickableIcon.innerHTML = microwaveOffIcon;
                                            break;
                                        case "smartplug":
                                            clickableIcon.innerHTML = plugOffIcon;
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
                                        case "fan":
                                            clickableIcon.innerHTML = fanOffIcon;
                                            break;
                                    }
                                }
                                break;
                            default:
                                clickableIcon.innerHTML = switchOffIcon;
                        }
                        break;
                    default:
                        clickableIcon.href = "javascript:homefunc('" + newEntity[0]["entity_id"] + "', 'toggle', " + floor + ")";
                        clickableIcon.innerHTML = alertIcon;
                }
                newIcon.appendChild(clickableIcon);
                break;

            // BINARY SENSOR
            case "binary_sensor":
                switch (newEntity[0]["state"].toLowerCase()) {
                    case "on":
                        if (floorEntities[i].length < 4) {
                            newIcon.innerHTML = binarySensorOnIcon;
                        } else {
                            switch (floorEntities[i][3].toLowerCase()) {
                                case "window":
                                    newIcon.innerHTML = windowOpenIcon;
                                    break;
                                case "door":
                                    newIcon.innerHTML = doorOpenIcon;
                                    break;
                                default:
                                    newIcon.innerHTML = binarySensorOnIcon;
                            }
                        }
                        break;
                    case "off":
                        if (floorEntities[i].length < 4) {
                            newIcon.innerHTML = binarySensorOffIcon;
                        } else {
                            switch (floorEntities[i][3].toLowerCase()) {
                                case "window":
                                    newIcon.innerHTML = windowClosedIcon;
                                    break;
                                case "door":
                                    newIcon.innerHTML = doorClosedIcon;
                                    break;
                                default:
                                    newIcon.innerHTML = binarySensorOffIcon;
                            }
                        }
                        break;
                    default:
                        newIcon.innerHTML = alertIcon;
                }
                break;

            // SENSOR
            case "sensor":
                if (floorEntities[i].length < 4) {
                    newIcon.innerHTML = "<p class='sensor_value'>Sensor: </p>";
                } else {
                    switch (floorEntities[i][3].toLowerCase()) {
                        case "temperature":
                            newIcon.innerHTML = temperatureIcon;
                            break;
                        case "battery":
                            newIcon.innerHTML = batteryIcon;
                            break;
                        case "humidity":
                            newIcon.innerHTML = humidityIcon;
                            break;
                        case "friendly":
                            newIcon.innerHTML = "<p class='sensor_value'>" + (newEntity[0]["attributes"]["friendly_name"] != undefined ? newEntity[0]["attributes"]["friendly_name"] : "") + "</p>";
                            break;
                        case "blank":
                            newIcon.innerHTML = "";
                            break;
                        default:
                            newIcon.innerHTML = "<p class='sensor_value'>Sensor: </p>";
                    }
                }

                var sensorValue = document.createElement("p");
                sensorValue.className = "sensor_value";
                sensorValue.innerHTML = newEntity[0]["state"] + "" + (newEntity[0]["attributes"]["unit_of_measurement"] != undefined ? newEntity[0]["attributes"]["unit_of_measurement"] : "");
                newIcon.appendChild(sensorValue);
                break;

            // MEDIA PLAYER
            case "media_player":
                var clickableIcon = document.createElement("a");

                switch (newEntity[0]["state"].toLowerCase()) {
                    case "playing":
                    case "paused":
                        clickableIcon.href = "javascript:homefunc('" + newEntity[0]["entity_id"] + "', 'media_play_pause', " + floor + ")";
                        if (floorEntities[i].length == 4) {
                            switch (floorEntities[i][3].toLowerCase()) {
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
                                    clickableIcon.innerHTML = mediaPlayerOnIcon;
                            }
                        } else {
                            clickableIcon.innerHTML = mediaPlayerOnIcon;
                        }

                        var playing_info = "<p class='media_info'>";

                        if (newEntity[0]["state"] == "paused") {
                            playing_info += "[Paused] ";
                        }

                        if (findAttrByTerm("title", newEntity[0]["attributes"]) !== null) {
                            if (newEntity[0]["attributes"]["media_artist"] !== null) {
                                playing_info += findAttrByTerm("artist", newEntity[0]["attributes"]) + "</br>" + findAttrByTerm("title", newEntity[0]["attributes"]);
                            } else {
                                playing_info += findAttrByTerm("title", newEntity[0]["attributes"]);
                            }
                        }

                        if (playing_info == "") {
                            playing_info += "Playing";
                        }

                        playing_info += "</p>";

                        clickableIcon.innerHTML += playing_info;
                        break;
                    case "on":
                        clickableIcon.href = "javascript:homefunc('" + newEntity[0]["entity_id"] + "', 'turn_off', " + floor + ")";

                        if (floorEntities[i].length == 4) {
                            switch (floorEntities[i][3].toLowerCase()) {
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
                                    clickableIcon.innerHTML = mediaPlayerOnIcon;
                            }
                        } else {
                            clickableIcon.innerHTML = mediaPlayerOnIcon;
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
                        clickableIcon.href = "javascript:homefunc('" + newEntity[0]["entity_id"] + "', 'turn_off', " + floor + ")";

                        if (floorEntities[i].length == 4) {
                            switch (floorEntities[i][3].toLowerCase()) {
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
                                    clickableIcon.innerHTML = mediaPlayerOnIcon;
                            }
                        } else {
                            clickableIcon.innerHTML = mediaPlayerOnIcon;
                        }
                        break;
                    case "off":
                        clickableIcon.href = "javascript:homefunc('" + newEntity[0]["entity_id"] + "', 'turn_on', " + floor + ")";

                        if (floorEntities[i].length == 4) {
                            switch (floorEntities[i][3].toLowerCase()) {
                                case "tv":
                                    clickableIcon.innerHTML = tvOffIcon;
                                    break;
                                case "alexa":
                                    clickableIcon.innerHTML = alexaIconGray;
                                    break;
                                case "googleassistant":
                                    clickableIcon.innerHTML = googleAssistantIconGray;
                                    break;
                                default:
                                    clickableIcon.innerHTML = mediaPlayerOffIcon;
                            }
                        } else {
                            clickableIcon.innerHTML = mediaPlayerOffIcon;
                        }
                        break;
                    default:
                        clickableIcon.innerHTML = alertIcon;
                }
                newIcon.appendChild(clickableIcon);
                break;

            // WEATHER
            case "weather":
                if (floorEntities[i].length == 4) {
                    switch (floorEntities[i][3].toLowerCase()) {
                        case "extended":
                            newIcon.className = "forecast-container";
                            break;
                        default:
                            newIcon.innerHTML = "<p class='sensor_value'>" + showWeatherIcon(newEntity[0]["state"]) + "<br/>" + newEntity[0]["attributes"]["temperature"] + " " + newEntity[0]["attributes"]["temperature_unit"] + "<br/>" + newEntity[0]["state"] + "</p>";
                    }
                } else {
                    newIcon.innerHTML = "<p class='sensor_value'>" + showWeatherIcon(newEntity[0]["state"]) + "<br/>" + newEntity[0]["attributes"]["temperature"] + " " + newEntity[0]["attributes"]["temperature_unit"] + "<br/>" + newEntity[0]["state"] + "</p>";
                }
                break;

            // OTHERS
            default:
                newIcon.innerHTML = "<p class='sensor_value'>" + newEntity[0]["entity_id"] + "<br/>" + newEntity[0]["state"] + "</p>";
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
            populateForecast(newEntity[0], newEntity[0]["entity_id"], newEntity[0]["attributes"]["temperature_unit"]);
        }
    }
}


// CLOCK UPDATE
function updateClock() {
    var now = new Date();
    now.setHours(now.getHours() + timeoffset);
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var ampm = hours >= 12 ? "PM" : "AM";

    if (showAmPmTime) {
        hours = hours % 12;
        hours = hours ? hours : 12;
    }

    hours = (hours < 10 ? "0" : "") + hours;

    // ADD LEADING ZEROS IF NEEDED
    minutes = (minutes < 10 ? "0" : "") + minutes;

    var timeString = hours + ":" + minutes + (showAmPmTime ? "<span style='font-size: 14px'>" + ampm + "</span>" : "");
    document.getElementById("clock").innerHTML = timeString;
}


// GET FLOORPLAN DIV AND SET THE IMAGE FROM DATA.JS AS SRC
function setFloorPlanImg(floor) {
    var floorplanImgDiv = document.getElementById("floorplanImg");

    if (floor == 1) {
        floorplanImgDiv.src = floorplan1stFloor;
    } else if (floor == 2) {
        floorplanImgDiv.src = floorplan2ndFloor;
    }
}


// GET DATA FROM API
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
        return JSON.parse(apiRequest.responseText);
    } else {
        return null;
    }
}


// TRIGGER FUNCTIONS TO API
function homefunc(id, state, floor) {
    var xmlhttp = new XMLHttpRequest();
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
                } else if (floor == 4) {
                    loadContentLights(id);
                } else {
                    loadContent(floor, id);
                }
            } else {
                alert("Failed to send command");
            }
        }
    };

    xmlhttp.send(JSON.stringify({
        entity_id: id
    }));
}


// SLEEP FUNCTION
function sleepFor(sleepDuration) {
    var now = new Date().getTime();
    while (new Date().getTime() < now + sleepDuration) {
        /* DO NOTHING */
    }
}


// POPULATE EXTENDED FORECAST
function populateForecast(data, entity_id, temperature_unit) {
    var forecastContainer = document.getElementById(entity_id);

    for (var i = 0; i < data.attributes.forecast.length; i++) {
        var forecast = data.attributes.forecast[i];
        var forecastItem = document.createElement("div");
        forecastItem.className = "forecast-item";

        var date = new Date(forecast.datetime);
        var dateString = date.toLocaleString();

        forecastItem.innerHTML = "<h2>" + dateString.substring(0, 10); + "</h2>";
        forecastItem.innerHTML += showWeatherIcon(forecast.condition);
        forecastItem.innerHTML += "<p class='min-max'>" + forecast.condition + "</p>";
        forecastItem.innerHTML += "<p class='min-max'>" + forecast.temperature + (temperature_unit !== undefined ? temperature_unit : "°C") + "</p>";
        forecastItem.innerHTML += "<p class='min-max'>" + forecast.templow + (temperature_unit !== undefined ? temperature_unit : "°C") + "</p>";

        forecastContainer.appendChild(forecastItem);
    }
}


// SHOW OR HIDE WEATHER ICON
function showWeatherIcon(forecastCondition) {
    return showWeatherIcon ? eval(forecastCondition.replace("-", "") + "Icon") : "";
}


// LOAD SWITCHES
function loadContentSwitches() {
    var apiData;
    var table = document.createElement("table");
    table.className = "table-devices";

    apiData = fetchAPIAndPopulateVariable();

    var switches = [];

    for (var i = 0; i < apiData.length; i++) {
        if (apiData[i]["entity_id"].substring(0, apiData[i]["entity_id"].indexOf(".")) == "switch") {
            switches.push(apiData[i]);
        }
    }

    switches.sort(function (a, b) {
        var keyA = a.attributes["friendly_name"].toLowerCase();
        var keyB = b.attributes["friendly_name"].toLowerCase();

        if (keyA < keyB) return -1;
        if (keyA > keyB) return 1;
        return 0;
    });

    var numRows = Math.ceil(switches.length / 5);

    for (var i = 0; i < numRows; i++) {
        var row = document.createElement("tr");

        for (var j = 0; j < 5; j++) {
            var index = i * 5 + j;
            if (index < switches.length) {
                var cell = document.createElement("td");
                cell.id = switches[index]["entity_id"];
                var cellContent = switches[index]["attributes"]["friendly_name"] + "<br/>";

                switch (switches[index]["state"].toLowerCase()) {
                    case "on":
                        cellContent += "<a href=\"javascript:homefunc('" + switches[index]["entity_id"] + "', 'turn_off', 3)\" >";
                        cellContent += switchOnIcon;
                        cellContent += "</a>"
                        break;
                    case "off":
                        cellContent += "<a href=\"javascript:homefunc('" + switches[index]["entity_id"] + "', 'turn_on', 3)\" >";
                        cellContent += switchOffIcon;
                        cellContent += "</a>"
                        break;
                    default:
                        cellContent += "<a href=\"javascript:homefunc('" + switches[index]["entity_id"] + "', 'toggle', 3)\" >";
                        cellContent += alertIcon;
                        cellContent += "</a>"
                }
                cell.innerHTML = cellContent;
                row.appendChild(cell);
            }
        }

        table.appendChild(row);
    }

    var content = document.getElementById("content");
    content.innerHTML = "";
    content.appendChild(table);
}


// LOAD LIGHTS
function loadContentLights() {
    var apiData;
    var table = document.createElement("table");
    table.className = "table-devices";

    apiData = fetchAPIAndPopulateVariable();

    var lights = [];

    for (var i = 0; i < apiData.length; i++) {
        if (apiData[i]["entity_id"].substring(0, apiData[i]["entity_id"].indexOf(".")) == "light") {
            lights.push(apiData[i]);
        }
    }

    lights.sort(function (a, b) {
        var keyA = a.attributes["friendly_name"].toLowerCase();
        var keyB = b.attributes["friendly_name"].toLowerCase();

        if (keyA < keyB) return -1;
        if (keyA > keyB) return 1;
        return 0;
    });

    var numRows = Math.ceil(lights.length / 5);

    for (var i = 0; i < numRows; i++) {
        var row = document.createElement("tr");

        for (var j = 0; j < 5; j++) {
            var index = i * 5 + j;
            if (index < lights.length) {
                var cell = document.createElement("td");
                cell.id = lights[index]["entity_id"];
                var cellContent = lights[index]["attributes"]["friendly_name"] + "<br/>";

                switch (lights[index]["state"].toLowerCase()) {
                    case "on":
                        cellContent += "<a href=\"javascript:homefunc('" + lights[index]["entity_id"] + "', 'turn_off', 4)\" >";
                        cellContent += lightOnIcon;
                        cellContent += "</a>"
                        break;
                    case "off":
                        cellContent += "<a href=\"javascript:homefunc('" + lights[index]["entity_id"] + "', 'turn_on', 4)\" >";
                        cellContent += lightOffIcon;
                        cellContent += "</a>"
                        break;
                    default:
                        cellContent += "<a href=\"javascript:homefunc('" + lights[index]["entity_id"] + "', 'toggle', 4)\" >";
                        cellContent += alertIcon;
                        cellContent += "</a>"
                }
                cell.innerHTML = cellContent;
                row.appendChild(cell);
            }
        }

        table.appendChild(row);
    }

    var content = document.getElementById("content");
    content.innerHTML = "";
    content.appendChild(table);
}


// LOAD AUTOMATIONS
function loadContentAutomations() {
    var apiData;
    var table = document.createElement("table");
    table.className = "table-devices";

    apiData = fetchAPIAndPopulateVariable();

    var automations = [];

    for (var i = 0; i < apiData.length; i++) {
        if (apiData[i]["entity_id"].substring(0, apiData[i]["entity_id"].indexOf(".")) == "automation") {
            automations.push(apiData[i]);
        }
    }

    automations.sort(function (a, b) {
        var keyA = a.attributes["friendly_name"].toLowerCase();
        var keyB = b.attributes["friendly_name"].toLowerCase();

        if (keyA < keyB) return -1;
        if (keyA > keyB) return 1;
        return 0;
    });

    var numRows = Math.ceil(automations.length / 5);

    for (var i = 0; i < numRows; i++) {
        var row = document.createElement("tr");

        for (var j = 0; j < 5; j++) {
            var index = i * 5 + j;
            if (index < automations.length) {
                var cell = document.createElement("td");
                cell.id = automations[index]["entity_id"];
                var cellContent = automations[index]["attributes"]["friendly_name"] + "<br/>";

                switch (automations[index]["state"].toLowerCase()) {
                    case "on":
                        cellContent += "<a href=\"javascript:homefunc('" + automations[index]["entity_id"] + "', 'turn_off', 4)\" >";
                        cellContent += automationOnIcon;
                        cellContent += "</a>"
                        break;
                    case "off":
                        cellContent += "<a href=\"javascript:homefunc('" + automations[index]["entity_id"] + "', 'turn_on', 4)\" >";
                        cellContent += automationOffIcon;
                        cellContent += "</a>"
                        break;
                    default:
                        cellContent += "<a href=\"javascript:homefunc('" + automations[index]["entity_id"] + "', 'toggle', 4)\" >";
                        cellContent += alertIcon;
                        cellContent += "</a>"
                }
                cell.innerHTML = cellContent;
                row.appendChild(cell);
            }
        }

        table.appendChild(row);
    }

    var content = document.getElementById("content");
    content.innerHTML = "";
    content.appendChild(table);
}


// LOAD PLAYERS
function loadContentPlayers(entity_id) {
    var apiData;

    if (arguments.length == 1) {
        apiData = fetchAPIAndPopulateVariable(entity_id);
    } else {
        apiData = fetchAPIAndPopulateVariable();
    }

    if (Object.prototype.toString.call(apiData) === "[object Array]") {
        var table = document.createElement("table");
        table.className = "table-players";
        var players = [];

        for (var i = 0; i < apiData.length; i++) {
            if (apiData[i]["entity_id"].substring(0, apiData[i]["entity_id"].indexOf(".")) == "media_player") {
                players.push(apiData[i]);
            }
        }

        players.sort(function (a, b) {
            var keyA = a.attributes["friendly_name"].toLowerCase();
            var keyB = b.attributes["friendly_name"].toLowerCase();

            if (keyA < keyB) return -1;
            if (keyA > keyB) return 1;
            return 0;
        });

        var numRows = Math.ceil(players.length / 2);

        for (var i = 0; i < numRows; i++) {
            var row = document.createElement("tr");

            for (var j = 0; j < 2; j++) {
                var index = i * 2 + j;
                if (index < players.length) {
                    var cell = document.createElement("td");
                    cell.id = players[index]["entity_id"];
                    var cellContent = "<p class='sensor_value'>" + players[index]["attributes"]["friendly_name"] + "</p>";

                    switch (players[index]["state"].toLowerCase()) {
                        case "playing":
                        case "paused":
                        case "idle":
                        case "standby":
                        case "on":
                            cellContent += "<a href=\"javascript:homefunc('" + players[index]["entity_id"] + "', 'turn_off', 5)\" >";
                            cellContent += "<p class='sensor_value'>[" + players[index]["state"] + "]</p>";
                            if (players[index]["attributes"]["entity_picture"] !== undefined) {
                                cellContent += "<p><img style='width: 128px' src='" + players[index]["attributes"]["entity_picture"] + "'></img></p>";
                            } else {
                                cellContent += mediaPlayerOnIcon;
                            }
                            cellContent += "<p class='sensor_value'>" + findAttrByTerm("artist", players[index]["attributes"]) + "</p>";
                            cellContent += "<p class='sensor_value'>" + findAttrByTerm("title", players[index]["attributes"]) + "</p>";
                            cellContent += "<br/>"
                            cellContent += "</a>"
                            break;
                        case "off":
                            cellContent += "<a href=\"javascript:homefunc('" + players[index]["entity_id"] + "', 'turn_on', 5)\" >";
                            cellContent += mediaPlayerOffIcon;
                            cellContent += "</a>"
                            break;
                        default:
                            cellContent += "<a href=\"javascript:homefunc('" + players[index]["entity_id"] + "', 'toggle', 5)\" >";
                            cellContent += alertIcon;
                            cellContent += "</a>"
                    }
                    cell.innerHTML = cellContent;
                    row.appendChild(cell);
                }
            }

            table.appendChild(row);
        }

        var content = document.getElementById("content");
        content.innerHTML = "";
        content.appendChild(table);
    } else {
        var cellContent = "<p class='sensor_value'>" + apiData["attributes"]["friendly_name"] + "</p>";

        switch (apiData["state"].toLowerCase()) {
            case "playing":
            case "paused":
            case "idle":
            case "standby":
            case "on":
                cellContent += "<a href=\"javascript:homefunc('" + apiData['entity_id'] + "', 'turn_off', 5)\" >";
                cellContent += "<p class='sensor_value'>[" + apiData["state"] + "]</p>";
                if (apiData["attributes"]["entity_picture"] !== undefined) {
                    cellContent += "<p><img style='width: 256px' src='" + apiData["attributes"]["entity_picture"] + "'></img></p>";
                } else {
                    cellContent += mediaPlayerOnIcon;
                }
                cellContent += "<p class='sensor_value'>" + findAttrByTerm("artist", apiData["attributes"]) + "</p>";
                cellContent += "<p class='sensor_value'>" + findAttrByTerm("title", apiData["attributes"]) + "</p>";
                cellContent += "</a>"
                break;
            case "off":
                cellContent += "<a href=\"javascript:homefunc('" + apiData['entity_id'] + "', 'turn_on', 5)\" >";
                cellContent += mediaPlayerOffIcon;
                cellContent += "</a>"
                break;
            default:
                cellContent += "<a href=\"javascript:homefunc('" + apiData['entity_id'] + "', 'toggle', 5)\" >";
                cellContent += alertIcon;
                cellContent += "</a>"
        }

        var content = document.getElementById("content-player");
        content.innerHTML = cellContent;
    }
}


// FIND ATTRIBUTE BY TERM
function findAttrByTerm(term, object) {
    for (var property in object) {
        if (object.hasOwnProperty(property) && property.toString().match(term)) {
            return object[property];
        }
    }
}