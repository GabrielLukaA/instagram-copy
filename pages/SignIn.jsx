import Header from "../components/Header";
import IphoneMenu from "../components/IphoneMenu";
import Link from "next/link";
import ButtonLogin from "../components/ButtonLogin";
import TextoLogin from "../components/TextoLogin";
import SignUpTexto from "../components/SignUpTexto";

export default function SignIn() {
  function back() {}
  return (
    <>
      <div className="flex justify-center w-screen">
        <div className="w-[375px] bg-[#fff] h-[812px] flex flex-col justify-between">
          <div>
            <Header />
            <div className="w-full px-4 flex justify-start h-11 items-center">
              <Link href={"/"}>
                {" "}
                <img src="Back.svg" alt="" width={"10px"} height={"18px"} />
              </Link>
            </div>
          </div>

          <div className="w-full px-4 flex flex-col items-center">
            <section className="flex flex-col w-full items-center">
              <img
                src="instaLogo.svg"
                alt=""
                className="mb-[40px]"
                width={"182px"}
                height={"49px"}
              />
              <div className="flex flex-col gap-[19px] w-full">
                <div className="flex flex-col gap-3 w-full">
                  <div className="oi">
                    <input
                      type="text"
                      className=" w-full bg-[#FAFAFA] rounded-md py-[13.5px] px-4 inputShadow fontInput"
                      placeholder="asad_khasanov"
                    />
                  </div>

                  <input
                    type="text"
                    className="w-full bg-[#FAFAFA] rounded-md py-[13.5px] px-4 inputShadow fontInput text-[#262626]"
                    placeholder="Password"
                  />
                </div>
                <div className="w-full flex justify-end">
                  <p className="forgotPass">Forgot Password?</p>
                </div>
              </div>
              <div className="w-full mt-[30px] opacity-50">
                <ButtonLogin />
              </div>
              <div className="flex gap-[10px] mt-[30px]">
                <img src="Facebook.svg" alt="" />
                <TextoLogin
                  redirect="FacebookConnect"
                  text="Log in with Facebook"
                />
              </div>
              <div className="flex justify-between w-full items-center mt-[41px]">
                <div className="w-[132px] h-[1px] stroke bg-black opacity-20"></div>
                <p className="orFont">OR</p>
                <div className="w-[132px] h-[1px] stroke bg-black opacity-20"></div>
              </div>
              <div className="mt-[41px]">
                <SignUpTexto />
              </div>
            </section>
          </div>
          <div className="shadowFooter">
            <div className="h-[45px] w-full flex items-end justify-center">
              <p className="fontFooter">Instagram от Facebook</p>
            </div>
            <IphoneMenu />
          </div>
        </div>
      </div>
    </>
  );
}
