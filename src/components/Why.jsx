import Image from "next/image"
import Button from "./Button"
import { Link } from "@/i18n/routing"

const Why = () => {
  return (
    <div className="flex flex-col gap-4 my-20 justify-center items-center ">
      <h1 className="text-3xl border-b-2 font-extrabold border-black uppercase relative text-center w-max mb-4">Neden Spelya ? </h1>
      <div className="flex gap-4 w-full justify-stretch items-stretch p-4">
        <Image src="https://techslang.com/wp-content/uploads/2023/05/16559134_deepLearning-scaled-e1683888713501.jpg" width={299} height={168} alt="" className="md:block hidden flex-1 rounded-lg"/>

        <div className="details px-6 md:px-0 gap-5 flex flex-col items-center justify-between flex-1 p-4">
          <p className="text-lg font-semibold">Deyişmeyen, fakat swrekli denini güncelleyen uzman kadromuzla tüm isteklerinize hızlı şekilde cevap veriyoruz !</p>
          <div className="flex">
          <p>Müşterinin ihtiyacının giderilmesi ve isteğinin karşılanması sonrasındaki tatmin oranıdır. Müşteri memnuniyeti kavramını, müşterinin aldığı hizmetlerden memnun kalma düzeyi olarak da tanımlanır. Sizler için yaptıklarımız yapacaklarımızın her daim teminatı olacaktır.
          </p>
          </div>
          <p>Tabuları yıktık sizleri standart kalıplara sıkıştırmak yerine ihtiyacınıza ve isteğinize özel yazılım ve grafik çözümleri ile hep yanınızda ve hizmetinizdeyiz.</p>
          <p>  Api servislerimiz aracılığı ile epinium ağı içinde ve dışında ürün tedariği konusunda destekciniz olmaya hazırız. Türkiyenin en kapsamlı
            tedarikçileri ile yaptımız bayilik anlaşmaları sayesinde ihtiyacınız olan ürünler bir tık uzağınızda.</p>
            
          <Link href="/lisance"><Button className="mb-5 uppercase">Lisansları incele</Button></Link>
        </div>
      </div>

    </div>
  )
}

export default Why
