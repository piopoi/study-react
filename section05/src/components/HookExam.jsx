import useInput from "../hooks/useInput";

const HookExam = () => {
  const [input, onChange] = useInput();
  const [input2, onChange2] = useInput();

  return (
    <div>
      <input
        className="input mt-5 ml-5"
        type="text"
        value={input}
        onChange={onChange}
      />
      <input
        className="input mt-5 ml-5"
        type="text"
        value={input2}
        onChange={onChange2}
      />
    </div>
  );
};

export default HookExam;
