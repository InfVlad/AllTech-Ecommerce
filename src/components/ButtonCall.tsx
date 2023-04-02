/* eslint-disable @typescript-eslint/no-misused-promises */
interface Data {
  message: string;
}

const ButtonCall = () => {
  const handleClick = async () => {
    const res = await fetch('/api/hello');
    console.log(res.status);
    const data = await (res.json() as Promise<Data>);
    console.log(data);
  };
  return (
    <button
      type='button'
      className='rounded-xl border-blue-400 bg-green-300 text-black'
      onClick={handleClick}
    >
      ButtonCall
    </button>
  );
};

export default ButtonCall;
