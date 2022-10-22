// export function Con() {
//   return (
//     <div className="flex flex-col items-center w-fit mt-[50px]">
//       <div className="w-[110px] h-[60px] bg-custom-blue-900 -mb-[60px] rounded-b-[110px] relative before:content-[''] before:absolute before:w-[25px] before:h-[25px] before:bg-red-500 before:left-[-19.5px] before:top-[-0px] before:rounded-tr-[100%] before:shadow-[5px_-5px_#14172B]"></div>
//       <div className="w-[291px] h-[351px] bg-yellow-200 rounded-lg border-gray-400 flex flex-col items-center">
//         <div className="w-[100px] h-[100px] bg-custom-blue-500 -mt-[50px] z-10 rounded-full"></div>
//       </div>
//     </div>
//   );
// }

import styles from "./Con.module.css";

// export function Con() {
//   return (
//     <div className="flex flex-col items-center w-fit mt-[60px]">
//       <div className="w-[120px] h-[60px] bg-custom-blue-900 rounded-b-[120px] relative -mb-[60px] before:content-[''] before:absolute before:w-[23px] before:h-[23px] before:bg-transparent before:left-[-19px] before:rounded-tr-full before:shadow-[4px_-4px_0_4px_#14172B] after:content-[''] after:absolute after:w-[23px] after:h-[23px] after:bg-transparent after:right-[-19px] after:rounded-tl-full after:shadow-[-4px_-4px_0_4px_#14172B] before:border-t before:border-r before:border-[rgba(236, 240, 255, 0.1)] border-b border-l border-r border-gray-500 after:border-t after:border-gray-500"></div>
//       <div
//         className={`w-[291px] h-[351px] flex flex-col items-center rounded-2xl border-t ${styles.container}`}
//       >
//         <div className="w-[100px] h-[100px] bg-red-400 z-10 rounded-full -mt-[50px]"></div>
//       </div>
//     </div>
//   );
// }

export function Con() {
  return (
    <div className="flex flex-col items-center w-fit">
      <div className="w-[120px] h-[60px] bg-custom-blue-900 rounded-b-full -mb-[60px] before:content-[''] before:w-[25px] before:h-[20px] relative before:-left-[22px] before:absolute before:bg-transparent before:shadow-[4px_-4px_0_4px_#14172B] before:rounded-tr-full before:border-t before:border-r border border-t-0 border-gray-700 after:content-[''] after:w-[25px] after:h-[20px] after:bg-transparent after:absolute after:-right-[22px] after:top-0 after:rounded-tl-full after:border-l after:border-gray-700 before:border-gray-700 after:border-t after:shadow-[-4px_-4px_0_4px_#14172B]">
        <div className="w-[100px] ml-2 bg-custom-blue-900 h-[20px]"></div>
      </div>
      <div
        className={`w-[291px] h-[351px] rounded-2xl ${styles.container} flex flex-col items-center`}
      >
        <div className="w-[100px] h-[100px] bg-custom-blue-500 rounded-full -mt-[50px] z-10"></div>
      </div>
    </div>
  );
}
