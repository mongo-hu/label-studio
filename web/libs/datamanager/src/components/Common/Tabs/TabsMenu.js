import { useMemo } from 'react';
import { Menu } from "../Menu/Menu";
import { t } from "../../../../../../language/i18n";
export const TabsMenu = ({
  onClick,
  editable = true,
  closable = true,
  clonable = true,
  virtual = false,
}) => {
  const items = useMemo(() => [{
    key: 'edit',
    title: t('Rename'),
    enabled: editable && !virtual,
    action: () => onClick("edit"),
  }, {
    key: 'duplicate',
    title: t('Duplicate'),
    enabled: !virtual && clonable,
    action: () => onClick("duplicate"),
  }, {
    key: 'save',
    title: t('Save'),
    enabled: virtual,
    action: () => onClick("save"),
  }], [editable, closable, clonable, virtual]);

  const showDivider = useMemo(() => closable && items.some(({ enabled }) => enabled), [items]);

  return (
    <Menu size="medium" onClick={(e) => e.domEvent.stopPropagation()}>
      {items.map((item) => item.enabled ? (
        <Menu.Item key={item.key} onClick={item.action}>
          {item.title}
        </Menu.Item>
      ) : null)}

      {closable ? (
        <>
          {showDivider && <Menu.Divider />}
          <Menu.Item onClick={() => onClick("close")}>
            {t("Close")}
          </Menu.Item>
        </>
      ) : null}
    </Menu>
  );
};
