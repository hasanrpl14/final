function Footer() {
    return (
        <>
            <div className="footer py-5 px-[62px] bg-gray100 text-neutral-content border border-black border-t-2">
                <div className="text-black flex justify-self-start mr-[170px]">
                    <span className="mr-[52px]">
                        <h3 className="text-lg font-bold">NusaLearning</h3>
                        <a href="#">
                            <p className="">
                                2022 NusaLearning All <br />
                                rights reserved <br />
                                PT. Solusi Teknologi Nusantara
                            </p>
                        </a>
                    </span>
                    <span className="mr-[52px]">
                        <h3 className="text-lg font-bold">About</h3>
                        <a href="#">
                            <p className="">
                                Privacy Policy <br />
                                Help Center <br />
                                Terms & Condition
                            </p>
                        </a>
                    </span>
                    <span>
                        <h3 className="text-lg font-bold">Services</h3>
                        <a href="#">
                            <p className="">
                                Check Certificate
                            </p>
                        </a>
                    </span>
                </div>
                <div className="flex justify-self-end">
                    <span className="mr-[123px]">
                        <h3 className="text-lg font-bold text-black">Follow Us on</h3>
                        <div className="flex mt-[4px]">
                            <a href="#">
                                <div className="btn rounded-full text-black text-sm bg-gray300 hover:bg-gray300 border border-none mr-1">FB</div>
                            </a>
                            <a href="#">
                                <div className="btn rounded-full text-black text-sm bg-gray300 hover:bg-gray300 border border-none mr-1">IG</div>
                            </a>
                            <a href="#">
                                <div className="btn rounded-full text-black text-sm bg-gray300 hover:bg-gray300 border border-none mr-1">Twitter</div>
                            </a>
                            <a href="#">
                                <div className="btn rounded-full text-black text-sm bg-gray300 hover:bg-gray300 border border-none mr-1">YT</div>
                            </a>
                        </div>
                    </span>
                    <span>
                        <h3 className="text-lg font-bold text-black">Download NusaLMS Mobile</h3>
                        <div className="flex mt-[4px]">
                            <a href="#">
                                <div className="btn rounded-none text-black text-sm bg-white hover:bg-white border border-black w-[112px] h-[26px] mr-4">Play Store</div>
                            </a>
                            <a href="#">
                                <div className="btn rounded-none text-black text-sm bg-white hover:bg-white border border-black w-[106px] h-[26px]">App Store</div>
                            </a>
                        </div>
                    </span>
                </div>
            </div>
        </>
    )
}

export default Footer;