import Image from "next/image";

export default function LogoDeveloper() {
    return (
        <div className="place-items-center flex gap-1.5">
            <img src={"/assets/PocketByteEmblemGearFilledLarge.jpg"} className="rounded-full size-6"></img>
            <p>PocketByte Developer</p>
        </div>
    )
}
