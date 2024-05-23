import React from "react";
import { FilterDropdown } from "../FilterDropdown";
import { t } from "../../../../../../language/i18n";
export const Common = [
  {
    key: "empty",
    label: t("isempty"),
    input: (props) => (
      <FilterDropdown
        value={props.value ?? false}
        onChange={(value) => props.onChange(value)}
        items={[
          { value: true, label: "yes" },
          { value: false, label: "no" },
        ]}
      />
    ),
  },
];
