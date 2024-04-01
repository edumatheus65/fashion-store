import { Link } from "react-router-dom";
import { Input } from "../Input/input";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "./formSchemaRegister";
import { DefaultTemplate } from "../DefaultTemplate";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Register from "../../assets/Register.png";
import styles from "./style.module.scss";
import { InputPassword } from "../InputPassword/InputPassword";

export const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  const { submitRegister } = useContext(UserContext);

  return (
    <DefaultTemplate>
      <div className="container">
        <div className={styles.register}>
          <div className={styles.image}>
            <img src={Register} alt="Register image" />
          </div>
          <div className={styles.container}>
            <form
              className={styles.form}
              onSubmit={handleSubmit(submitRegister)}
            >
              <div className={styles.arrow}>
                <AiOutlineArrowLeft />
                <Link
                  to={"/login"}
                  className="another__paragraph anchorRegister"
                >
                  VOLTAR
                </Link>
              </div>
              <h2 className="title two">CADASTRAR-SE</h2>
              <p className="another__paragraph">
                Seja bem-vindo, administrador!
              </p>
              <Input
                type="text"
                placeholder="NOME"
                {...register("name")}
                error={errors.name}
              ></Input>
              <Input
                type="email"
                placeholder="E-MAIL"
                {...register("email")}
                error={errors.email}
              ></Input>
              <InputPassword
                placeholder="SENHA"
                {...register("password")}
                error={errors.password}
              />
              <InputPassword
                placeholder="CONFIRMAR SENHA"
                {...register("confirmPassword")}
                error={errors.confirmPassword}
              />
              <div className={styles.btn}>
                <button type="submit" className="btn__black">
                  Cadastrar-se
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </DefaultTemplate>
  );
};
