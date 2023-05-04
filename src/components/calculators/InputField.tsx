export default function InputField() {
  const numPad = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const handleClick = (el: string): void => {
    console.log(el);
  };
  return (
    <>
      <div>input field</div>
      <div className="w-3/4 h4/6">
        <div className="flex flex-wrap-reverse">
          {numPad.map(el => (
            <div key={el}>
              <button
                className="text-white bg-[rgb(54,52,52)] hover:bg-gray-500 rounded-[50%] px-10 py-8 border border-black"
                type="submit"
                onClick={(): void => handleClick(el)}
              >
                {el}
              </button>
            </div>
            // <input
            //   type="button"
            //   value={el}
            //   key={el}
            //   className="border border-black"
            //   onClick={(): void => handleClick(el)}
            // />
          ))}
        </div>
      </div>
    </>
  );
}
