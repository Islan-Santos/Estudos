import React from "react";

const TodoForm = () => {
    return(
        <div className="todo-form">
            <h2>Criar Taregas:</h2>
            <form action="">
                <input type="text" placeholder="Digite o Titulo"/>
                <select>
                    <option value="">Selecione Uma Categoria</option>
                    <option value="Trabalho">Trabalho</option>
                    <option value="Pessoal">Pessoal</option>
                    <option value="Estudos">Estudos</option>
                </select>
                <button type="submit">Criar Tarefa</button>
            </form>
        </div>
    )
}

export default TodoForm;