import { observer } from "mobx-react";
import React from "react";
import { FilterInput } from "../FilterInput";
import { Common } from "./Common";
import { t } from "../../../../../../language/i18n";

const BaseInput = observer((props) => {
  return (
    <FilterInput
      {...props}
      type="text"
      value={props.value}
      onChange={props.onChange}
      style={{ fontSize: 14 }}
      placeholder={props.placeholder}
    />
  );
});

export const StringFilter = [
  {
    key: "contains",
    label: t("contains"),
    valueType: "single",
    input: BaseInput,
  },
  {
    key: "not_contains",
    label:  t("notcontains"),
    valueType: "single",
    input: BaseInput,
  },
  {
    key: "regex",
    label: t("regex"),
    valueType: "single",
    input: BaseInput,
  },
  {
    key: "equal",
    label: t("equal"),
    valueType: "single",
    input: BaseInput,
  },
  {
    key: "not_equal",
    label:  t("notequal"),
    valueType: "single",
    input: BaseInput,
  },
  ...Common,
];
