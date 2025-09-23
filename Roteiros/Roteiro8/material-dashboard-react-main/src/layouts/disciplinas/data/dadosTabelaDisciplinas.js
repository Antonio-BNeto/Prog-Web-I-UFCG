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
            Rohit
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
            Manel
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
            Fabio
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
            Professor a definir
          </MDTypography>
        ),
      },
    ],
  };
}
