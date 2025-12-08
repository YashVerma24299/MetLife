import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
})



//       {/* Cards container */}
//       <div className="mt-10 flex flex-wrap justify-center gap-8 w-full max-w-5xl px-6">
//         {/* Card */}
        // <div className="flex flex-col justify-between flex-1 min-w-[260px] max-w-sm
        //                 bg-white rounded-xl border border-gray-100 shadow-sm
        //                 p-6 hover:shadow-lg transition">
        //   <div className="space-y-2">
        //     <h2 className="text-lg font-semibold text-gray-800">
        //       Upload a Script
        //     </h2>
        //     <p className="text-sm text-gray-500">
        //       Already have a script? Upload it to start.
        //     </p>
        //   </div>

        //   <Button
        //     text="Upload Script"
        //     BgColor="#239DE0"
        //     textColor="white"
        //     onClick={() => {}}
        //   />
        // </div>

//         {/* Card */}
//         <div className="flex flex-col justify-between flex-1 min-w-[260px] max-w-sm
//                         bg-white rounded-xl border border-gray-100 shadow-sm
//                         p-6 hover:shadow-lg transition">
//           <div className="space-y-2">
//             <h2 className="text-lg font-semibold text-gray-800">
//               Generate a Script
//             </h2>
//             <p className="text-sm text-gray-500">
//               Describe your idea and generate a script automatically.
//             </p>
//           </div>

//           <Button
//             text="Generate Script"
//             BgColor="#239DE0"
//             textColor="white"
//             onClick={() => {}}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }
