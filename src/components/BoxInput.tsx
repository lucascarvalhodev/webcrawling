import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";

const schema = Yup.object().shape({
  keyword: Yup.string()
    .min(4, "A palavra deve conter no mínimo 4 caracteres!")
    .max(32, "A palavra deve conter no máximo 32 caracteres!")
    .required("O campo é requerido!"),
});

interface IProps {
  onSubmit(keyword: string): void;
}

interface IForm {
  keyword: string;
}

const BoxInput: React.FC<IProps> = ({ onSubmit }) => {
  const initialValues: IForm = {
    keyword: "",
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={(values, action: FormikHelpers<IForm>) => {
        onSubmit(values.keyword);
        action.resetForm();
      }}
    >
      <Form>
        <div className="text-center-crawl mb-crawl-10">
          Cadastre uma palavra chave para inspeção
        </div>
        <div className="box-form-crawl">
          <Field
            name="keyword"
            placeholder={"digite uma palavra chave"}
            className="input-crawl"
            data-testid="keyword"
          />
          <button
            className="btn-crawl ml-crawl-10"
            type="submit"
            data-testid="btn-submit"
          >
            <FontAwesomeIcon icon={faPlus} className="mr-crawl-5" />
            Cadastrar
          </button>
        </div>
        <small className="text-error-crawl mb-crawl-10">
          <ErrorMessage name="keyword" />
        </small>
      </Form>
    </Formik>
  );
};

export default BoxInput;
