import type { FC } from "react";
import { IconSpark } from "../../assets/icons";
import { Block, Elem } from "../../utils/bem";
import "./Enterprise.scss";
import { t } from '../../../../../language/i18n'

export const EnterpriseBadge: FC<{
  filled?: boolean;
}> = ({ filled }) => {
  return (
    <Block name="enterprise-badge" mod={{ filled }}>
      <Elem name="label">
        <Elem name="icon" tag={IconSpark} />
        {t("Enterprise")}
      </Elem>
    </Block>
  );
};
