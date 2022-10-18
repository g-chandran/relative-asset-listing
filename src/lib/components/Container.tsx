export function Container({ icon }: any) {
  return (
    <div className="container-wrapper mt-12">
      <div className="container w-[291px] h-[351px] bg-[url(assets/container_vector.svg)] flex flex-col items-center">
        <div className="circle w-[100px] h-[100px] rounded-[50%] -mt-12 bg-custom-blue-500 flex items-center justify-center">
          <img src={icon} alt="icon" />
        </div>
      </div>
    </div>
  );
}
