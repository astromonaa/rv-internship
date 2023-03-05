import { Form } from "react-bootstrap";

const LoginInput = ({valid, type, value, onChange}:any) => {
  return (
    <>
      <Form.Control
        aria-label="Default"
        aria-describedby="inputGroup-sizing-default"
        placeholder={`Type your ${type}...`}
        className={`${!valid ? 'error' : ''} mt-[30px]`}
        ref={value}
        onChange={() => onChange(type)}
      />
      {!valid && <small className='error'>invalid {type}</small>}</>
  );
};

export default LoginInput;