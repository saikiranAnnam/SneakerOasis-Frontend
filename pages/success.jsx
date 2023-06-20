import React from "react";
import Wrapper from "@/components/Wrapper";
import Link from "next/link";
import Image from "next/image";

const Success = () => {
    return (
        <div className="min-h-[650px] flex items-center">

            <Wrapper>
                
                    
                <div className=" rounded-lg p-5  mx-auto flex flex-col items-center">
                        <Image
                                src="/paymentsuccess.jpg"
                                width={600}
                                height={100}
                                className="w-[300px] md:w-[400px]"
                        />

                    <div className="border border-black p-8 mx-auto rounded-lg flex flex-col items-center ">
                        <div className="text-2xl font-bold">
                            Thanks for shopping with us!
                        </div>
                        <div className="text-lg font-bold mt-2">
                            Your order has been placed successfully.
                        </div>
                        <div className="text-base mt-5">
                            For any product related query, drop an email to
                        </div>
                        <div className="underline">shoeshopcontact@shop.com</div>

                        <Link href="https://sneakeroasis.vercel.app" className="font-bold mt-5 text-blue-600 underline">
                            Continue Shopping
                        </Link>
                    </div> 
                        
                    
                </div>
            </Wrapper>
        </div>
    );
};

export default Success;