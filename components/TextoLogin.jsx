import Link from "next/link";

export default function TextoLogin(props){
    return (
        <Link href={props.redirect} className="fontText text-[#3797EF]">{props.text}</Link>
    )
}