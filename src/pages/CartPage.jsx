import CardSection from "@/components/CardSection";
import Carousel from "@/components/Carousel";
import ColorSelector from "@/components/ColorSelector";
import ConditionSelector from "@/components/ConditionSelector";
import StorageSelector from "@/components/PriceSelector";
import { Heart } from "lucide-react";

export default function CartPage() {

    const images = [
        '/1.jpg',
        '/2.jpg',
        '/3.jpg',
        '/4.jpg',
        '/1.jpg',
    ];

    return (
        <div>
            <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                <div className="sticky top-[60px] h-screen overflow-y-auto">
                    <Carousel images={images} />
                </div>
                <div className="py-10 px-4">
                    <button className="bg-[#d0fbde] text-[#006b40] rounded-sm text-[0.875rem] font-bold leading-[1.25rem] tracking-[0] inline-flex items-center p-1.5 mb-1">
                        <img alt="" className="stroke-success" height="24" src="https://front-office.statics.backmarket.com/c7820b5a953a3c79b8a59c5e0c4be4b5d76595bd/img/product/eco-block/butterfly.svg" width="24" />
                        <span className=" underline">
                            More sustainable than new</span>
                    </button>
                    <h1 className="text-[1.75rem] leading-[2.5rem] tracking-[0] font-bold italic ">iPhone 14 Pro 128GB - Space Black - <br /> Unlocked</h1>
                    <button className="flex items-center text-[#0e1016] gap-2 font-semibold bg-transparent mb-4">
                        <div className="flex">
                            <svg aria-hidden="true" fill="currentColor" height="16" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.154 3.65c-.427-1.026-1.881-1.026-2.308 0L8.838 8.478l-5.21.418C2.519 8.984 2.07 10.367 2.914 11.09l3.97 3.4-1.213 5.085c-.258 1.082.919 1.937 1.868 1.357l4.46-2.724 4.462 2.724c.949.58 2.125-.275 1.867-1.357l-1.212-5.084 3.97-3.4c.844-.724.394-2.107-.714-2.196l-5.21-.418-2.008-4.826">
                                </path>
                            </svg>
                            <svg aria-hidden="true" fill="currentColor" height="16" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.154 3.65c-.427-1.026-1.881-1.026-2.308 0L8.838 8.478l-5.21.418C2.519 8.984 2.07 10.367 2.914 11.09l3.97 3.4-1.213 5.085c-.258 1.082.919 1.937 1.868 1.357l4.46-2.724 4.462 2.724c.949.58 2.125-.275 1.867-1.357l-1.212-5.084 3.97-3.4c.844-.724.394-2.107-.714-2.196l-5.21-.418-2.008-4.826">
                                </path>
                            </svg>
                            <svg aria-hidden="true" fill="currentColor" height="16" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.154 3.65c-.427-1.026-1.881-1.026-2.308 0L8.838 8.478l-5.21.418C2.519 8.984 2.07 10.367 2.914 11.09l3.97 3.4-1.213 5.085c-.258 1.082.919 1.937 1.868 1.357l4.46-2.724 4.462 2.724c.949.58 2.125-.275 1.867-1.357l-1.212-5.084 3.97-3.4c.844-.724.394-2.107-.714-2.196l-5.21-.418-2.008-4.826">
                                </path>
                            </svg>
                            <svg aria-hidden="true" fill="currentColor" height="16" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.154 3.65c-.427-1.026-1.881-1.026-2.308 0L8.838 8.478l-5.21.418C2.519 8.984 2.07 10.367 2.914 11.09l3.97 3.4-1.213 5.085c-.258 1.082.919 1.937 1.868 1.357l4.46-2.724 4.462 2.724c.949.58 2.125-.275 1.867-1.357l-1.212-5.084 3.97-3.4c.844-.724.394-2.107-.714-2.196l-5.21-.418-2.008-4.826">
                                </path>
                            </svg>
                            <svg aria-hidden="true" fill="currentColor" height="16" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M13.154 3.65c-.427-1.026-1.881-1.026-2.308 0L8.838 8.478l-5.21.418C2.519 8.984 2.07 10.367 2.914 11.09l3.97 3.4-1.213 5.085a1.231 1.231 0 0 0 .464 1.289l-.013.055.048-.03a1.231 1.231 0 0 0 1.369.043l4.46-2.724 4.462 2.724c.949.58 2.125-.275 1.867-1.357l-1.212-5.084 3.97-3.4c.844-.724.394-2.107-.714-2.196l-5.21-.418-2.008-4.826M12 16.666a1.248 1.248 0 0 1 .652.183l4.078 2.49-1.109-4.648a1.25 1.25 0 0 1 .403-1.24l3.63-3.108-4.765-.382a1.25 1.25 0 0 1-1.054-.766L12 4.782v11.883" clipRule="evenodd">
                                </path>
                            </svg>
                        </div>
                        <span className="text-[0.875rem] leading-[1.25rem] tracking-[0]">4.4/5</span>
                        <div className="underline">(537 reviews)</div>
                    </button>
                    <ConditionSelector />
                    <StorageSelector />
                    <ColorSelector />
                    <div className="flex justify-between items-center gap-2 mb-2">
                        <div>
                            <div>
                                <span className="text-[1.5rem] leading-[2rem] tracking-[0] font-semibold ">$644.00 </span>
                                <span className="text-[1em] leading-[1.25rem] tracking-[0] font-medium">before trade-in</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <button className="text-[#8e9095] text-[0.875rem] leading-[1.25rem] tracking-[0] line-through cursor-pointer font-medium">$999.00 new</button>
                                <span className="rounded-xs inline-block max-w-full truncate text-[0.875rem] leading-[1.25rem] tracking-[0] font-semibold bg-[#94f5bc] px-1 text-[#006b40]">Save $355.00</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <button className=" bg-black text-white font-medium rounded-md px-4 py-3 hover:opacity-80 transition-all duration-300 min-w-[164px] max-w-[256px]">
                                Add to cart
                            </button>
                            <button className="rounded-md p-3 border ">
                                <Heart />
                            </button>
                        </div>
                    </div>
                    <div className="flex items-center gap-x-2 mb-3">
                        <img alt="Affirm" height="20" loading="lazy" src="https://front-office.statics.backmarket.com/c7820b5a953a3c79b8a59c5e0c4be4b5d76595bd/img/payment/methods-v4/affirm.svg" width="36" />
                        <p>
                            Buy now, pay later. <span className="underline font-semibold cursor-pointer">Learn more</span>
                        </p>
                    </div >
                    <div className="flex items-center gap-4 my-2 border-b pb-4">
                        <button className="rounded-full flex h-[36px] items-center px-3 bg-gray-300"><svg aria-hidden="true" fill="#8046bf" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" ><path d="M7 3.25a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5M4.75 7a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0" ></path><path d="M13 6.25a.75.75 0 0 0 0 1.5h5.19l-1.72 1.72a.75.75 0 1 0 1.06 1.06l2.647-2.646a1.25 1.25 0 0 0 0-1.768L17.53 3.47a.75.75 0 1 0-1.06 1.06l1.72 1.72H13m-7.19 10H11a.75.75 0 0 1 0 1.5H5.81l1.72 1.72a.75.75 0 1 1-1.06 1.06l-2.647-2.646a1.25 1.25 0 0 1 0-1.768L6.47 13.47a.75.75 0 1 1 1.06 1.06l-1.72 1.72"></path><path d="M14.5 13.25a1.25 1.25 0 0 0-1.25 1.25v5a1.25 1.25 0 0 0 1.25 1.25h5a1.25 1.25 0 0 0 1.25-1.25v-5a1.25 1.25 0 0 0-1.25-1.25h-5m.25 6v-4.5h4.5v4.5h-4.5" ></path></svg><p className="ml-2 ">Get this for even less with Trade-in</p><svg aria-hidden="true" fill="currentColor" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m13.043 12-3.47 3.47a.75.75 0 1 0 1.06 1.06l3.647-3.646a1.25 1.25 0 0 0 0-1.768L10.634 7.47a.75.75 0 0 0-1.06 1.06L13.042 12" ></path></svg></button>
                        <button className="rounded-full flex h-[36px] items-center px-3 bg-gray-300"><img alt="Visible" height="20" loading="lazy" src="https://front-office.statics.backmarket.com/c7820b5a953a3c79b8a59c5e0c4be4b5d76595bd/img/visible-by-verizon/visible-by-verizon-logo-tiny.svg" width="20" /><p className="ml-2 ">Save big: $30/month unlimited data</p><svg aria-hidden="true" fill="currentColor" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m13.043 12-3.47 3.47a.75.75 0 1 0 1.06 1.06l3.647-3.646a1.25 1.25 0 0 0 0-1.768L10.634 7.47a.75.75 0 0 0-1.06 1.06L13.042 12" ></path></svg></button>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2  gap-4">
                        {[1, 2, 3, 4].map((_, index) => (
                            <div key={index} className="flex items-center gap-3">
                                <div className="bg-[#d9e4fc] p-2 rounded-md">
                                    <svg
                                        aria-hidden="true"
                                        fill="currentColor"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        width="24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M2.25 5.5A.75.75 0 0 1 3 4.75h10.5a1.25 1.25 0 0 1 1.225 1h2.966a1.25 1.25 0 0 1 1.118.691l1.655 3.31H20.5A1.25 1.25 0 0 1 21.75 11v5a1.25 1.25 0 0 1-1.25 1.25h-.854a2.751 2.751 0 0 1-5.292 0h-3.207a2.751 2.751 0 0 1-5.293 0H5A1.25 1.25 0 0 1 3.75 16v-5.5a.75.75 0 0 1 1.5 0v5.25h.604a2.751 2.751 0 0 1 5.292 0h2.104v-9.5H3A.75.75 0 0 1 2.25 5.5m18 10.25h-.604a2.751 2.751 0 0 0-4.896-.832V11.25h5.5v4.5m-5.5-6v-2.5h2.787l1.25 2.5H14.75m-7.5 6.75a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0M17 15.25a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5"></path>
                                        <path d="M3.5 7.25a.75.75 0 0 0 0 1.5H7a.75.75 0 0 0 0-1.5H3.5"></path>
                                    </svg>
                                </div>
                                <div >
                                    <h3 className="font-semibold text-base leading-none">Heading</h3>
                                    <p className="text-sm">This is the description or text that you want on the right side.</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div >
            </div >
            <CardSection />
        </div>
    )
}