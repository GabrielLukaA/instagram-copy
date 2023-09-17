import Header from "../components/Header";
import IphoneMenu from "../components/IphoneMenu";
import Link from "next/link";
import ButtonLogin from "../components/ButtonLogin";
import TextoLogin from "../components/TextoLogin";
import SignUpTexto from "../components/SignUpTexto";

export default function Home() {
  return (
    <>
    <div className="flex justify-center w-screen">
    <div className="w-[375px] bg-[#fff] h-[812px] flex flex-col justify-between">
        <Header />
        <section className="flex flex-col items-center justify-center w-full px-[34px]">
          <img src="instaLogo.svg" alt="" className="mb-[52px]" />
          <div className="flex flex-col justify-center items-center gap-3 w-full mb-[30px]">
            <img src="Oval.svg" alt="" />
            <p className="fontText text-[#262626]">jacob_w</p>
            <ButtonLogin />
          </div>
          <TextoLogin redirect="SignIn" text="Switch accounts" />
        </section>
        <footer className="w-full h-[84px] flex flex-col items-center justify-end shadowFooter">
          <SignUpTexto first />
          <IphoneMenu />
        </footer>
      </div>
    </div>
    </>
  );
}
