import { CartProductType, SelectedImgType } from "@/app/product/[productId]/ProductDetails";
import React from "react";

interface SetColorProps {
    images: SelectedImgType[];
    cartProduct: CartProductType;
    handColorSelect: (value: SelectedImgType) => void;
}

const SetColor: React.FC<SetColorProps> = ({ images, cartProduct, handColorSelect }) => {
    return ( 
        <div className="flex gap-4 items-center">
            <span className="font-semibold">COLOR:</span>
            <div className="flex gap-1">
                {images.map((image) => (
                    <div
                        key={image.color} // Adding key prop here
                        onClick={() => handColorSelect(image)}
                        className={`
                            h-7 
                            w-7
                            rounded-full
                            border-teal-300
                            flex
                            items-center
                            justify-center
                            ${
                                cartProduct.selectedImg.color === image.color ? "border-[1.5px]" : "border-none"
                            }
                        `}
                    >
                        <div style={{background: image.
                            colorCode}} 
                            className="
                            h-5
                            w-5
                            rounded-full
                            border-[1.2px]
                            border-slate-300
                            "></div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SetColor;
