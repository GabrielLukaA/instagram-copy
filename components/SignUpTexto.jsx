import React from "react";

function SignUpTexto(props) {
  return (
    <div className=" flex gap-1 py-[18px]">
      <p
        className={
          props.first ? "fontFooter" : "fontInput text-[#000] opacity-40"
        }
      >
        Don&#39;t have an account?
      </p>
      <p
        className={
          props.first
            ? "fontFooterBold text-[#000] opacity-40"
            : "fontInput text-[#3797EF]"
        }
      >
        Sign up.
      </p>
    </div>
  );
}

export default SignUpTexto;
