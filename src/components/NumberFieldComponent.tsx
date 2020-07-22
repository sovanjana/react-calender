import React from "react";
import { useForm, Controller } from "react-hook-form";

export default function NumberFieldComponent() {
  const { handleSubmit, errors, control } = useForm({
    defaultValues: {
      number: "",
    },
  });
  const onSubmit = (data: any) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="field-form number-field-form">
      <Controller
        name="number"
        control={control}
        rules={{
          required: {
            value: true,
            message: "Required",
          },
        }}
        render={({ onChange, ...rest }) => (
          <input
            onChange={(e) => {
              if (/^-?\d*$/.test(e.target.value)) onChange(e.target.value);
            }}
            {...rest}
          />
        )}
      />

      {errors?.number?.message ? (
        <span className="error-msg">{errors?.number?.message}</span>
      ) : null}
      <input type="submit" />
    </form>
  );
}
