// src/layouts/disciplinas/data/dadosTabelaDisciplinas.js

import MDTypography from "components/MDTypography";

export default function data() {
  return {
    columns: [
      { Header: "disciplina", accessor: "disciplina", width: "70%", align: "left" },
      { Header: "professor", accessor: "professor", align: "left" },
    ],

    rows: [
      {
        disciplina: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            Engenharia de Software
          </MDTypography>
        ),
        professor: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            Rohit Gheyi
          </MDTypography>
        ),
      },
      {
        disciplina: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            Sistemas Operacionais
          </MDTypography>
        ),
        professor: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            Thiago Emmanuel Pereira da Cunha Silva
          </MDTypography>
        ),
      },
      {
        disciplina: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            Projeto de Software
          </MDTypography>
        ),
        professor: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            Fabio Jorge Almeida Morais
          </MDTypography>
        ),
      },
      {
        disciplina: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            Redes de Computadores
          </MDTypography>
        ),
        professor: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            Thiago Pereira da Nobrega
          </MDTypography>
        ),
      },
    ],
  };
}
