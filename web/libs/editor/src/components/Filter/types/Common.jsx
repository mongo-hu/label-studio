import React from "react";
import { FilterDropdown } from "../FilterDropdown";
import { observer } from "mobx-react";
import { t } from "../../../../../../language/i18n";
const BaseInput = observer((props) => (
  <FilterDropdown onChange={(value) => props.onChange(value)} items={[{ label: "yes" }, { label: "no" }]} />
));

export const Common = [
  {
    key: "empty",
    label:t("isempty"),
    input: BaseInput,
  },
];
