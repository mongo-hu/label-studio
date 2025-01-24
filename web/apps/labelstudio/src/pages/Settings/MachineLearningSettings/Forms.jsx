import { useState } from "react";
import { Button } from "../../../components";
import { ErrorWrapper } from "../../../components/Error/Error";
import { InlineError } from "../../../components/Error/InlineError";
import { Form, Input, Select, TextArea, Toggle } from "../../../components/Form";
import "./MachineLearningSettings.scss";
import { t } from '../../../../../../language/i18n'

const CustomBackendForm = ({ action, backend, project, onSubmit }) => {
  const [selectedAuthMethod, setAuthMethod] = useState("");
  const [, setMLError] = useState();

  return (
    <Form
      action={action}
      formData={{ ...(backend ?? {}) }}
      params={{ pk: backend?.id }}
      onSubmit={async (response) => {
        if (!response.error_message) {
          onSubmit(response);
        }
      }}
    >
      <Input type="hidden" name="project" value={project.id} />

      <Form.Row columnCount={1}>
        <Input name="title" label={t("MachineLearning4")} placeholder={t("MachineLearning5")} required />
      </Form.Row>

      <Form.Row columnCount={1}>
        <Input name="url" label={t("MachineLearning6")} required />
      </Form.Row>

      <Form.Row columnCount={2}>
        <Select
          name="auth_method"
          label={t("MachineLearning7")}
          options={[
            { label: t("MachineLearning8"), value: "NONE" },
            { label: t("MachineLearning13"), value: "BASIC_AUTH" },
          ]}
          onChange={(e) => {
            setAuthMethod(e.target.value);
          }}
        />
      </Form.Row>

      {(backend?.auth_method === "BASIC_AUTH" || selectedAuthMethod === "BASIC_AUTH") && (
        <Form.Row columnCount={2}>
          <Input name="basic_auth_user" label="Basic auth user" />
          {backend?.basic_auth_pass_is_set ? (
            <Input name="basic_auth_pass" label="Basic auth pass" type="password" placeholder="********" />
          ) : (
            <Input name="basic_auth_pass" label="Basic auth pass" type="password" />
          )}
        </Form.Row>
      )}

      <Form.Row columnCount={1}>
        <TextArea
          name="extra_params"
          label={t("MachineLearning9")}
          style={{ minHeight: 120 }}
        />
      </Form.Row>

      <Form.Row columnCount={1}>
        <Toggle
          name="is_interactive"
          label={t("MachineLearning10")}
          description={t("MachineLearning11")}
        />
      </Form.Row>

      <Form.Actions>
        <Button type="submit" look="primary" onClick={() => setMLError(null)}>
          {t("MachineLearning12")}
        </Button>
      </Form.Actions>

      <Form.ResponseParser>
        {(response) => (
          <>
            {response.error_message && (
              <ErrorWrapper
                error={{
                  response: {
                    detail: `Failed to ${backend ? "save" : "add new"} ML backend.`,
                    exc_info: response.error_message,
                  },
                }}
              />
            )}
          </>
        )}
      </Form.ResponseParser>

      <InlineError />
    </Form>
  );
};

export { CustomBackendForm };
