

export default function Input(props) {
  return (
    <input
    type={props.type}
    className={
        "w-full bg-[#FAFAFA] rounded-md py-[13.5px] px-4 inputShadow fontInput " + props.enable ? "text-[#262626]" : "px-4" }
    placeholder={props.placeholder}
  />
  )
}
