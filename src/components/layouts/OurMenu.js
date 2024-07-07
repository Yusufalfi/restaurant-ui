
// import ScreenWindow from './ScreenWindow'
import dynamic from "next/dynamic";

const Scroll = dynamic(
  () => {
    return import("./ScreenWindow");
  },
  { ssr: false }
);


const ScreenWindow = dynamic(() => import("./ScreenWindow"), { ssr: false })



const OurMenu = () => {
   
  return (
    <div>
      <ScreenWindow />
    </div>
  )
}

export default OurMenu
