import { observer } from "mobx-react";
import React from "react";
import { FilterInput } from "../FilterInput";
import { t } from "../../../../../../language/i18n";
const BaseInput = observer(({ value, onChange, placeholder }) => {
  return (
    <FilterInput
      type="text"
      value={value}
      onChange={onChange}
      style={{ fontSize: 14 }}
      placeholder={placeholder}
    />
  );
});

export const StringFilter = [
  {
    key: "contains",
    label: t("contains"),
    valueType: "single",
    input: (props) => <BaseInput {...props} />,
  },
  {
    key: "not_contains",
    label: t("notcontains"),
    valueType: "single",
    input: (props) => <BaseInput {...props} />,
  },
  {
    key: "regex",
    label: t("regex"),
    valueType: "single",
    input: (props) => <BaseInput {...props} />,
  },
  {
    key: "equal",
    label: t("equal"),
    valueType: "single",
    input: (props) => <BaseInput {...props} />,
  },
  {
    key: "not_equal",
    label: t("notequal"),
    valueType: "single",
    input: (props) => <BaseInput {...props} />,
  },
];
