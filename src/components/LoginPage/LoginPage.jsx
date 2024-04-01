import { Link } from "react-router-dom";
import { DefaultTemplate } from "../DefaultTemplate";
import { Input } from "../Input/input";
import { useForm } from "react-hook-form";
import { loginSchema } from "./formSchemaLogin";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext, useState } from "react";
import { UserContext } from "../../providers/UserContext";
import logo from "../../assets/login.png";
import styles from "./style.module.scss";
import { InputPassword } from "../InputPassword/InputPassword";

export const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const { submitLogin } = useContext(UserContext);

  return (
    <DefaultTemplate>
      <section>
        <div className="container">
          <div className={styles.login}>
            <div>
              <img src={logo} alt="logo login" />
            </div>
            <form onSubmit={handleSubmit(submitLogin)} className={styles.form}>
              <h2 className="title two">ENTRAR</h2>
              <Input
                type="text"
                placeholder="E-MAIL"
                {...register("email")}
                error={errors.email}
              />
              <InputPassword
                placeholder="SENHA"
                {...register("password")}
                error={errors.password}
              />

              <div className={styles.buttons}>
                <button className="btn__black login">ACESSAR</button>
                <Link to="/register" className="btn__white">
                  CADASTRE-SE
                </Link>
              </div>
            </form>
          </div>
        </div>
      </section>
    </DefaultTemplate>
  );
};
