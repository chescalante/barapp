import React from "react";

const IconoCaracteristica = (props) => {
  switch (props.opcion) {
    case 'Vetegariana':
      return (
        <svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M5.09996 12.25C3.71996 12.25 2.59996 11.13 2.59996 9.75C2.59996 8.75 3.18996 7.9 4.02996 7.5C3.18996 7.1 2.59996 6.25 2.59996 5.25C2.59996 3.87 3.71996 2.75 5.09996 2.75C5.62996 2.75 6.11996 2.91 6.51996 3.19L6.49996 3C6.49996 1.62 7.61996 0.5 8.99996 0.5C10.38 0.5 11.5 1.62 11.5 3L11.48 3.19C11.89 2.91 12.37 2.75 12.9 2.75C14.28 2.75 15.4 3.87 15.4 5.25C15.4 6.25 14.81 7.1 13.97 7.5C14.81 7.9 15.4 8.75 15.4 9.75C15.4 11.13 14.28 12.25 12.9 12.25C12.37 12.25 11.88 12.09 11.48 11.81L11.5 12C11.5 13.38 10.38 14.5 8.99996 14.5C7.61996 14.5 6.49996 13.38 6.49996 12L6.51996 11.81C6.10996 12.09 5.62996 12.25 5.09996 12.25ZM17.92 13.7C17.33 18.1 13.56 21.5 8.99996 21.5C8.99996 16.94 12.4 13.17 16.8 12.58C17.44 12.49 18.01 13.06 17.92 13.7ZM8.99996 21.5C8.99996 16.94 5.59996 13.17 1.19996 12.58C0.559957 12.49 -0.0100427 13.06 0.0799573 13.7C0.669957 18.1 4.43996 21.5 8.99996 21.5ZM8.99996 5C10.38 5 11.5 6.12 11.5 7.5C11.5 8.88 10.38 10 8.99996 10C7.61996 10 6.49996 8.88 6.49996 7.5C6.49996 6.12 7.61996 5 8.99996 5Z" fill="black" fill-opacity="0.54" />
        </svg>
      );
    case 'EspacioAbierto':
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.1999 6.73752L10.2499 10.6675L12.4999 13.6675C12.8299 14.1075 12.7399 14.7375 12.2999 15.0675C11.8599 15.3975 11.2299 15.3175 10.8999 14.8675C9.84993 13.4675 8.58993 11.7975 7.79993 10.7275C7.39993 10.1975 6.59993 10.1975 6.19993 10.7275L2.19993 16.0575C1.70993 16.7275 2.17993 17.6675 2.99993 17.6675H20.9999C21.8199 17.6675 22.2899 16.7275 21.7999 16.0675L14.7999 6.73752C14.3999 6.19752 13.5999 6.19752 13.1999 6.73752Z" fill="black" fill-opacity="0.54" />
        </svg>
      );
    case 'Musica':
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M18.9472 14.9922V4.0002C18.9472 3.6972 18.8092 3.4092 18.5732 3.2202C18.3362 3.0302 18.0242 2.9582 17.7302 3.0242L8.75919 5.0172C8.30119 5.1192 7.97519 5.5252 7.97519 5.9932V14.3342C7.53519 14.1342 7.05119 14.0152 6.53619 14.0152C4.61019 14.0152 3.04419 15.5822 3.04419 17.5082C3.04419 19.4332 4.61019 21.0002 6.53619 21.0002C8.46219 21.0002 10.0282 19.4332 10.0282 17.5082C10.0282 17.3292 10.0022 17.1582 9.97519 16.9862V6.7962L16.9472 5.2462V12.3412C16.5072 12.1402 16.0222 12.0222 15.5082 12.0222C13.5822 12.0222 12.0152 13.5882 12.0152 15.5142C12.0152 17.4402 13.5822 19.0062 15.5082 19.0062C17.4332 19.0062 19.0002 17.4402 19.0002 15.5142C19.0002 15.3352 18.9732 15.1642 18.9472 14.9922Z" fill="#231F20" />
          <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="3" y="3" width="17" height="19">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M18.9472 14.9922V4.0002C18.9472 3.6972 18.8092 3.4092 18.5732 3.2202C18.3362 3.0302 18.0242 2.9582 17.7302 3.0242L8.75919 5.0172C8.30119 5.1192 7.97519 5.5252 7.97519 5.9932V14.3342C7.53519 14.1342 7.05119 14.0152 6.53619 14.0152C4.61019 14.0152 3.04419 15.5822 3.04419 17.5082C3.04419 19.4332 4.61019 21.0002 6.53619 21.0002C8.46219 21.0002 10.0282 19.4332 10.0282 17.5082C10.0282 17.3292 10.0022 17.1582 9.97519 16.9862V6.7962L16.9472 5.2462V12.3412C16.5072 12.1402 16.0222 12.0222 15.5082 12.0222C13.5822 12.0222 12.0152 13.5882 12.0152 15.5142C12.0152 17.4402 13.5822 19.0062 15.5082 19.0062C17.4332 19.0062 19.0002 17.4402 19.0002 15.5142C19.0002 15.3352 18.9732 15.1642 18.9472 14.9922Z" fill="white" />
          </mask>
          <g mask="url(#mask0)">
            <rect width="24" height="24" fill="#616166" />
          </g>
        </svg>
      );
    default:
      return (
        <svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M5.09996 12.25C3.71996 12.25 2.59996 11.13 2.59996 9.75C2.59996 8.75 3.18996 7.9 4.02996 7.5C3.18996 7.1 2.59996 6.25 2.59996 5.25C2.59996 3.87 3.71996 2.75 5.09996 2.75C5.62996 2.75 6.11996 2.91 6.51996 3.19L6.49996 3C6.49996 1.62 7.61996 0.5 8.99996 0.5C10.38 0.5 11.5 1.62 11.5 3L11.48 3.19C11.89 2.91 12.37 2.75 12.9 2.75C14.28 2.75 15.4 3.87 15.4 5.25C15.4 6.25 14.81 7.1 13.97 7.5C14.81 7.9 15.4 8.75 15.4 9.75C15.4 11.13 14.28 12.25 12.9 12.25C12.37 12.25 11.88 12.09 11.48 11.81L11.5 12C11.5 13.38 10.38 14.5 8.99996 14.5C7.61996 14.5 6.49996 13.38 6.49996 12L6.51996 11.81C6.10996 12.09 5.62996 12.25 5.09996 12.25ZM17.92 13.7C17.33 18.1 13.56 21.5 8.99996 21.5C8.99996 16.94 12.4 13.17 16.8 12.58C17.44 12.49 18.01 13.06 17.92 13.7ZM8.99996 21.5C8.99996 16.94 5.59996 13.17 1.19996 12.58C0.559957 12.49 -0.0100427 13.06 0.0799573 13.7C0.669957 18.1 4.43996 21.5 8.99996 21.5ZM8.99996 5C10.38 5 11.5 6.12 11.5 7.5C11.5 8.88 10.38 10 8.99996 10C7.61996 10 6.49996 8.88 6.49996 7.5C6.49996 6.12 7.61996 5 8.99996 5Z" fill="black" fill-opacity="0.54" />
        </svg>
      );
  }
}

export default IconoCaracteristica;