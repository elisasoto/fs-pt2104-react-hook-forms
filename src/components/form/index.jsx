import { useForm } from "react-hook-form";

export default function Form({ handleClickSubmit }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <form onSubmit={handleSubmit(handleClickSubmit)}>
      <input placeholder="Name" {...register("username", { required: true })} />
      {errors.name && <span>This field is required</span>}
      <input
        placeholder="email"
        {...register("email", {
          required: true,
          pattern: {
            value: /^\S+@\S+$/i,
          },
        })}
      />
      {errors.email && <span>This field is required</span>}
      {errors.email && errors.email.type === "pattern" ? (
        <span>Wrong!</span>
      ) : null}
      <input
        placeholder="password"
        {...register("password", {
          required: true,
        })}
      />
      {errors.password && <span>This field is required</span>}
      <input type="submit" />
    </form>
  );
}
