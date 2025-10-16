const Cadastro = () => {
    return (

        <div className="container">
            <h1>Crie sua conta no DevWeb Hub</h1>
            <p>Preencha os dados para criar sua conta</p>
            <form>
                <input type="text" placeholder="Nome" required />
                <input type="email" placeholder="Email" required />
                <input type="password" placeholder="Senha" required />
                <button type="submit">Cadastrar</button>
            </form>
            
            <p>Já tem uma conta? <a href="/login">Entre aqui</a></p>
        </div>

        
    )
}

export default Cadastro;