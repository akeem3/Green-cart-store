'use client'

import { CartProductType, SelectedImgType } from "@/app/product/[productId]/ProductDetails";

interface ProductImageProps{
    cartProduct: CartProductType,
    product: any,
    handleColorSelect: (value: SelectedImgType) => void;
}


const ProductImage: React.FC<ProductImageProps> = ({
    cartProduct,
    product,
    handleColorSelect,
}) => {
    return <div className="grid
    grid-cols-6
    gap-2 
    h-full
    max-h-[500px]
    min-h-[300px]
    sm:min-h-[400px]
    ">
        <div className="flex
        flex-col
        items-center
        justify-center
        gap-4
        cursor-pointer
        border
        h-full
        max-h
        max-h-[500px]
        min-h-[300px]
        sm:min-h-[400px]
        "></div>
        <div></div>
    </div>;
}
 
export default ProductImage;