import React from "react";

export const CadastroController = ({ history }) => {

    return (
        <>
            <div class="container">
                <div class="row">
                    <div class="col-6 mx-auto p-4 m-5 border-light shadow-sm">
                        <h3 class="pb-3">Nova Sessão </h3>
                        <div class="form-style">
                            <form>
                                <div class="form-group pb-3">
                                    <label>Data da sessão:</label>
                                    <input type="text" class="form-control" />
                                </div>
                                <div class="form-group pb-3">
                                    <label>Nº da Sessão:</label>
                                    <input type="text" class="form-control" />
                                </div>
                                <div class="form-group pb-3">
                                    <label>Coachee:</label>
                                    <input type="text" class="form-control" />
                                </div>
                                <div class="form-group pb-3">
                                    <label>Especialidade:</label>
                                    <input type="text" class="form-control" />
                                </div>
                                <div class="form-group pb-3">
                                    <label>Título:</label>
                                    <input type="text" class="form-control" />
                                </div>
                                <div class="form-group pb-3">
                                    <label>Descrição:</label>
                                    <input type="text" class="form-control" />
                                </div>
                                <div class="form-group pb-3">
                                    <label>Link do meet:</label>
                                    <input type="text" class="form-control" />
                                </div>
                                <div class="form-group pb-3">
                                    <label>E-mail do coachee:</label>
                                    <input type="text" class="form-control" />
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default CadastroController;