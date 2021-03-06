import React from "react";
import Styles from "./style.module.scss";

const Title = props => {
  return (
    <>
      <FormTitle title={props.formTitle} />
    </>
  );
};

export default Title;

export const Form = props => {
  return (
    <div className={`flex flex-col justify-start items-start`}>
      {props.required ? (
        <InputLabelRequired label={props.inputLabel} />
      ) : (
        <InputLabel label={props.inputLabel} />
      )}
      <InputField />
    </div>
  );
};

const FormTitle = props => {
  return (
    <>
      <h1 className={`text-3xl leading-10 tracking-tight font-bold font-sans`}>
        {props.title}
      </h1>
    </>
  );
};

const InputLabel = props => {
  return (
    <>
      <span
        className={`font-sans font-medium not-italic text-sm leading-[22px]`}
      >
        {props.label}
      </span>
    </>
  );
};

const InputLabelRequired = props => {
  return (
    <>
      <span
        className={`font-sans font-medium not-italic text-sm leading-[22px]`}
      >
        {props.label}
        <sup className={`text-red-600 font-extrabold`}>*</sup>
      </span>
    </>
  );
};

const InputField = props => {
  return (
    <>
      <input
        type='text'
        className={`w-[344px] h-[38px] text-black border border-[#a5b4fc] border-solid`}
      />
    </>
  );
};
