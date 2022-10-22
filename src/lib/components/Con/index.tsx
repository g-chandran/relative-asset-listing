import styles from "./Con.module.css";

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
