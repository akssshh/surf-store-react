import React from 'react'
import { TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";

const Trusted = () => {
    return (
        <section className="bg-white">
            <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                        Trusted by eCommerce Businesses
                    </h2>

                    <p className="mt-4 text-gray-500 sm:text-xl">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dolores
                        laborum labore provident impedit esse recusandae facere libero harum
                        sequi.
                    </p>
                </div>

                <div className="mt-8 sm:mt-12">
                    <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">

                        <div className="flex flex-col justify-center items-center rounded-lg bg-blue-100 px-4 py-8 text-center md:h-[300px] ">
                            <dt className="order-last text-lg font-medium text-gray-500 ">
                                Super Fast and Free Delivery
                            </dt>

                            <TbTruckDelivery className="w-20 h-20 p-4 rounded-full bg-white text-customColor mb-4 " />

                        </div>

                        <div className="flex justify-between gap-4 flex-col rounded-lg  text-center">
                            <div className="flex flex-row justify-center items-center rounded-lg bg-blue-100 px-4 py-8 text-center md:h-[135px] ">
                                <dt className="order-last text-lg font-medium text-gray-500 ">
                                Non-contact Shipping
                                </dt>

                                <MdSecurity className="w-16 h-16 p-4 rounded-full bg-white text-customColor mr-4 " />

                            </div>
                            <div className="flex flex-row justify-center items-center rounded-lg bg-blue-100 px-4 py-8 text-center md:h-[135px] ">
                                <dt className="order-last text-lg font-medium text-gray-500 ">
                                Money-back Guaranteed
                                </dt>

                                <GiReceiveMoney className="w-16 h-16 p-4 rounded-full bg-white text-customColor mr-4 " />

                            </div>
                        </div>

                        <div className="flex flex-col justify-center items-center rounded-lg bg-blue-100 px-4 py-8 text-center md:h-[300px] ">
                            <dt className="order-last text-lg font-medium text-gray-500 ">
                                Super Secure Payment System
                            </dt>

                            <RiSecurePaymentLine className="w-20 h-20 p-4 rounded-full bg-white text-customColor mb-4 " />

                        </div>
                    </dl>
                </div>
            </div>
        </section>
    )
}

export default Trusted