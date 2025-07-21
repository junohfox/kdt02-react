import MyDiv1 from "./MyDiv1"

export default function MyDivMain() {
  return (
    <div className="w-2/3 h-4/5 bg-amber-900
                    flex flex-col items-center justify-center
                    p-5 text-2xl
                    text-white font-bold">
      <div className="w-full flex justify-start p-5">
      n=, n2=
      </div>
      <MyDiv1 />
    </div>
  )
}