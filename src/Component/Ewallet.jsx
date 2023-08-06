import barcodeImage from "../assets/barcode/barcode.jpg"

const Ewallet = () => {
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="bg-blue-600 w-[332px] h-[462px] mt-10 rounded-lg">
          <div className="bg-blue-500 w-[332px] h-24">
            <h1 className="text-black font-semibold ml-8 pt-5 text-xl">Nusa Lms</h1>
            <div className="flex justify-center items-center mt-[14px]">
              <div className="bg-orange-400 w-[250px] h-[73px] rounded-lg">
                <div className="flex">
                  <h1 className="pt-1 pl-2 font-bold text-sm">Total</h1>
                  <h1 className="pt-1 pl-[70px] text-xs font-medium">Choose within 23:59:59</h1>
                </div>
                <h1 className="pl-2 font-bold text-lg">Rp 100,000</h1>
                <h1 className="pb-3 pl-2 text-xs font-medium">Order ID #wWwTsA</h1>
              </div>
            </div>

            <h1 className="pt-3 pl-3 pb-2 text-sm font-semibold">
                Gopay
            </h1>
            <div className="flex justify-center items-center">
                <img className="w-[200px] h-[200px]" src={barcodeImage } alt="" />
            </div>

            <div className="border-b border-gray-300 pb-1"></div>
          <div className="flex justify-center items-center mt-3">
            <div className="bg-slate-500 w-[240px] py-1">
              <p className="font-bold text-sm text-center">Back to Merchant</p>
            </div>
          </div>
           
          </div>
        </div>
      </div>
    </>
  );
};

export default Ewallet;


