import Image from "next/image";

export default function Logo() {
    return (
        <div className="justify-items-center flex gap-2.5">
            <Image src="/assets/PocketByteWordmarkGearAmber.png" alt="PocketByte" width={150} height={150}/>
            <p className="text-lg font-normal text-fd-accent-foreground">Developer</p>
        </div>
    )
}
