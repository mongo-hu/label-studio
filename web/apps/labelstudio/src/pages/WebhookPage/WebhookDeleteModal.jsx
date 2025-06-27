import { Button } from "../../components";
import { modal } from "../../components/Modal/Modal";
import { useModalControls } from "../../components/Modal/ModalPopup";
import { Space } from "../../components/Space/Space";
import { cn } from "../../utils/bem";
import { t } from "../../../../../language/i18n";

export const WebhookDeleteModal = ({ onDelete }) => {
  return modal({
    title: t("Delete"),
    body: () => {
      const ctrl = useModalControls();
      const rootClass = cn("webhook-delete-modal");
      return (
        <div className={rootClass}>
          <div className={rootClass.elem("modal-text")}>
            {t("WebhooksPage11")}
          </div>
        </div>
      );
    },
    footer: () => {
      const ctrl = useModalControls();
      const rootClass = cn("webhook-delete-modal");
      return (
        <Space align="end">
          <Button
            className={rootClass.elem("width-button")}
            onClick={() => {
              ctrl.hide();
            }}
          >
            {t("Cancel")}
          </Button>
          <Button
            look="destructive"
            className={rootClass.elem("width-button")}
            onClick={async () => {
              await onDelete();
              ctrl.hide();
            }}
          >
            {t("Delete")}
          </Button>
        </Space>
      );
    },
    style: { width: 512 },
  });
};
