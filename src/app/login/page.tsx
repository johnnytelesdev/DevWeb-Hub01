import styles from "./page.module.css";

const Login = () => {
  return (
    <main>
      <div className="formulario">
        <h1>Entrar no DevWeb Hub</h1>
        <p>Acesse sua conta para continuar</p>
        <form>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
          <label htmlFor="password">Senha:</label>
          <input type="password" id="password" name="password" required />
          <button type="submit">Entrar</button>
        </form>
      </div>
    </main>
  );
};

export default Login;
