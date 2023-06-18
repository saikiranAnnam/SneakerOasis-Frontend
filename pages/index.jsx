import HeroBanner from "@/components/HeroBanner";
import ProductCard from "@/components/ProductCard";

import Wrapper from "@/components/Wrapper";
import { fetchDataFromApi } from "@/utils/api";
import { useEffect, useState } from "react";





export default  function Home({products}) {


    return (
    <main>

        {/* Homepage slider */}
        <HeroBanner/>
        {/* advertisment */}
        <Wrapper>
            {/* heading and Paragraph start */}
            <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
                <div className="text-[28px] md:text-[32px] mb-5 font-semibold leading-tight">
                 Cushioning that Goes the Extra Mile
                </div>
                <div className="text-md md:text-xl">
                    By ingeniously integrating a lightweight Sneaker Oasis
                    midsole with augmented stack heights, 
                    we've crafted the perfect solution to deliver exceptional cushioning throughout 
                    your long-distance runs .
                </div>
            </div>
            {/* heading and Paragraph end */}
        </Wrapper>

        {/* Homepage products display */}
        {/* list of products are displayed in the list */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  my-14 md:gap-10 px-5 md:px-8">
            {products?.data?.map((product) => (
                <ProductCard key={product?.id} data={product}/>
            ))}
        </div>



    </main>
    );
}


// // SSG and SSR methods getStaticProps are important when ur using headless cms
export async function getStaticProps(){
    const products = await fetchDataFromApi("/api/products?populate=*");
    return {
        props : {products}
    }
}