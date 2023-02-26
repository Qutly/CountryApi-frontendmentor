import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})

// @media only screen and (max-width: 425px) {
//   .grid-style {
//       display: grid;
//       grid-template-columns: repeat(1, 1fr);
//       align-items: center;
//   }
//   .inputs {
//       display: block;
//       padding-top: 2.5rem;
//       padding-bottom: 2.5rem;
//   }
//   .input-search-region {
//       display: block;
//       padding: 13px;
//       border-top-right-radius: 5px;
//       border-bottom-right-radius: 5px;
//   }
//   .small-device {
//       padding-top: 2.5rem;
//   }
// }

// const InputSearch = styled.input`
//     box-shadow: 1px 1px 1px ${(props) => props.theme.shadows};  
//     border: none;
//     padding: 13px;
//     border-top-right-radius: 5px;
//     border-bottom-right-radius: 5px;
//     padding-right: 10rem;

//     @media only screen and (max-width: 425px) {
//        padding-right: 0;
//        width: 100%;
//     }
// `