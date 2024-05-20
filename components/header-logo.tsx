import HugeiconsMoneyBag02 from "@/public/money-icon";
import Link from "next/link";


const HeaderLogo = () => {
  return ( 
    <Link href='/'>
      <div className="items-center hidden lg:flex">
        <HugeiconsMoneyBag02 color='white' height='2rem' width='2rem' />
        <p className="font-semibold text-white text-2xl ml-2.5">
          Finance
        </p>
      </div>
    </Link>
   );
}
 
export default HeaderLogo;