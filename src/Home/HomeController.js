import React from "react";

export const Home = ({ history }) => {

    const teste = 1;

    return (
        <>
            <link href="//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css" />
            <script src="//netdna.bootstrapcdn.com/bootstrap/3.0.0/js/bootstrap.min.js"></script>
            <script src="//code.jquery.com/jquery-1.11.1.min.js"></script>

            <div class="container">
                <div class="row col-md-6 col-md-offset-2 custyle">
                    <h1> Suas próximas sessões: </h1>
                    <table class="table table-striped custab">
                        <tr>
                            <td>08:00</td>
                            <td class="text-center">
                                <span class="glyphicon glyphicon-heart">
                                </span>
                            </td>
                            <td>Rapport</td>
                            <td>João A.</td>
                            <td class="text-center">
                            <td class="text-center"><a class='btn btn-info btn-xs' href="#"><span class="glyphicon glyphicon-edit"></span> </a> <a href="#" class="btn btn-danger btn-xs"><span class="glyphicon glyphicon-remove"></span> </a></td>
                            </td>
                        </tr>
                        <tr>
                            <td>09:00</td>
                            <td class="text-center">
                                <span class="glyphicon glyphicon-usd">
                                </span>
                            </td>
                            <td>Valores</td>
                            <td>Ana Silva</td>
                            <td class="text-center"><a class='btn btn-info btn-xs' href="#"><span class="glyphicon glyphicon-edit"></span> </a> <a href="#" class="btn btn-danger btn-xs"><span class="glyphicon glyphicon-remove"></span> </a></td>
                        </tr>
                        <tr>
                            <td>10:00</td>
                            <span class="glyphicon glyphicon-edit">
                            </span>
                            <td>Ling. Amor</td>
                            <td>Luiz N.</td>
                            <td class="text-center"><a class='btn btn-info btn-xs' href="#"><span class="glyphicon glyphicon-edit"></span> </a> <a href="#" class="btn btn-danger btn-xs"><span class="glyphicon glyphicon-remove"></span> </a></td>
                        </tr>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Home;