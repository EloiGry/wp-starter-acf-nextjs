import Image from "next/image"

export default function Contact () {
    return (
            <div className="flex py-8 fade-in">
                <Image
                        src="/contactsvg.svg"
                        alt="contactImage"
                        width={0}
                        height={0}
                        
                        className="hidden md:flex md:w-1/2 h-96"
                    />
            <iframe
                title="contact form"
                src="http://localhost:8881/contactform"
                sandbox="allow-forms"
                className="w-full md:w-1/2 min-h-[620px]"
            />
            </div>
    )
}